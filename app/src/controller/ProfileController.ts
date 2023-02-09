import {ProfileControllerInterface} from "@/interfaces/ProfileInterfaces";
import {BadRequest, Unauthorized} from "@/libraries/libs/error/Errors";
import {createUserProfileValidationSchema} from "@/schemas/ProfileSchema";
import {ProfileService} from "@/services/ProfileSerivce";
import {S3Service} from "@/services/S3Service";

export const ProfileController: ProfileControllerInterface = {
  async getUserProfileController(query) {
    if(!query) throw new BadRequest();
    const profile = await ProfileService.getUserProfileService(query);
    return profile;
  },

  async createUserProfileController(query) {
    const hasIssue = await createUserProfileValidationSchema.parseAsync(query).catch(err => {return err})
    if(hasIssue.hasIssue) throw new BadRequest();
    if(query.tags.length < 1 && query.tags.length > 3) throw new BadRequest();
    if(query.profilePic) {
      const imageKey = await S3Service.uploadImageService(query.profilePic);
      const profile = {
        uid: query.uid,
        firstName: query.firstName,
        lastName: query.lastName,
        profilePic: imageKey,
        address: query.address,
        phoneNo: query.phoneNo,
        tags: query.tags
      }
      return await ProfileService.createUserProfileService(profile);
    }
    const profile = {
        uid: query.uid,
        firstName: query.firstName,
        lastName: query.lastName,
        profilePic: "",
        address: query.address,
        phoneNo: query.phoneNo,
        tags: query.tags
    }
    return await ProfileService.createUserProfileService(profile);
  },
}
