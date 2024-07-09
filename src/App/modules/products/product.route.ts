import express from 'express';
import { zodValidateRequest } from '../../middleware/zodValidateRequest';
import { productValidation } from './product.validation';
import { productController } from './product.controller';

const router = express.Router();

router.post(
  '/',
  zodValidateRequest(productValidation.productZodValidationSchema),
  productController.createProductIntoDb,
);
router.get('/', productController.getAllProductsFromDb);
router.get('/:productId', productController.getSingleProductFromDb);
router.delete('/:productId', productController.deleteSingleProductFromDb);
router.put(
  '/:productId',
  zodValidateRequest(productValidation.updateProductZodValidationSchema),
  productController.updateSingleProductFromDb,
);

export const productRoutes = router;
