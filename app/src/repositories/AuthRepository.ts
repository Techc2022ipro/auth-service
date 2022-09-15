import {AuthRepositoryInterfaces} from "@/interfaces/AuthInterfaces";
import {PrismaClient} from "@prisma/client";

const prisma = new PrismaClient();

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
    return user ? user : null;
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
