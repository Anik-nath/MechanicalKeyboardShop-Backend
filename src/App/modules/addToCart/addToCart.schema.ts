import { Schema } from 'mongoose';
import { ICartDetails, ICartItems } from './addToCart.interface';

const cartItemDetailsSchema = new Schema<ICartDetails>({
  productId: {
    type: Schema.Types.ObjectId,
    ref: 'Product',
    required: true,
  },
  productQuantity: {
    type: Number,
    required: true,
    default: 0,
  },
});

export const cartItemsSchema = new Schema<ICartItems>(
  {
    cartItems: [cartItemDetailsSchema],
    totalPrice: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true, versionKey: false },
);
