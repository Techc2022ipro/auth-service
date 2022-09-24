export type User = {
  uid: number
  username: string,
  email: string,
  password: string
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
