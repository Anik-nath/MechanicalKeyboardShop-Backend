import { model } from 'mongoose';
import { productSchema } from './product.schema';
import { TProduct } from './product.interface';

const Product = model<TProduct>('Product', productSchema);
export default Product;
