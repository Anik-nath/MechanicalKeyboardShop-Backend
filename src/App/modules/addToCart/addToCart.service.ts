import { ICartItems } from './addToCart.interface';
import Cart from './addToCart.model';

// Add into cart
const addIntoCart = async (payload: ICartItems) => {
  const result = await Cart.create(payload);
  return result;
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
