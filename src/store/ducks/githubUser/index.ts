import produce, { Draft } from 'immer'

import { GithubUserState, GithubUserActionTypes } from './types'
import { GITHUB_USER_REQUEST, GITHUB_USER_FAILURE, GITHUB_USER_SUCCESS } from './constants'

export const githubUserInitialState: GithubUserState = {
  loading: false,
  hasError: false,
  error: undefined,
  user: undefined,
}

const githubUserReducer = produce(
  (draft: Draft<GithubUserState>, action: GithubUserActionTypes) => {
    switch (action.type) {
      case GITHUB_USER_REQUEST:
        draft.loading = true;
        break;
      case GITHUB_USER_FAILURE:
        draft.loading = false;
        draft.hasError = true;
        draft.error = action.payload;
        break;
      case GITHUB_USER_SUCCESS:
        draft.loading = false;
        draft.hasError = false;
        draft.error = undefined;
        draft.user = action.payload;
        break;
      default:
    }
  },
  githubUserInitialState,
)

export default githubUserReducer
