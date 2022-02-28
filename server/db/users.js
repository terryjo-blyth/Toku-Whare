const connection = require('./connection')

function getUsers (db = connection) {
  return db('users').select()
}

function getUser (id, db = connection) {
  return db('users')
    .select()
    .where('auth0Id', id)
    .first()
}

function getWhareEntries (id, db = connection) {
  return db('users')
    .join('whare', 'users.auth0Id', 'whare.auth0Id')
    .where({
      auth0Id: id
    })
    .select('auth0Id', 'section', 'feeling', 'text', 'createdAt', 'updatedAt', 'imageUrl', 'audioUrl')
}

function isInDb (id, db = connection) {
  return db('users')
    .count('id as n').where('auth0Id', id).then(count => {
      return count[0].n > 0
    })
}

function createUser (user, db = connection) {
  return db('users')
    .insert({
      auth0Id: user.auth0Id,
      email: user.email
    })
}

module.exports = {
  getUser,
  getUsers,
  isInDb,
  createUser,
  getWhareEntries
}
