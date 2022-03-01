/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable('whare', (table) => {
    table.increments('id').primary()
    table.string('userAuth0Id')
    table.string('section')
    table.string('feeling')
    table.string('text')
    table.datetime('createdAt')
    table.datetime('updatedAt')
    table.string('imageUrl')
    table.string('audioUrl')
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable('whare')
}
