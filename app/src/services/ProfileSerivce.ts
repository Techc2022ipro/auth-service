import {ProfileServiceInterface} from "@/interfaces/ProfileInterfaces";
import {BadRequest, BaseError, NotFound, Unauthorized} from "@/libraries/libs/error/Errors";
import {AuthRepository} from "@/repositories/AuthRepository";
import {ProfileRepository} from "@/repositories/ProfileRepository";

export const ProfileService: ProfileServiceInterface = {
  async getUserProfileService(query) {
    const profile = await ProfileRepository.getUserProfileRepository(query);
    if(!profile) return null;
    return profile;
  },
  // create user profile
  async createUserProfileService(query) {
    const user = await AuthRepository.getUserById(query.uid);
    if(!user) throw new Unauthorized();
    const profileExist = await ProfileRepository.getUserProfileRepository(query.uid);
    if(profileExist) throw new BaseError(400, 'Profile already exists');

    const profile = await ProfileRepository.createProfile(query);
    if(!profile) throw new BadRequest(); 
    return {message: 'Profile Created.'}
  },
}
