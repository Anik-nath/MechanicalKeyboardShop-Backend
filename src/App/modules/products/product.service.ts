import { TProduct } from './product.interface';
import product from './product.model';

// create a product
const createProduct = async (payload: TProduct) => {
  const result = await product.create(payload);
  return result;
};
// get all product
const allProducts = async () => {
  const result = await product.find();
  return result;
};
export const productServices = { createProduct, allProducts };
