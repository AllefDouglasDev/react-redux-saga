import { all, takeLatest } from 'redux-saga/effects'

/** GithubUser */
import { GITHUB_USER_REQUEST } from '../ducks/githubUser/constants'
import { fetchGithubUser } from '../ducks/githubUser/sagas'

export default function* rootSaga() {
  yield all([
    /** GithubUser */
    takeLatest(GITHUB_USER_REQUEST, fetchGithubUser),
  ])
}
