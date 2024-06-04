import { IUser } from "./user"

export interface IProfile {
    id: number
    bio: string
    user: IUser
    userId: number
  }