import {ProfileServiceInterface} from "@/interfaces/ProfileInterfaces";
import {InvalidID} from "@/libraries/libs/error/Errors";
import {ProfileRepository} from "@/repositories/ProfileRepository";

export const ProfileService: ProfileServiceInterface = {
  async getUserProfileService(query) {
    const profile = await ProfileRepository.getUserProfileRepository(query);
    if(!profile) throw new InvalidID();
    return profile;
  }
}
