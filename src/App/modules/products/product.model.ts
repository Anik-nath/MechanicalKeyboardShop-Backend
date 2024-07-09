import { model } from 'mongoose';
import { productSchema } from './product.schema';
import { TProduct } from './product.interface';

const product = model<TProduct>('product', productSchema);
export default product;
