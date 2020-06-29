import { call, put } from 'redux-saga/effects'
import { AxiosError, AxiosResponse } from 'axios'

import * as GithubService from '../../../services/github'
import { fetchGithubUserError, fetchGithubUserSuccess } from './actions'
import { GithubUserRequestAction } from './types'

export function* fetchGithubUser({ payload }: GithubUserRequestAction) {
  try {
    const response: AxiosResponse = yield call(
      GithubService.getUser,
      payload
    )

    yield put(fetchGithubUserSuccess(response.data))
  } catch (error) {
    const err: AxiosError = error
    yield put(fetchGithubUserError(err.message))
  }
}