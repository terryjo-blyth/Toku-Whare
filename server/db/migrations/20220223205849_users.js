exports.up = function (knex) {
  return knex.schema.createTable('users', (table) => {
    table.increments('id').primary()
    table.string('auth0Id')
    table.boolean('isSupporter')
    table.string('name')
    table.date('dob')
    table.string('email')
    table.string('svgAvatar')
    table.string('tahaWairua')
    table.string('tahaWhanau')
    table.string('tahaTinana')
    table.string('tahaHinengaro')
    table.string('whenua')
  })
}
exports.down = function (knex) {
  return knex.schema.dropTable('users')
}
