import request from 'supertest'
const server = require('../server')
// const checkJwt = require('../auth0')
const userDb = require('../db/whare')
console.log(userDb)
// const { getUsers } = require('../db/whare')

jest.mock('../db/whare')
// jest.mock('../../auth0')
const fakeData =
[{ id: 1, auth0_id: 'auth0|111', is_supporter: 0, name: 'Grogu', dob: '41 BBY', description: 'grogu@tattoine.boba.com' },
  { id: 2, auth0Id: 'auth0|222', is_supporter: 0, name: 'Donald Duck', dob: '1938', description: 'quackers@dk.com' },
  { id: 3, auth0Id: 'auth0|333', is_supporter: 1, name: 'Scooby Doo', dob: '1987', description: 'doggydog@mysteryinc.com' },
  { id: 4, auth0_id: 'auth0|444', is_supporter: 1, name: 'Din Djain', dob: '5 BBY', description: 'daddyMando@tattoine.boba.com' }]

/* checkJwt.mockImplementation((req, res, next) => {
  next()
}) */

beforeEach(() => jest.clearAllMocks())

describe('get Users table', () => {
  it('return Users from db', () => {
    userDb.getUsers.mockReturnValue(Promise.resolve(fakeData))
    expect.assertions(1)
    return request(server)
      .get('/api/v1/whare')
      .expect(200)
      .then(res => {
        expect(res.body).toEqual(fakeData)
        return null
      })
      .catch(err => {
        console.log(err)
      })
  })
  it('returns 500 if hits an error', () => {
    userDb.getUsers.mockImplementation(() => Promise.reject(new Error('DB error')))
    jest.spyOn(console, 'log')
    console.log.mockImplementation(() => {})
    expect.assertions(2)
    return request(server)
      .get('/api/v1/whare')
      .then(res => {
        expect(res.status).toEqual(500)
        expect(console.log).toHaveBeenCalled()
        console.log.mockRestore()
        return null
      })
  })
})

describe('get whare table', () => {
  it('return whare from db', () => {
    userDb.getTahaTinana.mockReturnValue(Promise.resolve([{ id: 1, name: 'Grogu', dob: '41 BBY', description: 'grogu@tattoine.boba.com' }]))
    expect.assertions(1)
    return request(server)
      .get('/api/v1/whare')
      .expect(200)
      .then(res => {
        expect(res.body).toEqual([{ id: 1, name: 'Grogu', dob: '41 BBY', description: 'grogu@tattoine.boba.com' }])
        return null
      })
      .catch(err => {
        console.log(err)
      })
  })
  it('returns 500 if hits an error', () => {
    userDb.getTahaTinana.mockImplementation(() => Promise.reject(new Error('DB error')))
    jest.spyOn(console, 'log')
    console.log.mockImplementation(() => {})
    expect.assertions(2)
    return request(server)
      .get('/api/v1/whare')
      .then(res => {
        expect(res.status).toEqual(500)
        expect(console.log).toHaveBeenCalled()
        console.log.mockRestore()
        return null
      })
  })
})

describe('GET /api/v1/whare/:id', () => {
  test('Route is getting a single user details using the id', () => {
    userDb.getUser.mockReturnValue(Promise.resolve(fakeData[0]))
    expect.assertions(2)
    return request(server)
      .get('/api/v1/whare/:id')
      .then(res => {
        expect(res.body[0].id).toEqual(1)
        expect(res.name).toContain('Grogu')
        return null
      })
  })
})
