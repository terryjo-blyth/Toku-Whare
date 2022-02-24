import React from 'react'
import { Outlet, Link } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'

function Layout () {
  return (
    <>
      <Header />
      <nav>
        <ul>
          <li>About</li>
          <li>Contact</li>
          <li>Login</li>
          <li><Link to='/'>Whare</Link></li>
          <li><Link to='/userprofile'>Profile</Link></li>
        </ul>
      </nav>
      <div className="outlet-container">
        <Outlet />
      </div>
      <Footer />
    </>
  )
}

export default Layout
