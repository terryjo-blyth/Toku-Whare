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
        { client_id: 1, supporter_id: 3 },
        { client_id: 2, supporter_id: 3 }

      ])
    })
}
