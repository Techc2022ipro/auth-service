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
  }
}
