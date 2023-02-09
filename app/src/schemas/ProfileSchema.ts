import * as Zod from 'zod';

export const createUserProfileValidationSchema = Zod.object({
  uid: Zod.number(),
  firstName: Zod.string().min(3),
  lastName: Zod.string().min(3),
  profiePic: Zod.string().optional(),
  address: Zod.string().optional(),
  phoneNo: Zod.string().max(10).optional(),
  tags: Zod.string().array()
})
