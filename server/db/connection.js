const knex = require('knex')
const config = require('./knexfile')
const env = process.env.NODE_ENV || 'development'
const connection = knex(config[env])

module.exports = {
  getWhare,
  // getSingleUser,
  addData
}

function getWhare (id, db = connection) {
  return db('users').select('taha_tinana as tahaTinana', 'taha_wairua as tahaWairua', 'taha_whanau as tahaWhanau', 'taha_hinengaro as tahaHinengaro', 'whenua').where([id]).first()
}

// function getSingleUser (id, db = connection) {
//   return db('users').select()
//     .where({ id })
//     .first()
// }

function addData (users, db = connection) {
  return db('users')
    .insert({ taha_tinana: users.tahaTinana, taha_wairua: users.tahaWairua, taha_whanau: users.tahaWhanau, taha_hinengaro: users.tahaHinengaro, whenua: users.whenua })
  // .then(([id]) => getWhare(id, db))
}

// function deleteData (id, db = connection) {
//   return db('').where({ id: id }).del()
// }

// function updateData (id, users, db = connection) {
//   return db('users').where({ id: id }).update({
//     users: ,
//
//   })
// }
