const request = require('supertest')
const server = require('../../server')
const checkJwt = require('../../auth0')
const userDb = require('../../db/users')

const { getListing, getListings, addListing } = require('../../db/listings')

jest.mock('../../db/connections')
jest.mock('../../db/users')
jest.mock('../../auth0')

checkJwt.mockImplementation((req, res, next) => {
  next()
})
userDb.getUserByGithubId.mockReturnValue(Promise.resolve({}))

beforeEach(() => jest.clearAllMocks())

describe('get/api/v1/whare', () => {
  test('return Listings from db', () => {
    getListings.mockReturnValue(Promise.resolve([{ id: 1, user_id: 1, title: 'Junior Dev', employer: 'Xero', link: 'https://xero.com/come-work-for-us', description: 'You can write tonnes of code', active: true }]))
    expect.assertions(1)
    return request(server)
      .get('/api/v1/whare')
      .expect(200)
      .then(res => {
        expect(res.body).toEqual([{ id: 1, user_id: 1, t: 'Junior Dev', employer: 'Xero', link: 'https://xero.com/come-work-for-us', description: 'You can write tonnes of code', active: true }])
        return null
      })
      .catch(err => {
        console.log(err)
      })
  })
  test('returns 500 if hits an error', () => {
    getListings.mockImplementation(() => Promise.reject(new Error('DB error')))
    jest.spyOn(console, 'log')
    console.log.mockImplementation(() => {})
    expect.assertions(2)
    return request(server)
      .get('/api/v1/listings')
      .then(res => {
        expect(res.status).toEqual(500)
        expect(console.log).toHaveBeenCalled()
        console.log.mockRestore()
        return null
      })
  })
})

describe('POST/api/v1/listings', () => {
  test('Add Listings to db', () => {
    const list = { id: 1, user_id: 1, title: 'Junior Dev', employer: 'Xero', link: 'https://xero.com/come-work-for-us', description: 'You can write tonnes of code', active: true }
    const sendList = { user_id: 1, title: 'Junior Dev', employer: 'Xero', link: 'https://xero.com/come-work-for-us', description: 'You can write tonnes of code', active: true }

    addListing.mockReturnValue(Promise.resolve(list))
    expect.assertions(1)
    return request(server)
      .post('/api/v1/listings')
      .send(sendList)
      .then(res => {
        expect(res.body).toEqual(list)
        return null
      })
      .catch(err => {
        console.log(err)
      })
  })
})

describe('GET /api/v1/listings/:id', () => {
  test('Route is getting a single listing details using the id', () => {
    getListing.mockReturnValue(Promise.resolve([{ id: 3, user_id: 2, title: 'Junior Dev', employer: 'Re-Leased', link: 'https:/re-leased.com/come-work-for-us', description: 'You can write tonnes of code about cheese', active: true }]))
    expect.assertions(2)
    return request(server)
      .get('/api/v1/listings/:id')
      .then(res => {
        expect(res.body[0].id).toEqual(3)
        expect(res.text).toContain('cheese')
        return null
      })
  })

  test('return status 500 if error occurs', () => {
    getListing.mockImplementation(() => Promise.reject(new Error()))
    jest.spyOn(console, 'log')
    console.log.mockImplementation(() => {})
    expect.assertions(3)
    return request(server)
      .get('/api/v1/listings')
      .then(res => {
        console.log(res.body)
        expect(console.log).toHaveBeenCalled()
        expect(res.status).toEqual(500)
        expect(res.text).toEqual('DB error')
        console.log.mockRestore()
        return null
      })
  })
})
