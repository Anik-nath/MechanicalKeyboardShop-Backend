import { Request, Response } from 'express';
import { productServices } from './product.service';
import { sendResponse } from '../../utils/sendResponse';
import { catchAsync } from '../../utils/catchAsync';

// Create a product
const createProductIntoDb = catchAsync(async (req: Request, res: Response) => {
  const result = await productServices.createProduct(req.body);
  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: 'Product Created successfully!',
    data: result,
  });
});

// Fetch all product
const getAllProductsFromDb = catchAsync(async (req: Request, res: Response) => {
  const { title, brand, minPrice, maxPrice, sortByPrice } = req.query;

  if (title || brand) {
    const result = await productServices.getProductBySearch(
      title as string,
      brand as string,
      minPrice ? Number(minPrice) : undefined,
      maxPrice ? Number(maxPrice) : undefined,
      sortByPrice as 'asc' | 'desc',
    );
    if (result.length === 0) {
      sendResponse(res, {
        success: false,
        statusCode: 404,
        message: 'No Product Found',
        data: result,
      });
    }
    sendResponse(res, {
      success: true,
      statusCode: 200,
      message: 'Product filter successfully!',
      data: result,
    });
  } else {
    const result = await productServices.allProducts();
    if (result.length === 0) {
      sendResponse(res, {
        success: false,
        statusCode: 404,
        message: 'No Product Found',
        data: result,
      });
    }
    sendResponse(res, {
      success: true,
      statusCode: 200,
      message: 'All Product fetch successfully!',
      data: result,
    });
  }
});

// Fetch single product
const getSingleProductFromDb = catchAsync(
  async (req: Request, res: Response) => {
    const { productId } = req.params;
    const result = await productServices.singleProduct(productId);
    sendResponse(res, {
      success: true,
      statusCode: 200,
      message: `Product ${productId} is fetch successfully!`,
      data: result,
    });
  },
);

// delete product
const deleteSingleProductFromDb = catchAsync(
  async (req: Request, res: Response) => {
    const { productId } = req.params;
    const result = await productServices.deleteProduct(productId);
    sendResponse(res, {
      success: true,
      statusCode: 200,
      message: `Product ${productId} is deleted successfully!`,
      data: result,
    });
  },
);
// update product
const updateSingleProductFromDb = catchAsync(
  async (req: Request, res: Response) => {
    const { productId } = req.params;
    const result = await productServices.UpdateProduct(productId, req.body);
    sendResponse(res, {
      success: true,
      statusCode: 200,
      message: `Product ${productId} is updated successfully!`,
      data: result,
    });
  },
);

export const productController = {
  createProductIntoDb,
  getAllProductsFromDb,
  getSingleProductFromDb,
  deleteSingleProductFromDb,
  updateSingleProductFromDb,
};
