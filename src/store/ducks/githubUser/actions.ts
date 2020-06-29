import { GithubUserRequest, GithubUserResponse } from '../../../services/github/types'
import { GithubUserActionTypes } from './types'
import { GITHUB_USER_REQUEST, GITHUB_USER_SUCCESS, GITHUB_USER_FAILURE } from './constants'

export const fetchGithubUser = (
  payload: GithubUserRequest,
): GithubUserActionTypes => ({
  type: GITHUB_USER_REQUEST,
  payload,
})

export const fetchGithubUserSuccess = (
  payload: GithubUserResponse,
): GithubUserActionTypes => ({
  type: GITHUB_USER_SUCCESS,
  payload,
})

export const fetchGithubUserError = (error: string): GithubUserActionTypes => ({
  type: GITHUB_USER_FAILURE,
  payload: error,
})
