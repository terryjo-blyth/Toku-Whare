const express = require('express')
// const request = require('superagent')
const db = require('../db/connection')
const router = express.Router()

module.exports = router

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

router.post('/', (req, res) => {
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
