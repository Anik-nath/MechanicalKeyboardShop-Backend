import { Response } from 'express';

type TResponse<T> = {
  success: boolean;
  statusCode: number;
  message?: string;
  data: T;
  token?: string;
};

export const sendResponse = <T>(res: Response, payload: TResponse<T>) => {
  res.status(payload?.statusCode).json({
    success: payload.success,
    statusCode: payload.statusCode,
    message: payload.message,
    data: payload.data,
    token: payload.token,
  });
};
