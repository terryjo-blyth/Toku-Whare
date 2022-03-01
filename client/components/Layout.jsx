import React from 'react'
import { Outlet, Link } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import { useAuth0 } from '@auth0/auth0-react'

import { IfAuthenticated, IfNotAuthenticated } from './Authenticated'

function Layout () {
  const { logout, loginWithRedirect } = useAuth0()
  const redirect = {
    redirectUri: `${window.location.origin}`
  }
  function handleLogoff (e) {
    e.preventDefault()
    console.log('log off')
    return logout()
  }

  function handleRegister (e) {
    e.preventDefault()
    console.log('register')
    return loginWithRedirect(redirect)
  }

  function handleSignIn (e) {
    e.preventDefault()
    console.log('sign in')
    return loginWithRedirect()
  }
  return (
    <>
      <Header />
      {/* <nav>
        <ul>
          <li>About</li>
          <li>Contact</li>
          <IfNotAuthenticated>
            <li><a href="/" onClick={handleRegister}>Register</a></li>
            <li><a href="/" onClick={handleSignIn}>Login</a></li>
          </IfNotAuthenticated>
          <IfAuthenticated>
            <li><a href="/" onClick={handleLogoff}>Log off</a></li>
          </IfAuthenticated>
          <li><Link to='/'>Whare</Link></li>
          <li><Link to='/userprofile'>Profile</Link></li>
        </ul>
      </nav> */}
      <div className="outlet-container">
        <Outlet />
      </div>
      <Footer />
    </>
  )
}

export default Layout
