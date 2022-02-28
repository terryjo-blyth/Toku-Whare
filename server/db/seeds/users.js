/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        { id: 1, auth0Id: 'auth0|1234', isSupporter: false, name: 'Sarah', dob: '2001-04-23', email: 'cheese@gmail.com', svgAvatar: '', tahaWairua: '', tahaWhanau: '', tahaTinana: '', tahaHinengaro: '', whenua: '' },
        { id: 2, auth0Id: 'auth0|1234', isSupporter: false, name: 'JV', dob: '1994-05-24', email: 'cheese@gmail.com', svgAvatar: '', tahaWairua: '', tahaWhanau: '', tahaTinana: '', tahaHinengaro: '', whenua: '' },
        { id: 3, auth0Id: 'auth0|1234', isSupporter: true, name: 'Alex', dob: '1994-06-24', email: 'cheese@gmail.com', svgAvatar: '', tahaWairua: '', tahaWhanau: '', tahaTinana: '', tahaHinengaro: '', whenua: '' }
      ])
    })
}
