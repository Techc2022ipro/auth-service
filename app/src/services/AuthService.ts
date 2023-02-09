import {AuthServiceInterfaces} from "@/interfaces/AuthInterfaces";
import {BaseError, InternalServerError, Unauthorized} from "@/libraries/libs/error/Errors";
import {AuthRepository} from "@/repositories/AuthRepository";

export const AuthService: AuthServiceInterfaces = {
  async getUserByIdService(query) {
    const user = await AuthRepository.getUserById(query);
    if(!user) throw new BaseError(404, "User not found");
    return user;
  },

  async signupService(query) {
    const validUserMail = await AuthRepository.fetch(query.email);
    if(validUserMail) throw new BaseError(400, 'User already exists'); 

    const validUserName = await AuthRepository.fetch(query.username); 
    if(validUserName) throw new BaseError(400, 'User already exists'); 
    
    const userCreated = await AuthRepository.signupRepositoriy(query);
    if(!userCreated) throw new InternalServerError();

    return {message: 'User created'};
  },

  async loginService(query)  {
    const user = await AuthRepository.fetch(query.identifier);
    if(!user) throw new Unauthorized();
    return user;
  },

  // get user profile
  async getUserProfileService(query) {
    const profile = await AuthRepository.fetchProfile(query);
    const user = await AuthRepository.getUserById(query);

    if(!user) throw new Unauthorized();

    return profile;
  },

}
