import React from 'react'
import Avatar from './Avatar'
import Hairstyles from './Hairstyles'

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

function TemplateUser () {
  return (
    <section id="userPage">
      <form>
        <h2>My Info</h2>
        <label htmlFor="name">My Name</label>
        <input type="text" name="name" id="" />
        <label htmlFor="dob">My Birthday</label>
        <input type="date" name="dob" id="" />
        <h3>My Avatar</h3>
        <section id="chooseAvatar">
          <Avatar />
          <Hairstyles />
        </section>
        <button id="delete">Delete &times;</button>
        <button id="save">Save</button>
      </form>
    </section>
  )
}

export default TemplateUser
