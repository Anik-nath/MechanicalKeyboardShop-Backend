import { Request, Response, NextFunction, RequestHandler } from 'express';

export const catchAsync = (func: RequestHandler) => {
  return (req: Request, res: Response, next: NextFunction) => {
    Promise.resolve(func(req, res, next)).catch((error) => next(error));
  };
};
