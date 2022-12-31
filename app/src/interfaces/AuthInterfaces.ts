import { CreateProfile, JwtToken, LoginCredentials, Profile, SignupCredentials, User, UserData } from "@/entities/Auth"
import {ResponseProfile, ResponseUser} from "@/request-response/Auth"


export type AuthControllerInterfaces = {
  getUserByIdController(query: number): Promise<UserData>,
  signupController(query: SignupCredentials): Promise<{message: string}>,
  loginController(query: LoginCredentials): Promise<JwtToken>,
  getUserProfileController(query: number): Promise<Profile>,
  createUserProfileController(query: CreateProfile): Promise<{message: string}>
}
export type AuthServiceInterfaces = {
  getUserByIdService(query: number): Promise<UserData>,
  signupService(query: User): Promise<{message: string}>,
  loginService(query: LoginCredentials): Promise<ResponseUser | null>
  getUserProfileService(query: number): Promise<Profile | null>
  createUserProfileService(query: Profile): Promise<{message: string}>
}
export type AuthRepositoryInterfaces = {
  getUserById(query: number): Promise<UserData | null>
  fetch(query: string): Promise<ResponseUser | null>
  fetchProfile(query: number): Promise<Profile | null>
  signupRepositoriy(query: User): Promise<User>,
  createProfile(query: Profile): Promise<ResponseProfile | null>
}
