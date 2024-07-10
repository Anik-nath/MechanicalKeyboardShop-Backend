import { z } from 'zod';

const cartItemDetailsSchema = z.object({
  productId: z.string({ message: 'Product id is not valid' }),
  productQuantity: z
    .number({ message: 'Quantity must be a number' })
    .int()
    .default(0),
});

const cartItemsValidationSchema = z.object({
  body: z.object({
    cartItems: z.array(cartItemDetailsSchema),
  }),
});

export const cartValidation = { cartItemsValidationSchema };
