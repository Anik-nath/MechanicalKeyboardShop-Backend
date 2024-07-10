import express from 'express';
import { cartController } from './addToCart.controller';
import { cartValidation } from './addToCart.validation';
import { zodValidateRequest } from '../../middleware/zodValidateRequest';

const router = express.Router();

router.post(
  '/',
  zodValidateRequest(cartValidation.cartItemsValidationSchema),
  cartController.addCartIntoDb,
);
router.get('/', cartController.getCartItemsFromDb);

export const cartRoutes = router;
