import { Request, Response } from 'express';
import { productServices } from './product.service';

const createProductIntoDb = async (req: Request, res: Response) => {
  try {
    const result = await productServices.createProduct(req.body);
    return res.status(200).json({
      success: true,
      message: 'Product Created successfully!',
      data: result,
    });
  } catch (error) {
    return res.status(500).json({
      success: true,
      message: 'Failed to create product!',
      error,
    });
  }
};

export const productController = { createProductIntoDb };
