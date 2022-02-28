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
        { id: 2000, description: 'left side', questionPrompts: 'top', color: '000000', resourceLinks: 'right side' },
        { id: 2001, description: 'left side', questionPrompts: 'top', color: '000000', resourceLinks: 'right side' },
        { id: 2002, description: 'left side', questionPrompts: 'top', color: '000000', resourceLinks: 'right side' }
      ])
    })
}
