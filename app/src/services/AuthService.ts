import {AuthServiceInterfaces} from "@/interfaces/AuthInterfaces";
import {BadRequest, BaseError, InternalServerError, NotFound, Unauthorized} from "@/libraries/libs/error/Errors";
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

  // create user profile
  async createUserProfileService(query) {
    const user = await AuthRepository.getUserById(query.uid);
    if(!user) throw new Unauthorized();
    const profileExist = await AuthRepository.fetchProfile(query.uid);
    if(profileExist) throw new BaseError(400, 'Profile already exists');

    const profile = await AuthRepository.createProfile(query);
    if(!profile) throw new BadRequest(); 

    return {message: 'Profile Created.'}
  },
}
