import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { ApplicationState } from '../../store'
import { fetchGithubUser } from '../../store/ducks/githubUser/actions'

interface Props {}

const GithubUser: React.FC<Props> = () => {

  const githubUser = useSelector((state: ApplicationState) => state.githubUser)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchGithubUser({ username: 'AllefDouglasDev' }))
  }, [dispatch])

  console.log('githubUser', githubUser)

  return (
    <div>
      <h1>GithubUser works!</h1>
      {githubUser.loading && <span>Carregando...</span>}
      {githubUser.user && <span>{JSON.stringify(githubUser.user)}</span>}
    </div>
  )
}

export default GithubUser