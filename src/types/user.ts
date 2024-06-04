import { IPost } from "./post";
import { IProfile } from "./profile";

export enum Role {
  USER,
  ADMIN,
}

export interface IUser {
  id: number;
  firstname: string;
  lastname: string;
  email: string;
  role: Role;
  posts: IPost[];
  profile?: IProfile;
}
