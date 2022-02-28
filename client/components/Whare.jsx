import { Link } from 'react-router-dom'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchWhare, fetchUser } from '../actions'
import { useAuth0 } from '@auth0/auth0-react'

function Home () {
  const user = useSelector(state => state.user)
  const whare = useSelector(state => state.whare)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchUser(user))
    dispatch(fetchWhare(user))
  }, [])

  return (
    <>
      <div>This is the HomePage</div>
      Taha tinana: {whare.tahaTinana}
      <Link to='tahaTinana'>This link takes you to the particular aspect</Link>
      {/* {user.taha_tinana} {user.taha_whanau} {user.taha_hinengaro} {user.taha_wairua} {user.whenua} */}
    </>
  )
}

export default Home
