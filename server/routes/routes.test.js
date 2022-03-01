import request from 'supertest'
const server = require('../server')
const checkJwt = require('../auth0')
const userDb = require('../db/users')

jest.mock('../db/users')
jest.mock('../auth0')

beforeEach(() => {
  jest.clearAllMocks()
  checkJwt.mockImplementation((req, res, next) => {
    req.user = {
      sub: 'auth0|1234'
    }
    next()
  })
})

const fakeData = {
  id: 2003,
  userAuth0Id: 'auth0|123',
  section: 'tahaHinengaro',
  feeling: 'happy',
  text: 'I want to play soccer',
  createdAt: Date.now(),
  updatedAt: Date.now(),
  imageUrl: null,
  audioUrl: null
}

describe('GET /entries', () => {
  it('returns user\'s whare details', () => {
    userDb.getWhareEntries.mockReturnValue(Promise.resolve([fakeData]))
    return request(server)
      .get('/api/v1/user/entries')
      .then(results => {
        expect(results.body.entries[0].userAuth0Id).toBe('auth0|123')
        return null
      })
  })
})

describe('POST /entries', () => {
  it('adds a new post', () => {
    userDb.addWhareEntry.mockReturnValue(Promise.resolve([2]))
    return request(server)
      .post('/api/v1/user/entries')
      .send({ section: 'tahaTinana', entry: 'something' })
      .then(response => {
        expect(response.status).toBe(201)
        expect(userDb.addWhareEntry).toHaveBeenCalledTimes(1)
        return null
      })
  })
})
