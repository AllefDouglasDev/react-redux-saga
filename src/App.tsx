import React from 'react'
import { Provider } from 'react-redux'

import store from './store'

import GithubUser from './pages/GithubUser'

interface Props {}

const App: React.FC<Props> = () => {
  return (
    <Provider store={store}>
      <GithubUser />
    </Provider>
  )
}

export default App
