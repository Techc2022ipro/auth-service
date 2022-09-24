import { JwtToken, LoginCredentials, SignupCredentials, User } from "@/entities/Auth"
import {ResponseUser} from "@/request-response/Auth"


export type AuthControllerInterfaces = {
  signupController(query: SignupCredentials): Promise<string>,
  loginController(query: LoginCredentials): Promise<{jwt: JwtToken, userCredentials: ResponseUser}>
}
export type AuthServiceInterfaces = {
<<<<<<< Updated upstream
  signupService(query: User): Promise<string>,
  loginService(query: LoginCredentials): Promise<ResponseUser>
=======
  signupService(query: SignupCredentials): Promise<string>,
  loginService(query: LoginCredentials): Promise<User | null>
>>>>>>> Stashed changes
}
export type AuthRepositoryInterfaces = {
  fetch(query: string): Promise<User | null>
  signupRepositoriy(query: SignupCredentials): Promise<User>,
}
