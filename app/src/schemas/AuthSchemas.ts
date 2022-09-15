import * as Zod from 'zod';

export const signUpValidationSchema =  Zod.object({
  username: Zod.string().min(3).optional(),
  email: Zod.string().email(),
  password: Zod.string(),
  confirmPassword: Zod.string(),
})
