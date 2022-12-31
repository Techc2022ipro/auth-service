import {AuthRepositoryInterfaces} from "@/interfaces/AuthInterfaces";
import {PrismaClient, User} from "@prisma/client";

const prisma = new PrismaClient();


  const constructUser = (user: User) => {
    const constructedUser = {
     uid: user.uid,
     username: user.username,
     email: user.email,
     password: user.password
    };
    return constructedUser;
  }
export const AuthRepository: AuthRepositoryInterfaces = {
  async getUserById(uid) {
    const user = await prisma.user.findFirst({
      where: {
        uid
      }
    });
    return user ? {username: user.username, email: user.email} : null;
  },
  async fetch(identifier) {
    const user = await prisma.user.findFirst({
      where: {
        OR: [
          {
            email: identifier
          },
          {
            username: identifier
          }
        ]
      }
    });
    return user ? constructUser(user) : null;
  },

  async signupRepositoriy({username, email, password}) {
    const user = await prisma.user.create({
      data: {
        username,
        email,
        password
      }
    });
    return user;
  },

  async fetchProfile(uid) {
    const profile = await prisma.profile.findFirst({
      where: {
        uid
      }
    })
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
