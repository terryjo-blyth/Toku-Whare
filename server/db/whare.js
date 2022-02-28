const connection = require('./connection')

module.exports = {
  getUsers,
  // getWhare,
  // getSingleUser,
  // addData
  getUser,
  updateEntry,
  createUser,
  isInDb,
  getWhareDB,
  getDescription,
  getQuestionPrompts,
  getColor,
  getResourceLinks
}

function getUsers (db = connection) {
  return db('users').select()
}

function getUser (id, db = connection) {
  return db('users')
    .select(
      'tahaTinana',
      'tahaWairua',
      'tahaWhanau',
      'tahaHinengaro',
      'whenua'
    )
    .where({ id })
    .first()
}
function createUser (user, db = connection) {
  return db('users')
    .insert({ email: user.email, auth0_id: user.auth0_id })
}
/* function getEachWhare (id, db = connection) {
  return db('users').select('taha_tinana as tahaTinana', 'taha_wairua as tahaWairua', 'taha_whanau as tahaWhanau', 'taha_hinengaro as tahaHinengaro', 'whenua').where([id]).first()
} */

// function getSingleUser (id, db = connection) {
//   return db('users').select()
//     .where({ id })
//     .first()
// }

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
      // other fields, e.g. svgAvatar, email, name, etc
      // depends on what the front end sends over when a user signs in for the first time
    })
}

/**
 * adds or updates a users whare entry
 * @param id: auth0Id
 * @param section: string representing what whare a user is editing, i.e., 'tahaWhanau'
 * @param entry: string representing the new text entry to be entered
 * option to add rating to this
 */

function updateEntry (id, section, entry, db = connection) {
  return db('users')
    .where({ auth0Id: id })
    .update({
      [section]: entry
    })
}

function getWhareDB (db = connection) {
  return db('whare')
    .select()
}

function getDescription (db = connection) {
  return db('whare')
    .select('description')
}

function getQuestionPrompts (db = connection) {
  return db('whare')
    .select('questionPrompts')
}

function getColor (id, db = connection) {
  return db('whare')
    .select('color')
    .where('id', id)
}

function getResourceLinks (db = connection) {
  return db('whare')
    .select('resourceLinks')
}
