import {ProfileControllerInterface} from "@/interfaces/ProfileInterfaces";
import { Unauthorized} from "@/libraries/libs/error/Errors";
import {ProfileService} from "@/services/ProfileSerivce";

export const ProfileController: ProfileControllerInterface = {
  async getUserProfileController(query) {
    if(!query) throw new Unauthorized();
    const profile = await ProfileService.getUserProfileService(query);
    return profile;
  }
}
