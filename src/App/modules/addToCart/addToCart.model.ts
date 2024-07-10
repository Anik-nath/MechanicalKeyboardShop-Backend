/* eslint-disable @typescript-eslint/no-this-alias */
import { model } from 'mongoose';
import { cartItemsSchema } from './addToCart.schema';
import { ICartItems } from './addToCart.interface';

const Cart = model<ICartItems>('Cart', cartItemsSchema);
export default Cart;
