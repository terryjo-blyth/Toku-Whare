import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import { Link } from 'react-router-dom'
import Avatar from './Avatar'
import WhareImage from './WhareImage'
import { useSelector } from 'react-redux'
import { IfAuthenticated, IfNotAuthenticated } from './Authenticated'

function Header () {
  const { logout, loginWithRedirect } = useAuth0()
  const user = useSelector(state => state.user)
  const redirect = {
    redirectUri: `${window.location.origin}`
  }
  function handleLogoff (e) {
    e.preventDefault()
    console.log('log off')
    return logout()
  }

  function handleSignIn (e) {
    e.preventDefault()
    console.log('sign in')
    return loginWithRedirect()
  }

  return (
    <header>

      {/* Logged out: */}
      <IfNotAuthenticated>
        <a className="headerLink" href="/"><h1>Tōku Whare </h1></a>
        <a href="/" onClick={handleSignIn} className="login">
          <span className="loginImg">
            {/* <Avatar /> */}
          </span>
          <span className="loginText">Login</span>
        </a>
      </IfNotAuthenticated>

      {/* Logged in: */}
      <IfAuthenticated>
        <a className="headerLink" href="/"><h1>Tōku <Avatar id={'avatarHeader'} userAvatar={user.svgAvatar}/> Whare </h1></a>
        <a href="/" onClick={handleLogoff} className="login">
          <span className="loginImg">
            <Avatar id={'avatarId'} userAvatar={user.svgAvatar}/>
          </span>
          <span className="loginText">Log off</span>
        </a>
      </IfAuthenticated>

    </header>
  )
}

export default Header
