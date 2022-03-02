const express = require('express')
// const request = require('superagent')
const db = require('../db/users')
const router = express.Router()
const checkJwt = require('../auth0')

module.exports = router

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

router.get('/', checkJwt, async (req, res) => {
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

router.get('/entries', checkJwt, async (req, res) => {
  const id = req.user?.sub
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
  const { section, entry, feeling } = req.body
  const newEntry = {
    text: entry,
    createdAt: Date.now(),
    updatedAt: Date.now()
  }
  db.addWhareEntry(userId, section, newEntry, feeling)
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

router.delete('/entries/:id', checkJwt, (req, res) => {
  const auth0Id = req.user?.sub
  db.getEntry(req.params.id)
    .then((entry) => {
      if (entry.userAuth0Id !== auth0Id) {
        return res.sendStatus(401)
      }

      return db.deleteEntry(req.params.id)
    })
    .then(() => db.getWhareEntries(auth0Id))
    .then((entries) => res.status(200).json({ entries }))
    .catch(err => {
      res.status(500).send(err.message)
      console.log(err)
    })
})
