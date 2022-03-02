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

// describe('getWhareEntries', () => {
//   test('gets a user\'s whare data', () => {
//     return db.getWhareEntries('auth0|1234', testDb)
//       .then((results) => {
//         console.log(results)
//         expect(results).toHaveLength(3)
//         expect(results[0].auth0Id).toBe('auth0|1234')
//         expect(true).toBe(true)
//         return null
//       })
//   })
// })

// describe('addWhareEntry', () => {
//   test('add a WhareEntry', () => {
//     const WhareEntry = {
//       text: 'Go to the gym',
//       createdAt: Date.now(),
//       updatedAt: Date.now()
//     }
//     const section = 'tahaTinana'
//     const userAuth0Id = 'auth0|621d6d074b6ed30071870996'

//     return db.addWhareEntry(userAuth0Id, section, WhareEntry, testDb)
//       .then(newWhareEntry => {
//         expect(newWhareEntry[0]).toBe(2005)
//         return null
//       })
//   })
// })

describe('Remove Whare Entry', () => {
  it('should remove a single whare entry', () => {
    expect.assertions(1)
    return db.deleteEntry(2001, testDb)
      .then(numberDeleted => {
        expect(numberDeleted).toEqual(1)
        return null
      })
  })
})
