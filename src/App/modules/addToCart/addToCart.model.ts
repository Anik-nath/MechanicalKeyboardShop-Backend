/* eslint-disable @typescript-eslint/no-this-alias */
import { model } from 'mongoose';
import { cartItemsSchema } from './addToCart.schema';
import { ICartItems } from './addToCart.interface';
import Product from '../products/product.model';

cartItemsSchema.pre('save', async function (next) {
  const cart = this;
  for (const item of cart.cartItems) {
    const existingProduct = await Product.findById(item.productId);
    if (!existingProduct) {
      const error = new Error(
        `Product with ID ${item.productId} does not exist!`,
      );
      return next(error);
    }
  }
  next();
});

const Cart = model<ICartItems>('Cart', cartItemsSchema);
export default Cart;
