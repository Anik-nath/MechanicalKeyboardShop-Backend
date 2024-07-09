import { Schema } from 'mongoose';

const cartItemDetailsSchema = new Schema({
  productId: {
    type: Schema.Types.ObjectId,
    ref: 'product',
    required: true,
  },
  productQuantity: {
    type: Number,
    required: true,
    default: 0,
  },
});
const cartItemsSchema = new Schema(
  {
    cartItems: [cartItemDetailsSchema],
  },
  { timestamps: true, versionKey: false },
);
export default cartItemsSchema;
