import { Link } from 'react-router-dom'
import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import WhareImage from './WhareImage'
import { IfAuthenticated, IfNotAuthenticated } from './Authenticated'

function Home () {
  const { loginWithRedirect } = useAuth0()

  function handleSignIn (e) {
    e.preventDefault()
    console.log('sign in')
    return loginWithRedirect()
  }
  return (
    <>
      <WhareImage/>
      <nav className="aspectsNav">
        <IfAuthenticated>
          <Link className="wairua" to='tahaWairua'>Taha Wairua <br /><small>Spiritual</small></Link>
          <Link className="tinana" to='tahaTinana'>Taha Tinana <br /><small>Our Body</small></Link>
          <Link className="hinengaro" to='tahaHinengaro'>Taha Hinengaro <br /><small>Mind and emotions</small></Link>
          <Link className="whanau" to='tahaWhanau'>Taha Whānau <br /><small>Family and Friends</small></Link>
          <Link className="whenua" to='whenua'>Whenua <br /><small>Land/Roots</small></Link>
        </IfAuthenticated>
        <IfNotAuthenticated>
          <a href="/" className="wairua" onClick={handleSignIn}>Taha Wairua <br /><small>Spiritual</small></a>
          <a href="/" className="tinana" onClick={handleSignIn}>Taha Tinana <br /><small>Our Body</small></a>
          <a href="/" className="hinengaro" onClick={handleSignIn}>Taha Hinengaro <br /><small>Mind and emotions</small></a>
          <a href="/" className="whanau" onClick={handleSignIn}>Taha Whānau <br /><small>Family and Friends</small></a>
          <a href="/" className="whenua" onClick={handleSignIn}>Whenua <br /><small>Land/Roots</small></a>
        </IfNotAuthenticated>
      </nav>
    </>
  )
}

export default Home
