import {ProfileRepositoryInterface} from "@/interfaces/ProfileInterfaces";
import {PrismaClient} from "@prisma/client";

const prisma = new PrismaClient();

export const ProfileRepository: ProfileRepositoryInterface = {
  async getUserProfileRepository(uid) {
    const profile = await prisma.profile.findFirst({
      where: {
        uid
      }
    });
    return profile ? profile : null;
  },
  async createProfile({uid, firstName, lastName, profilePic, address, phoneNo, tags}){
    const profile = await prisma.profile.create({
      data: {
        uid,
        firstName,
        lastName,
        profilePic,
        address,
        phoneNo,
        tags
      }
    })
    return profile ? profile : null;
  } 
}
