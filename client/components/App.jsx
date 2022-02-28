import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from './Layout'
import Whare from './Whare'
import UserProfile from './UserProfile'
import Aspect from './Aspect'
import TemplateAspect from './TemplateAspect'
import TemplateUser from './TemplateUser'
import TemplateHome from './TemplateHome'

function App () {
  return (
    <>
      <div className="app">
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Whare />}/>
            <Route path=":aspect" element={<Aspect />} />
            <Route path="userprofile" element={<UserProfile />} />
            <Route path="template-aspect" element={<TemplateAspect />} />
            <Route path="template-user" element={<TemplateUser />} />
            <Route path="template-home" element={<TemplateHome />} />
          </Route>
        </Routes>
      </div>
    </>
  )
}

export default App
