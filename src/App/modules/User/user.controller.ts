import { Request, Response } from 'express';
import { userServices } from './user.service';
import { sendResponse } from '../../utils/sendResponse';
import { catchAsync } from '../../utils/catchAsync';

// signup controller
const signup = catchAsync(async (req: Request, res: Response) => {
  const payload = req.body;

  const result = await userServices.createUserFormDb(payload);
  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: 'User sign up successfully',
    data: result,
  });
});

// get all users controller
const getAllUsers = catchAsync(async (req: Request, res: Response) => {
  const result = await userServices.gelAllUsersFromDb();
  if (result.length === 0) {
    sendResponse(res, {
      success: false,
      statusCode: 404,
      message: 'No Data Found',
      data: result,
    });
  }
  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: 'User retrive successfully',
    data: result,
  });
});
export const userController = {
  signup,
  getAllUsers,
};
