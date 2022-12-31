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

export const getUserValidationSchema = Zod.object({
  uid: Zod.number()
})

export const getUserProfileValidationSchema = Zod.object({
  uid: Zod.number()
})

export const createUserProfileValidationSchema = Zod.object({
  uid: Zod.number(),
  firstName: Zod.string().min(3),
  lastName: Zod.string().min(3),
  profiePic: Zod.string().optional(),
  address: Zod.string().optional(),
  phoneNo: Zod.string().max(10).optional(),
  tags: Zod.string().array()
})
