import { createStore, applyMiddleware, Store, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'

import { GithubUserState } from './ducks/githubUser/types'

import reducers from './ducks'
import rootSaga from './ducks/rootSaga'

const sagaMiddleware = createSagaMiddleware()

const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store: Store<ApplicationState> = createStore(
  reducers,
  composeEnhancers(
    applyMiddleware(sagaMiddleware)
  )
)

sagaMiddleware.run(rootSaga)

export interface ApplicationState {
  githubUser: GithubUserState,
}

export default store
