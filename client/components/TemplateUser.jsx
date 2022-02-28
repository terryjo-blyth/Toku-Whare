import React from 'react'
import Avatar from './Avatar'
import Hairstyles from './Hairstyles'

function TemplateUser () {
  return (
    <section id="userPage">
      <form>
        <h2>My Info</h2>
        <label htmlFor="name">My Name</label>
        <input type="text" name="name" id="" />
        <label htmlFor="dob">My Birthday</label>
        <input type="date" name="dob" id="" />
        <Avatar />
        <Hairstyles />
        <button id="delete">Delete &times;</button>
        <button id="save">Save</button>
      </form>
    </section>
  )
}

export default TemplateUser
