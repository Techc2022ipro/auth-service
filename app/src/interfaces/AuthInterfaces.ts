import { SignupCredentials, User } from "@/entities/Auth"
import {ResponseUser} from "@/request-response/Auth"

export type AuthControllerInterfaces = {
  signupController(query: SignupCredentials): Promise<string>,
}
export type AuthServiceInterfaces = {
  signupService(query: User): Promise<string>,
}
export type AuthRepositoryInterfaces = {
  fetch(identifier: string): Promise<User | null>
  signupRepositoriy(query: User): Promise<User>,
}
