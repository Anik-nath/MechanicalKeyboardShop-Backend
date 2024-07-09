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
const updateProductZodValidationSchema = z.object({
  body: z
    .object({
      title: z
        .string({
          message: 'Title is required.',
        })
        .optional(),
      brand: z
        .string({
          message: 'Brand is required.',
        })
        .optional(),
      description: z
        .string({
          message: 'Description is required.',
        })
        .optional(),
      image: z
        .string()
        .url({
          message: 'Image must be a valid URL.',
        })
        .optional(),
      availableQuantity: z.number().int().nonnegative({
        message: 'Available quantity must be a non-negative integer.',
      }),
      price: z
        .number()
        .nonnegative({
          message: 'Price must be a non-negative number.',
        })
        .optional(),
      rating: z
        .number()
        .min(0, { message: 'Rating must be at least 0.' })
        .max(5, { message: 'Rating must be at most 5.' }),
    })
    .optional(),
});
export const productValidation = {
  productZodValidationSchema,
  updateProductZodValidationSchema,
};
