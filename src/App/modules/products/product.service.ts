/* eslint-disable @typescript-eslint/no-explicit-any */
import { TProduct } from './product.interface';
import Product from './product.model';

// create a product
const createProduct = async (payload: TProduct) => {
  const result = await Product.create(payload);
  return result;
};
// get all product
const allProducts = async () => {
  const result = await Product.find();
  return result;
};
// search product by title and brand
const getProductBySearch = async (
  title?: string,
  brand?: string,
  minPrice?: number,
  maxPrice?: number,
  sortByPrice?: 'asc' | 'desc',
) => {
  const filter: any = { isDeleted: false };

  if (title) filter.title = new RegExp(`^${title}`, 'i');
  if (brand) filter.brand = new RegExp(`^${brand}`, 'i');

  if (minPrice !== undefined || maxPrice !== undefined) {
    filter.price = {};
    if (minPrice !== undefined) filter.price.$gte = minPrice;
    if (maxPrice !== undefined) filter.price.$lte = maxPrice;
  }

  const sortedProduct: any = sortByPrice
    ? { price: sortByPrice === 'asc' ? 1 : -1 }
    : {};
  const result = await Product.find(filter).sort(sortedProduct);
  return result;
};
// get all product
const singleProduct = async (id: string) => {
  const result = await Product.find({ _id: id });
  return result;
};
// get all product
const deleteProduct = async (id: string) => {
  const result = await Product.findByIdAndUpdate(
    { _id: id },
    { isDeleted: true },
    { new: true },
  );
  return result;
};
// get all product
const UpdateProduct = async (id: string, payload: Partial<TProduct>) => {
  const result = await Product.findByIdAndUpdate({ _id: id }, payload, {
    new: true,
  });
  return result;
};

export const productServices = {
  createProduct,
  allProducts,
  singleProduct,
  getProductBySearch,
  deleteProduct,
  UpdateProduct,
};
