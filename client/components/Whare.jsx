import { Link } from 'react-router-dom'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchWhare, fetchUser } from '../actions'
import { useAuth0 } from '@auth0/auth0-react'

function Home () {
  const user = useSelector(state => state.user)
  const whare = useSelector(state => state.whare)
  const dispatch = useDispatch()
  console.log(user)
  console.log(whare)

  // useEffect(() => {
  //   dispatch(fetchUser(user))
  //   dispatch(fetchWhare(user))
  // }, [])

  return (
    <>
      <div>This is the HomePage</div>
<<<<<<< HEAD
      <Link to='tahaTinana'>This link takes you to the particular aspect</Link>
      {/* <ul>
        {users.map((user) => <li key={user.id}> {user.taha_tinana} {user.taha_whanau} {user.taha_hinengaro} {user.taha_wairua} {user.whenua}</li>)}
      </ul> */}
=======
      Taha tinana: {whare.tahaTinana}
      <Link to='tahaTinana'>This link takes you to the particular aspect</Link>
      {/* {user.taha_tinana} {user.taha_whanau} {user.taha_hinengaro} {user.taha_wairua} {user.whenua} */}
>>>>>>> 724031c9ee578c5cb2e9013aeca2b26a6139f261
    </>
  )
}

export default Home
