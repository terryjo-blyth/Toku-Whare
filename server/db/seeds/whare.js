/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('whare').del()
    .then(function () {
      // Inserts seed entries
      return knex('whare').insert([
        { id: 2000, auth0Id: 'auth0|123', section: 'tahaTinana', feeling: 'happy', text: 'Go to the gym', createdAt: Date.now(), updatedAt: Date.now(), imageUrl: null, audioUrl: null },
        { id: 2001, auth0Id: 'auth0|123', section: 'tahaWhenua', feeling: 'sad', text: 'look after my health', createdAt: Date.now(), updatedAt: Date.now(), imageUrl: null, audioUrl: null },
        { id: 2002, auth0Id: 'auth0|123', section: 'tahaHinengaro', feeling: 'happy', text: 'I want to play soccer', createdAt: Date.now(), updatedAt: Date.now(), imageUrl: null, audioUrl: null }
      ])
    })
}
