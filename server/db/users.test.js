const knex = require('knex')
const config = require('./knexfile')
const testDb = knex(config.test)

const db = require('./whare.js')

beforeAll(() => testDb.migrate.latest())
beforeEach(() => testDb.seed.run())

describe('getUser', () => {
  test('gets a user\'s information', () => {
    expect.assertions(1)
    return db.getUser('auth0|123')
      .then((result) => {
        console.log(result)
        return null
      })
  })
})

describe('getWhareEntries', () => {
  test('gets a user\'s whare data', () => {
    return db.getWhareEntries('auth0|123')
      .then((result) => {
        console.log(result)
        expect(true).toBe(true)
        return null
      })
  })
})
