import { z } from 'zod';

//user validation schema
const userValidationSchema = z.object({
  body: z.object({
    name: z
      .string()
      .min(1, 'Name is required')
      .max(20)
      .refine((value) => /^[A-Z]/.test(value), {
        message: 'Name must start with capital letter',
      }),
    email: z.string().email('Invalid email format'),
    password: z
      .string({ invalid_type_error: 'Password must be string' })
      .max(20, { message: 'Password can not be more than 20 characters' })
      .optional(),
    phone: z.string().min(1, 'Phone number is required'),
    role: z.enum(['admin', 'user']),
    address: z.string().min(1, 'Address is required'),
  }),
});

export const userValidation = {
  userValidationSchema,
};
