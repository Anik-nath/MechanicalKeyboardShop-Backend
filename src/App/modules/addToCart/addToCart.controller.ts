import { Request, Response } from 'express';
import { cartServices } from './addToCart.service';
import { sendResponse } from '../../utils/sendResponse';
import { catchAsync } from '../../utils/catchAsync';

const addCartIntoDb = catchAsync(async (req: Request, res: Response) => {
  const result = await cartServices.addIntoCart(req.body);
  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: 'Product added to cart successfully!',
    data: result,
  });
});

const getCartItemsFromDb = catchAsync(async (req: Request, res: Response) => {
  const result = await cartServices.getItemsFromCart();
  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: 'Cart products fetched successfully!',
    data: result,
  });
});

export const cartController = { addCartIntoDb, getCartItemsFromDb };
