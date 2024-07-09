import { Request, Response } from 'express';
import { productServices } from './product.service';
import { sendResponse } from '../../utils/sendResponse';
import { catchAsync } from '../../utils/catchAsync';

const createProductIntoDb = catchAsync(async (req: Request, res: Response) => {
  const result = await productServices.createProduct(req.body);
  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: 'Product Created successfully!',
    data: result,
  });
});

const getAllProductsFromDb = catchAsync(async (req: Request, res: Response) => {
  const result = await productServices.allProducts();
  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: 'All Product fetch successfully!',
    data: result,
  });
});

export const productController = { createProductIntoDb, getAllProductsFromDb };
