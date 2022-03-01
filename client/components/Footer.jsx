import React from 'react'
import { Link } from 'react-router-dom'

function Footer () {
  return (
    <footer>
      <nav>
        <Link to='/'>Home</Link>
        <Link to='/userprofile'>Contact us</Link>
        <a href="#">Privacy policy</a>
        <a href="#">&copy; Copyright Tohora 2022</a>
      </nav>
    </footer>

  )
}

export default Footer
