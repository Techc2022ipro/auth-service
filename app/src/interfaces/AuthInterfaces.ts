import { JwtToken, LoginCredentials, SignupCredentials, User, UserData } from "@/entities/Auth"
import {ResponseUser} from "@/request-response/Auth"


export type AuthControllerInterfaces = {
  getUserByIdController(query: number): Promise<UserData>,
  signupController(query: SignupCredentials): Promise<string>,
  loginController(query: LoginCredentials): Promise<JwtToken>
}
export type AuthServiceInterfaces = {
  getUserByIdService(query: number): Promise<UserData>,
  signupService(query: User): Promise<string>,
  loginService(query: LoginCredentials): Promise<ResponseUser | null>
}
export type AuthRepositoryInterfaces = {
  getUserById(query: number): Promise<UserData | null>
  fetch(query: string): Promise<ResponseUser | null>
  signupRepositoriy(query: User): Promise<User>,
}
