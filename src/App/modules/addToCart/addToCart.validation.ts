import { z } from 'zod';

const cartItemDetailsSchema = z.object({
  productId: z.string(),
  productQuantity: z.number().int().default(0),
});

const cartItemsValidationSchema = z.object({
  cartItems: z.array(cartItemDetailsSchema),
});

export const cartValidation = { cartItemsValidationSchema };
