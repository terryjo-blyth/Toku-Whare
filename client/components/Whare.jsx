import { Link } from 'react-router-dom'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchWhare, fetchUser } from '../actions'
import { useAuth0 } from '@auth0/auth0-react'
import WhareImage from './WhareImage'

function Home () {
  const user = useSelector(state => state.user)

  const dispatch = useDispatch()
  // console.log(user)
  // console.log(whare)

  // useEffect(() => {
  //   dispatch(fetchUser(user))
  //   dispatch(fetchWhare(user))
  // }, [])

  return (
    <>
      <WhareImage/>
      <nav className="aspectsNav">
        <Link className="wairua" to='tahaWairua'>Taha Wairua <br /><small>Spiritual</small></Link>
        <Link className="tinana" to='tahaTinana'>Taha Tinana <br /><small>Our Body</small></Link>
        <Link className="hinengaro" to='tahaHinengaro'>Taha Hinengaro <br /><small>Mind and emotions</small></Link>
        <Link className="whanau" to='tahaWhanau'>Taha Whānau <br /><small>Family and Friends</small></Link>
        <Link className="whenua" to='whenua'>Whenua <br /><small>Land/Roots</small></Link>
      </nav>
    </>
  )
}

export default Home
