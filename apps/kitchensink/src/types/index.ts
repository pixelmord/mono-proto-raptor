import { z } from 'zod';

export const LoginDataSchema = z.object({
  username: z.string().min(3),
  password: z.string().min(8),
});
export type LoginData = z.infer<typeof LoginDataSchema>;
