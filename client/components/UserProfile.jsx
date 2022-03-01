import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchWhare } from '../actions'
import Avatar from './Avatar'
import Hairstyles from './Hairstyles'

function UserProfile () {
  const user = useSelector(state => state.user)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchWhare(user))
  }, [])

  const hairColorArr = [
    '29abe2',
    '22b573',
    'ff00ff',
    'f7931e',
    'f7e96f',
    '754c24',
    '000000'
  ]

  const headColourArr = [
    'f1c0a5',
    'd29367',
    'ba8041',
    '995d34',
    '59331a'
  ]

  return (
    <>
      {/* <div>This is where user inputs personal info</div>
      <form action="">
        <label htmlFor="name">Name:</label><br />
        <input defaultValue={user.name} type="text" name="name" /><br />
        <label htmlFor="email">Email:</label><br />
        <input defaultValue={user.email} type="email" name="email" /><br />
        <label htmlFor="dob">Birthday:</label><br />
        <input defaultValue={user.dob} type="date" name="dob" />
      </form> */}
      <section id="userPage">
        <form>
          <h2>My Info</h2>
          <label htmlFor="name">My Name</label>
          <input defaultValue={user.name} type="text" name="name" id="" />
          <label htmlFor="name">My Email</label>
          <input defaultValue={user.email} type="email" name="email" id="" />
          <label htmlFor="dob">My Birthday</label>
          <input defaultValue={user.dob} type="date" name="dob" id="" />

          <h3>My Avatar</h3>
          <section id="chooseAvatar">
            <section className="choices">
              <Avatar />
              <Hairstyles />
            </section>
            <h3>Face:</h3>
            <ul className="colourlist">
              {headColourArr.map((colour, i) => {
                return (
                  <li style={{ backgroundColor: `#${colour}` }} key={i}></li>
                )
              })}
            </ul>
            <h3>hair:</h3>
            <ul className="colourlist">
              {hairColorArr.map((colour, i) => {
                return (
                  <li style={{ backgroundColor: `#${colour}` }} key={i}></li>
                )
              })}
            </ul>
          </section>
          <button id="save">Save</button>&nbsp;
          <button id="delete">Delete &times;</button>
        </form>
      </section>
    </>
  )
}

export default UserProfile
