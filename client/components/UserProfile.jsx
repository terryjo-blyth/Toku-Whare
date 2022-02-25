import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchWhare } from '../actions'

function UserProfile () {
  const users = useSelector(state => state.whare)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchWhare())
  }, [])

  return (
    <>
      <div>This is where user inputs personal info</div>
      <ul>
        {users.map((user) => <li key={user.id}> {user.name} {user.email} {user.dob} </li>)}
      </ul>
    </>
  )
}

export default UserProfile
