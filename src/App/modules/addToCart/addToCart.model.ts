import { ICartItems } from './addToCart.interface';
import { model } from 'mongoose';
import cartItemsSchema from './addToCart.schema';

const cart = model<ICartItems>('cart', cartItemsSchema);
export default cart;
