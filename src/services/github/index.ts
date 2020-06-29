import api from '..'

import { GithubUserRequest } from './types'

export const GithubEndpoints = {
  users: (username: string) => `/users/${username}`,
}

export function getUser({ username }: GithubUserRequest) {
  return api.get(GithubEndpoints.users(username))
}
