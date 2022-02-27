/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('connections').del()
    .then(function () {
      // Inserts seed entries
      return knex('connections').insert([
        { clientId: 1, supporterId: 3 },
        { clientId: 2, supporterId: 3 }

      ])
    })
}
