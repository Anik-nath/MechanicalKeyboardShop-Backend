import { Types, Document } from 'mongoose';

export interface ICartDetails {
  productId: Types.ObjectId;
  productQuantity: number;
}

export interface ICartItems extends Document {
  cartItems: ICartDetails[];
}
