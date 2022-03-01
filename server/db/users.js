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
    .join('whare', 'users.auth0Id', 'whare.userAuth0Id')
    .where({
      auth0Id: id
    })
    .select('users.auth0Id', 'section', 'feeling', 'text', 'createdAt', 'updatedAt', 'imageUrl', 'audioUrl')
}

function addWhareEntry (id, section, entry, db = connection) {
  const { text, createdAt, updatedAt } = entry
  return db('whare')
    .insert({
      userAuth0Id: id,
      section,
      text,
      createdAt,
      updatedAt
    })
}

function isInDb (id, db = connection) {
  return db('users')
    .count('auth0Id as n').where('auth0Id', id).then(count => {
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

function addUserInfo (id, info, db = connection) {
  const { name, dob, email } = info
  return db('users')
    .where({ auth0Id: id })
    .update({
      name,
      dob,
      email
    })
}

module.exports = {
  getUser,
  getUsers,
  isInDb,
  createUser,
  getWhareEntries,
  addWhareEntry,
  addUserInfo
}
