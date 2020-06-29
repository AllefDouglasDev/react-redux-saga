import {
  GITHUB_USER_REQUEST,
  GITHUB_USER_SUCCESS,
  GITHUB_USER_FAILURE,
} from './constants'
import {
  GithubUserRequest,
  GithubUserResponse,
} from '../../../services/github/types'
import { User } from '../../../types/User'

export interface GithubUserState {
  loading: boolean;
  hasError: boolean;
  error?: string;
  user?: User;
}

export interface GithubUserRequestAction {
  type: typeof GITHUB_USER_REQUEST;
  payload: GithubUserRequest;
}

export interface GithubUserSuccessAction {
  type: typeof GITHUB_USER_SUCCESS;
  payload: GithubUserResponse;
}

export interface GithubUserFailureAction {
  type: typeof GITHUB_USER_FAILURE;
  payload: string;
}

export type GithubUserActionTypes =
  | GithubUserRequestAction
  | GithubUserSuccessAction
  | GithubUserFailureAction
