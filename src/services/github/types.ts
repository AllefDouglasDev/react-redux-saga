import { User } from '../../types/User'

export interface GithubUserRequest {
  username: string;
}

export interface GithubUserResponse extends User {}
