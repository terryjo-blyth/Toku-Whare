const express = require('express')
// const request = require('superagent')
const db = require('../db/users')
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
router.get('/', checkJwt, async (req, res) => {
  const id = req.user?.sub
  // const token = req.user?.token
  console.log('routes req', req.headers)
  db.getUser(id)
    .then(user => {
      res.json({
        user
      })
      return null
    })
    .catch(err => {
      res.status(500).send(err.message)
    })
})

router.get('/entries', checkJwt, async (req, res) => {
  const id = req.user?.sub
  console.log(id)
  // const id = 'auth0|1234'
  db.getWhareEntries(id)
    .then(entries => {
      res.json({ entries })
      return null
    })
    .catch(err => {
      res.status(500).send(err.message)
    })
})

router.post('/entries', checkJwt, (req, res) => {
  const userId = req.user?.sub
  const { section, entry } = req.body
  const newEntry = {
    text: entry,
    createdAt: Date.now(),
    updatedAt: Date.now()
  }
  db.addWhareEntry(userId, section, newEntry)
    .then(() => {
      return db.getWhareEntries(userId)
    })
    .then(entries => {
      return res.status(201).json({ entries })
    })
    .catch(err => res.status(500).send(err.message))
})

router.patch('/entries/:id', (req, res) => {
  const id = req.user?.sub
  const entryId = req.params.id
  const { entry } = req.body
  const updatedEntry = {
    text: entry,
    updatedAt: Date.now()
  }
  db.updateEntry(id, entryId, updatedEntry)
    .then(() => {
      return db.getWhareEntries(id)
    })
    .then(entries => {
      return res.status(204).json({ entries })
    })
    .catch(err => res.status(500).send(err.message))
})

router.patch('/info', checkJwt, async (req, res) => {
  console.log('postroute')
  const id = req.user?.sub
  const { name, dob, email, svgAvatar } = req.body
  const moreInfo = {
    name: name,
    dob: dob,
    email: email,
    svgAvatar: svgAvatar
  }
  db.addUserInfo(id, moreInfo)
    .then(() => {
      return db.getUser(id)
    })
    .then(user => {
      return res.status(204).json({ user })
    })
    .catch(err => res.status(500).send(err.message))
})
