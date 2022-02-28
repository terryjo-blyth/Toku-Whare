import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchWhare, addAspectData } from '../actions'
import { useParams } from 'react-router-dom'

function Aspect () {
  const user = useSelector(state => state.user)
  const token = useSelector(state => state.token)
  const dispatch = useDispatch()
  const aspect = useParams().aspect
  const [formData, setFormData] = useState({})

  console.log(aspect)
  useEffect(() => {
    dispatch(fetchWhare(1))
  }, [])

  function updateClickHandler (e) {
    e.preventDefault()
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value
    })
    dispatch(addAspectData(formData, token))
  }

  return (
    <>
      <div>This is where user inputs personal info</div>
      <form action="">
        <label htmlFor={aspect}>user entry for {aspect}:</label><br />
        <input defaultValue={user[aspect]} type="text" name={aspect} /><br />
        <button onClick={(e) => updateClickHandler(e)}>update {aspect}</button><br />
        <button>delete {aspect}</button>
      </form>
    </>
  )
}

export default Aspect
