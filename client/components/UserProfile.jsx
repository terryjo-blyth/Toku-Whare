import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchWhare, saveUserInfo } from '../actions'
import Avatar from './Avatar'
import Hairstyles from './Hairstyles'

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
    const avatar = document.getElementById('saveAvatar')
    const svgAvatar = 'svgAvatar'
    console.log(avatar.innerHTML)

    setFormData({
      ...formData,
      [name]: n,
      [email]: e,
      [dob]: d,
      [svgAvatar]: avatar.innerHTML
    })
    dispatch(saveUserInfo({
      name: n,
      email: e,
      dob: d,
      svgAvatar: avatar.innerHTML
    }))
  }

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

  function hairColour (e) {
    const newColor = `#${e.target.id}`
    const hair = document.getElementsByClassName('chooseHair')
    for (let i = 0; i < hair.length; i++) {
      hair.item(i).style.fill = newColor
    }
  }

  function faceColour (e) {
    const newColor = `#${e.target.id}`
    const faces = document.getElementsByClassName('faceColour')
    for (let i = 0; i < faces.length; i++) {
      faces.item(i).style.fill = newColor
    }
  }

  return (
    <>
      {/* <div>This is where user inputs personal info</div>
      <form action="">
        <label htmlFor="name">Name:</label><br />
        <input id="name" defaultValue={user.name} type="text" name="name" /><br />
        <label htmlFor="email">Email:</label><br />
        <input id="email" defaultValue={user.email} type="email" name="email" /><br />
        <label htmlFor="dob">Birthday:</label><br />
        <input id="dob"defaultValue={user.dob} type="date" name="dob" />
        <button onClick={(e) => submitClickHandler(e)}>Submit</button>
      </form>
        <input defaultValue={user.dob} type="date" name="dob" />
      </form> */}
      <section id="userPage">
        <form>
          <h2>My Info</h2>
          <label htmlFor="name">My Name</label>
          <input id="name" defaultValue={user.name} type="text" name="name" />
          <label htmlFor="name">My Email</label>
          <input id="email" defaultValue={user.email} type="email" name="email" />
          <label htmlFor="dob">My Birthday</label>
          <input id="dob" defaultValue={user.dob} type="date" name="dob" />

          <h3>My Avatar</h3>
          <section id="chooseAvatar">
            <section className="choices">
              <Avatar id={'saveAvatar'}/>
              <Hairstyles />
            </section>
            <h3>Face:</h3>
            <ul className="colourlist">
              {headColourArr.map((colour, i) => {
                return (
                  <li id={colour} onClick={(e) => faceColour(e)} style={{ backgroundColor: `#${colour}` }} key={i}></li>
                )
              })}
            </ul>
            <h3>hair:</h3>
            <ul className="colourlist">
              {hairColorArr.map((colour, i) => {
                return (
                  <li id={colour} onClick={(e) => hairColour(e)} style={{ backgroundColor: `#${colour}` }} key={i}></li>
                )
              })}
            </ul>
          </section>
          <button onClick={(e) => submitClickHandler(e)} id="save">Save</button>&nbsp;
        </form>
      </section>
    </>
  )
}

export default UserProfile
