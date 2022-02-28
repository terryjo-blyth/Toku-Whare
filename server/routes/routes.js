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
  const auth0Id = req.user?.sub
  const { email } = newUser
  const user = {
    auth0Id: auth0Id,
    email
  }
  console.log(newUser, auth0Id, email)
  try {
    const isInDb = await db.isInDb(auth0Id)
    if (isInDb) {
      return res.sendStatus(200)
    }
    await db.createUser(user)
    res.sendStatus(201)
  } catch (err) {
    console.error(err)
    res.status(500).send(err.message)
  }
})

// use checkJwt
router.get('/user', checkJwt, async (req, res) => {
  const id = req.user?.sub
  console.log('id', id)
  db.getUser(id)
    .then(user => {
      res.json({ user })
      return null
    })
    .catch(err => {
      res.status(500).send(err.message)
    })
})

router.get('/whare', checkJwt, async (req, res) => {
  const id = req.user?.sub
  console.log('id', id)
  db.getWhare(id)
    .then(whare => {
      res.json({ whare })
      return null
    })
    .catch(err => {
      res.status(500).send(err.message)
    })
})
// use checkJwt
// router.patch('/entry', checkJwt, (req, res) => {
router.patch('/entry', (req, res) => {
  const id = req.user?.sub
  const { section, entry } = req.body
  db.updateEntry(id, section, entry)
    .then(() => {
      res.sendStatus(204)
      return null
    })
    .catch(err => res.status(500).send(err.message))
})
