import React from 'react'
import { Link } from 'react-router-dom'

function Footer () {
  return (
    <footer>
      <nav>
        {/* we'll want a conditional to show this link only when logged in: */}
        <Link class="profLink" to='/userprofile'>My Profile</Link>

        <Link to='/'>Home</Link>
        <a href="#">Contact us</a>
        <a href="#">Privacy policy</a>
        <a href="#">&copy; Copyright Tohora 2022</a>
      </nav>
    </footer>

  )
}

export default Footer
