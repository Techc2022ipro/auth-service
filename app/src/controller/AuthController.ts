import {AuthControllerInterfaces} from "@/interfaces/AuthInterfaces";
import {BadRequest, InternalServerError} from "@/libraries/libs/error/Errors";
import {signUpValidationSchema} from "@/schemas/AuthSchemas";
import {AuthService} from "@/services/AuthService";
import * as bcrypt from 'bcrypt';

export const AuthControllers: AuthControllerInterfaces= {
  async signupController(query) {
    const isValid = await signUpValidationSchema.parseAsync(query);
    if(!isValid) throw new BadRequest();
    if(query.confirmPassword !== query.password) throw new BadRequest();
    const user = {
      username: query.username,
      email: query.email,
      password: bcrypt.hashSync(query.password, 10),
    }
    const createUser = await AuthService.signupService(user);
    if(!createUser) throw new InternalServerError();
    return createUser;
  }
} 
