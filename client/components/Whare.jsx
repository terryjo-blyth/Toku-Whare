import { Link } from 'react-router-dom'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchWhare } from '../actions'

function Home () {
  const user = useSelector(state => state.userData)
  const dispatch = useDispatch()
  console.log(user)
  useEffect(() => {
    dispatch(fetchWhare(1))
  }, [])

  return (
    <>
      <div>This is the HomePage</div>
      <Link to='tahaTinana'>This link takes you to the particular aspect</Link>
      {/* <ul>
        {users.map((user) => <li key={user.id}> {user.taha_tinana} {user.taha_whanau} {user.taha_hinengaro} {user.taha_wairua} {user.whenua}</li>)}
      </ul> */}
    </>
  )
}

export default Home
