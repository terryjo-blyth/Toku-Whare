import React from 'react'
import { Link } from 'react-router-dom'

function Home () {
  return (
    <>
      <div>This is the HomePage</div>
      <Link to='TahaTinana'>This link takes you to the particular aspect</Link>
    </>
  )
}

export default Home
