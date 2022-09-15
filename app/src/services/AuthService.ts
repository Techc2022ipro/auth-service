import {AuthServiceInterfaces} from "@/interfaces/AuthInterfaces";
import {BaseError, InternalServerError} from "@/libraries/libs/error/Errors";
import {AuthRepository} from "@/repositories/AuthRepository";

export const AuthService: AuthServiceInterfaces = {
  async signupService(query) {
    const user = await AuthRepository.fetch(query.email);
    if(user) throw new BaseError(400, 'User already exists'); 
    const userCreated = await AuthRepository.signupRepositoriy(query);
    if(!userCreated) throw new InternalServerError();
    return 'User created';
  }
}
