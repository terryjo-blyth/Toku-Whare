import { Link } from 'react-router-dom'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchWhare, fetchUser } from '../actions'
import { useAuth0 } from '@auth0/auth0-react'

function Home () {
  const user = useSelector(state => state.user)

  const dispatch = useDispatch()
  // console.log(user)
  // console.log(whare)

  // useEffect(() => {
  //   dispatch(fetchUser(user))
  //   dispatch(fetchWhare(user))
  // }, [])

  return (
    <>
      <div>This is the HomePage</div>
      <Link to='tahaTinana'>Taha Tinana</Link>
      <Link to='tahaWairua'>Taha Wairua</Link>
      <Link to='tahaWhanau'>Taha Whanau</Link>
      <Link to='tahaHinengaro'>Taha Hinengaro</Link>
      <Link to='whenua'>Whenua</Link>
      {/* {user.taha_tinana} {user.taha_whanau} {user.taha_hinengaro} {user.taha_wairua} {user.whenua} */}
    </>
  )
}

export default Home
