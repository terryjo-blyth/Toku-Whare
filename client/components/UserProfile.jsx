import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchWhare, saveUserInfo } from '../actions'

function UserProfile () {
  const user = useSelector(state => state.user)
  const [formData, setFormData] = useState({})

  const dispatch = useDispatch()

  function submitClickHandler (event) {
    event.preventDefault()
    // const { name, value } = e.target
    const n = document.getElementById('name').value
    const name = document.getElementById('name').name
    const e = document.getElementById('email').value
    const email = document.getElementById('email').name
    const d = document.getElementById('dob').value
    const dob = document.getElementById('dob').name
    setFormData({
      ...formData,
      [name]: n,
      [email]: e,
      [dob]: d
    })
    dispatch(saveUserInfo({
      name: n,
      email: e,
      dob: d
    }))
  }

  return (
    <>
      <div>This is where user inputs personal info</div>
      <form action="">
        <label htmlFor="name">Name:</label><br />
        <input id="name" defaultValue={user.name} type="text" name="name" /><br />
        <label htmlFor="email">Email:</label><br />
        <input id="email" defaultValue={user.email} type="email" name="email" /><br />
        <label htmlFor="dob">Birthday:</label><br />
        <input id="dob"defaultValue={user.dob} type="date" name="dob" />
        <button onClick={(e) => submitClickHandler(e)}>Submit</button>
      </form>
    </>
  )
}

export default UserProfile
