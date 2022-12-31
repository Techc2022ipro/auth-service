export type User = {
  username: string,
  email: string,
  password: string
}

export type Image = {
  fieldname: string 
  originalname: string 
  encoding: string 
  mimetype: string 
  destination: string 
  filename: string 
  path: string
  size: number 
}

export type Profile = {
  uid: number,
  firstName: string,
  lastName: string,
  profilePic: string | null,
  address: string | null,
  phoneNo: string | null,
  tags: string[]
}

export type CreateProfile = {
  uid: number,
  firstName: string,
  lastName: string,
  profilePic: Image | null,
  address: string | null,
  phoneNo: string | null,
  tags: string[]
}

export type UserData = {
  username: string,
  email: string
}

export type SignupCredentials = {
  username: string,
  email: string,
  password: string,
  confirmPassword: string,
}

export type LoginCredentials = {
  identifier: string,
  password: string
}

export type JwtToken = {
  accessToken: string,
  refreshToken: string
}
