import { ICategory } from "./category"
import { IUser } from "./user"

export interface IPost {
    id: number
    createdAt: Date
    updatedAt: Date
    title: string
    published: boolean
    author: IUser
    authorId: number
    categories: ICategory[]
  }