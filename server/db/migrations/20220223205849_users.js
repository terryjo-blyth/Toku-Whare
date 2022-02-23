exports.up = function (knex) {
  return knex.schema.createTable('users', (table) => {
    table.increments('id').primary()
    table.string('auth0_id')
    table.boolean('is_supporter')
    table.string('name')
    table.date('dob')
    table.string('email')
    table.string('svgAvatar')
    table.string('taha_wairua')
    table.string('taha_whanau')
    table.string('taha_tinana')
    table.string('taha_hinengaro')
    table.string('whenua')
  })
}
exports.down = function (knex) {
  return knex.schema.dropTable('users')
}
