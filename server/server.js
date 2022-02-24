const express = require('express')
const path = require('path')

const routes = require('./routes/routes')

const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, 'public')))
//<<<<<<< async-function
server.use('/api/v1/whare', routes)



module.exports = server
