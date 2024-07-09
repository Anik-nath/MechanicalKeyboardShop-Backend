import { Types } from 'mongoose';

export interface ICartDetails {
  productId: Types.ObjectId;
  productQuantity: number;
}
export interface ICartItems extends ICartDetails {
  cartItems: ICartDetails[];
}
