import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchWhare, addAspectData } from '../actions'
import { useParams } from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react'
// import data from '../data.json'

function Aspect () {
  const user = useSelector(state => state.user)
  const dispatch = useDispatch()
  const aspect = useParams().aspect
  const aspectData = useSelector(state => state.whare?.filter(entry => entry.section === aspect))
  // const aspectMetaData = data[aspect]
  const [formData, setFormData] = useState({})

  function updateClickHandler (e) {
    e.preventDefault()
    // const { name, value } = e.target
    const value = document.getElementById('aspectDescr').value
    const name = document.getElementById('aspectDescr').name
    setFormData({
      ...formData,
      [name]: value
    })
    // dispatch(addAspectData(formData, token))
    dispatch(addAspectData({
      section: name,
      entry: value
    }))
  }

  return (
    <>
      <div>This is where user inputs personal info</div>
      <div>{JSON.stringify(aspectData)}</div>
      <form action="">
        {/* <div>Description: {aspectMetaData.description}</div> */}
        <label htmlFor={aspect}>user entry for {aspect}:</label><br />
        <input id="aspectDescr" defaultValue={user[aspect]} type="text" name={aspect} /><br />
        <button onClick={(e) => updateClickHandler(e)}>update {aspect}</button><br />
        <button>delete {aspect}</button>
      </form>
    </>
  )
}

export default Aspect
