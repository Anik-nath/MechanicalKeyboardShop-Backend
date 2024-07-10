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

export const cartServices = { addIntoCart, getItemsFromCart };
