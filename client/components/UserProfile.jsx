import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchWhare } from '../actions'

function UserProfile () {
  const user = useSelector(state => state.user)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchWhare(1))
  }, [])

  return (
    <>
      <div>This is where user inputs personal info</div>
      <form action="">
        <label htmlFor="name">Name:</label><br />
        <input defaultValue={user.name} type="text" name="name" /><br />
        <label htmlFor="email">Email:</label><br />
        <input defaultValue={user.email} type="email" name="email" /><br />
        <label htmlFor="dob">Birthday:</label><br />
        <input defaultValue={user.dob} type="date" name="dob" />
      </form>
    </>
  )
}

export default UserProfile
