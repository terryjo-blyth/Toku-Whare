import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from './Layout'
import Whare from './Whare'
import UserProfile from './UserProfile'
import Aspect from './Aspect'
import { cacheUser } from '../auth0-utils'
import { useAuth0 } from '@auth0/auth0-react'

function App () {
  cacheUser(useAuth0)
  return (
    <>
      <div className="app">
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Whare />}/>
            <Route path=":aspect" element={<Aspect />} />
            <Route path="userprofile" element={<UserProfile />} />

          </Route>
        </Routes>
      </div>
    </>
  )
}

export default App
