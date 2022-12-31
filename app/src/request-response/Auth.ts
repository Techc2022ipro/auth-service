export type ResponseUser = {
  uid:        number
  username:   string
  email:      string
  password:   string
}

export type ResponseProfile = {
  profid: number,
  uid: number,
  firstName: string,
  lastName: string,
  profilePic: string | null,
  address: string | null,
  phoneNo: string | null,
  tags: string[]
  createdAt: Date
}
