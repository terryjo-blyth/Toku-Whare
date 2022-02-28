const knex = require('knex')
const config = require('./knexfile')
const testDb = knex(config.test)

const db = require('./users.js')

beforeAll(() => testDb.migrate.latest())
beforeEach(() => testDb.seed.run())

describe('getUser', () => {
  test('gets a user\'s information', () => {
    expect.assertions(1)
    return db.getUser('auth0|1234', testDb)
      .then((result) => {
        expect(result.auth0Id).toBe('auth0|1234')
        return null
      })
  })
})

describe('getWhareEntries', () => {
  test('gets a user\'s whare data', () => {
    return db.getWhareEntries('auth0|1234', testDb)
      .then((results) => {
        console.log(results)
        expect(results).toHaveLength(3)
        expect(results[0].auth0Id).toBe('auth0|1234')
        expect(true).toBe(true)
        return null
      })
  })
})
