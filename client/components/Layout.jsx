import React from 'react'
import { Outlet, Link } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'

function Layout () {
  return (
    <>
      <Header />
      <div className="outlet-container">
        <Outlet />
      </div>
      <Footer />
    </>
  )
}

export default Layout
