import { CreateProfile, Profile, User } from "@/entities/Auth"
import {ResponseProfile} from "@/request-response/Auth"

export type ProfileControllerInterface = {
  getUserProfileController(query: number): Promise<Profile | null>
  createUserProfileController(query: CreateProfile): Promise<{message: string}>
}

export type ProfileServiceInterface = {
  getUserProfileService(query: number): Promise<Profile | null>
  createUserProfileService(query: Profile): Promise<{message: string}>
}

export type ProfileRepositoryInterface = {
  getUserProfileRepository(query: number): Promise<Profile | null>
  createProfile(query: Profile): Promise<ResponseProfile | null>
}
