import { JwtToken, LoginCredentials, Profile, SignupCredentials, User, UserData } from "@/entities/Auth"
import {ResponseUser} from "@/request-response/Auth"


export type AuthControllerInterfaces = {
  getUserByIdController(query: number): Promise<UserData>,
  signupController(query: SignupCredentials): Promise<{message: string}>,
  loginController(query: LoginCredentials): Promise<{jwt:JwtToken, userData:UserData}>,
  getUserProfileController(query: number): Promise<Profile>,
  getUserProfileByUidController(query: number): Promise<Profile>,
}

export type AuthServiceInterfaces = {
  getUserByIdService(query: number): Promise<UserData>,
  signupService(query: User): Promise<{message: string}>,
  loginService(query: LoginCredentials): Promise<ResponseUser | null>
  getUserProfileService(query: number): Promise<Profile | null>
}

export type AuthRepositoryInterfaces = {
  getUserById(query: number): Promise<UserData | null>
  fetch(query: string): Promise<ResponseUser | null>
  fetchProfile(query: number): Promise<Profile | null>
  signupRepositoriy(query: User): Promise<User>,
}
