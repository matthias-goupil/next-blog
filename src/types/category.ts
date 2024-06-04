import { IPost } from "./post"

export interface ICategory {
    id: number
    name:  string
    posts: IPost[]
  }