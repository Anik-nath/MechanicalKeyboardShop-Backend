import { Schema } from 'mongoose';

const cartItemDetailsSchema = new Schema({
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

export const cartItemsSchema = new Schema(
  {
    cartItems: [cartItemDetailsSchema],
  },
  { timestamps: true, versionKey: false },
);
