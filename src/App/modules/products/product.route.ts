import express from 'express';
import { zodValidateRequest } from '../../middleware/zodValidateRequest';
import { productValidation } from './product.validation';

const router = express.Router();

router.post(
  '/',
  zodValidateRequest(productValidation.productZodValidationSchema),
);

export const productRoutes = router;
