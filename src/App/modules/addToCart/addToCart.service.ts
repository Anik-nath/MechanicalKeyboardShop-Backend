import { Types } from 'mongoose';
import Cart from './addToCart.model';
import Product from '../products/product.model';

const addIntoCart = async (
  productId: Types.ObjectId,
  productQuantity: number,
) => {
  let cart = await Cart.findOne();
  if (!cart) {
    cart = await Cart.create({ cartItems: [{ productId, productQuantity }] });
  } else {
    const existingItemIndex = cart.cartItems.findIndex((item) =>
      item.productId.equals(productId),
    );
    // duplicate item not added just update quantity
    if (existingItemIndex !== -1) {
      cart.cartItems[existingItemIndex].productQuantity += productQuantity;
    } else {
      cart.cartItems.push({ productId, productQuantity });
    }
  }

  // Product exist or not
  const product = await Product.findById(productId);
  if (!product) {
    throw new Error(`Product is not found!`);
  }
  // check Insufficient
  if (product.availableQuantity < productQuantity) {
    throw new Error(`Insufficient quantity available!`);
  }
  // Reduce availableQuantity
  product.availableQuantity -= productQuantity;
  await product.save();

  await cart.save();

  return cart;
};

// Get items from cart
const getItemsFromCart = async () => {
  const result = await Cart.find().populate('cartItems.productId');
  return result;
};
//  get single cart items
const getSingleItemsFromCart = async (id: string) => {
  const result = await Cart.find({ _id: id }).populate('cartItems.productId');
  return result;
};

// Get items from cart
const removeItemsFromCart = async (cartId: string, itemId: string) => {
  const result = await Cart.findOneAndUpdate(
    { _id: cartId },
    { $pull: { cartItems: { _id: itemId } } },
    { new: true },
  );
  return result;
};

export const cartServices = {
  addIntoCart,
  getItemsFromCart,
  getSingleItemsFromCart,
  removeItemsFromCart,
};
