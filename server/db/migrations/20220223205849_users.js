exports.up = function (knex) {
  return knex.schema.createTable('users', (table) => {
    table.string('auth0Id').primary()
    table.boolean('isSupporter')
    table.string('name')
    table.date('dob')
    table.string('email')
    table.string('svgAvatar')
  })
}
exports.down = function (knex) {
  return knex.schema.dropTable('users')
}
