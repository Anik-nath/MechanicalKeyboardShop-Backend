import { z } from 'zod';

const productZodValidationSchema = z.object({
  body: z.object({
    title: z.string({
      message: 'Title is required.',
    }),
    brand: z.string({
      message: 'Brand is required.',
    }),
    description: z.string({
      message: 'Description is required.',
    }),
    image: z.string().url({
      message: 'Image must be a valid URL.',
    }),
    availableQuantity: z.number().int().nonnegative({
      message: 'Available quantity must be a non-negative integer.',
    }),
    price: z.number().nonnegative({
      message: 'Price must be a non-negative number.',
    }),
    rating: z
      .number()
      .min(0, { message: 'Rating must be at least 0.' })
      .max(5, { message: 'Rating must be at most 5.' }),
  }),
});
export const productValidation = { productZodValidationSchema };
