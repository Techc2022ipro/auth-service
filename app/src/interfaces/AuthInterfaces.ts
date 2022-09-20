import { JwtToken, LoginCredentials, SignupCredentials, User } from "@/entities/Auth"
import {ResponseUser} from "@/request-response/Auth"


export type AuthControllerInterfaces = {
  signupController(query: SignupCredentials): Promise<string>,
  loginController(query: LoginCredentials): Promise<JwtToken>
}
export type AuthServiceInterfaces = {
  signupService(query: User): Promise<string>,
  loginService(query: LoginCredentials): Promise<ResponseUser>
}
export type AuthRepositoryInterfaces = {
  fetch(query: string): Promise<ResponseUser | null>
  signupRepositoriy(query: User): Promise<User>,
}
