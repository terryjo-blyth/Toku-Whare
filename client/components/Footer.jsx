import React from 'react'
import { Link } from 'react-router-dom'
import { IfAuthenticated } from './Authenticated'

function Footer () {
  return (
    <footer>
      <nav>
        {/* we'll want a conditional to show this link only when logged in: */}
        <IfAuthenticated>
          <Link className="profLink" to='/userprofile'>My Profile</Link>
        </IfAuthenticated>

        <Link to='/'>Home</Link>
        <a href="/print-version">Print Version</a>
        <a href="/">&copy; Copyright Tohora 2022</a>
      </nav>
    </footer>

  )
}

export default Footer
