import { Profile, User } from "@/entities/Auth"

export type ProfileControllerInterface = {
  getUserProfileController(query: number): Promise<Profile>
}

export type ProfileServiceInterface = {
  getUserProfileService(query: number): Promise<Profile>
}

export type ProfileRepositoryInterface = {
  getUserProfileRepository(query: number): Promise<Profile | null>
}
