const express = require('express')
// const request = require('superagent')
const db = require('../db/whare')
const router = express.Router()

module.exports = router

router.get('/', async (req, res) => {
  try {
    const users = await db.getUsers()
    res.json({ users })
  } catch (err) {
    console.error(err)
    res.status(500).send(err.message)
  }
})

// API routes - use DB functions in here
router.get('/:id', (req, res) => {
  db.getWhare(req.params.id)
    .then(whare => {
      res.json(whare)
      return null
    })
    .catch(err => {
      res.status(500).send(err.message)
    })
})

router.post('/', async (req, res) => {
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

/* router.post('/', (req, res) => {
  const data = req.body.data
  db.addData(data)
    .then((data) => {
      res.json(data)
      return null
    })
    .catch(err => {
      res.status(500).send(err.message)
    })
})
 */
// router.post('/', (req, res) => {
//   db.removeWhare(req.body.id)
//     .then((remove) => {
//       res.json(remove)
//       return null
//     })
//     .catch(err => {
//       res.status(500).send(err.message)
//     })
// })

// router.post('/', (req, res) => {
//   db.updateWhare(req.body.id)
//     .then((update) => {
//       res.json(update)
//       return null
//     })
//     .catch(err => {
//       res.status(500).send(err.message)
//     })
// })
