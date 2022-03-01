const connection = require('./connection')

module.exports = {
  getWhare,
  updateEntry,
  getWhareDB,
  getDescription,
  getQuestionPrompts,
  getColor,
  getResourceLinks,
  getEntry,
  deleteEntry
}

function getWhare (id, db = connection) {
  return db('users')
    .select(
      'tahaTinana',
      'tahaWairua',
      'tahaWhanau',
      'tahaHinengaro',
      'whenua'
    )
    .where('auth0Id', id)
    .first()
}

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
