/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('users')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {
          auth0Id: 'auth0|1234',
          isSupporter: false,
          name: 'Sarah',
          dob: '2001-04-23',
          email: 'cheese@gmail.com',
          svgAvatar: ''
        }
      ])
    })
}
