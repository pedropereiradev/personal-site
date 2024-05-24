import { z } from 'zod';

export const ContactEmailSchema = z.object({
  fullName: z.string().min(2, {
    message: 'Full name must be at least 2 characters.',
  }),
  email: z.string().email({
    message: 'Invalid email address.',
  }),
  description: z.string().min(10, {
    message: 'Description must be at least 10 characters.',
  }),
});

export type contactEmailSchema = z.infer<typeof ContactEmailSchema>;
