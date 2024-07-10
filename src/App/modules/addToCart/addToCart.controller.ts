import { Request, Response } from 'express';
import { cartServices } from './addToCart.service';
import { sendResponse } from '../../utils/sendResponse';
import { catchAsync } from '../../utils/catchAsync';

const addCartIntoDb = catchAsync(async (req: Request, res: Response) => {
  const { cartItems } = req.body;

  for (const item of cartItems) {
    const { productId, productQuantity } = item;
    if (!productId || !productQuantity) {
      return res
        .status(400)
        .json({ success: false, message: 'Invalid cart item data' });
    }
    const result = await cartServices.addIntoCart(productId, productQuantity);
    sendResponse(res, {
      success: true,
      statusCode: 200,
      message: 'Product added to cart successfully!',
      data: result,
    });
  }
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

const getSingleCartFromDb = catchAsync(async (req: Request, res: Response) => {
  const { cartId } = req.params;
  const result = await cartServices.getSingleItemsFromCart(cartId);
  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: 'Cart products fetched successfully!',
    data: result,
  });
});

const removeCartItemsFromDb = catchAsync(
  async (req: Request, res: Response) => {
    const { cartId, itemId } = req.params;
    const result = await cartServices.removeItemsFromCart(cartId, itemId);
    sendResponse(res, {
      success: true,
      statusCode: 200,
      message: 'Cart products remove successfully!',
      data: result,
    });
  },
);

export const cartController = {
  addCartIntoDb,
  getCartItemsFromDb,
  getSingleCartFromDb,
  removeCartItemsFromDb,
};
