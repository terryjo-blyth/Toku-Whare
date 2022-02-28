const express = require('express')
// const request = require('superagent')
const db = require('../db/whare')
const router = express.Router()
const checkJwt = require('../auth0')

module.exports = router

// be careful, this lets any user get ALL of the information of all other users
// router.get('/', async (req, res) => {
//   try {
//     const users = await db.getUsers()
//     res.json({ users })
//   } catch (err) {
//     console.error(err)
//     res.status(500).send(err.message)
//   }
// })

router.post('/', checkJwt, async (req, res) => {
  const newUser = req.body
  const { auth0Id, email } = newUser
  const user = {
    auth0_id: auth0Id,
    email
  }
  try {
    await db.createUser(user)
    res.sendStatus(201)
  } catch (err) {
    console.error(err)
    res.status(500).send(err.message)
  }
})

// use checkJwt
router.get('/user', checkJwt, (req, res) => {
  const id = req.user?.sub
  db.getUser(id)
    .then(user => {
      res.json({ user })
      return null
    })
    .catch(err => {
      res.status(500).send(err.message)
    })
})

// use checkJwt
router.patch('/entry', checkJwt, (req, res) => {
  const id = req.user?.sub
  const { section, entry } = req.body
  db.updateEntry(id, section, entry)
    .then(() => {
      res.sendStatus(204)
      return null
    })
    .catch(err => res.status(500).send(err.message))
})
