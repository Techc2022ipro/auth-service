import * as Zod from 'zod';

export const signUpValidationSchema =  Zod.object({
  username: Zod.string().min(3),
  email: Zod.string().email(),
  password: Zod.string(),
  confirmPassword: Zod.string(),
})

export const loginValidationSchema = Zod.object({
  identifier: Zod.string().min(3),
  password: Zod.string()
})
