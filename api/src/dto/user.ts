import type { UserModel } from './../models/user'

export interface UserDTO {
  id: string
  username: string
  name: string
  email: string
}

export const userDto = (user: UserModel): UserDTO => {
  return {
    id: user.id,
    username: user.username,
    name: user.name,
    email: user.email,
  }
}
