import request from 'supertest'
const server = require('../server')
// const checkJwt = require('../auth0')
const userDb = require('../db/whare')
console.log(userDb)
// const { getUsers } = require('../db/whare')

jest.mock('../db/whare')
// jest.mock('../../auth0')

/* checkJwt.mockImplementation((req, res, next) => {
  next()
}) */
userDb.getUsers.mockReturnValue(Promise.resolve({}))

beforeEach(() => jest.clearAllMocks())

describe('get Users table', () => {
  it('return Users from db', () => {
    userDb.getUsers.mockReturnValue(Promise.resolve([{ id: 1, auth0_id: 1, is_upportert: 0, name: 'Grogu', dob: '41 BBY', description: 'grogu@tattoine.boba.com' }]))
    expect.assertions(1)
    return request(server)
      .get('/api/v1/whare')
      .expect(200)
      .then(res => {
        expect(res.body).toEqual([{ id: 1, auth0_id: 1, is_upportert: 0, name: 'Grogu', dob: '41 BBY', description: 'grogu@tattoine.boba.com' }])
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

describe('get Taha Tinana table', () => {
  it('return Taha Tinana from db', () => {
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

describe('get Wairua table', () => {
  it('return Wairua from db', () => {
    userDb.getWairua.mockReturnValue(Promise.resolve([{ id: 1, name: 'Grogu', dob: '41 BBY', description: 'grogu@tattoine.boba.com' }]))
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
    userDb.getWairua.mockImplementation(() => Promise.reject(new Error('DB error')))
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

describe('get Whanau table', () => {
  it('return Whanau from db', () => {
    userDb.getWhanau.mockReturnValue(Promise.resolve([{ id: 1, name: 'Grogu', dob: '41 BBY', description: 'grogu@tattoine.boba.com' }]))
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
    userDb.getWhanau.mockImplementation(() => Promise.reject(new Error('DB error')))
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

describe('get Whenua table', () => {
  it('return Whenua from db', () => {
    userDb.getWhenua.mockReturnValue(Promise.resolve([{ id: 1, name: 'Grogu', dob: '41 BBY', description: 'grogu@tattoine.boba.com' }]))
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
    userDb.getWhenua.mockImplementation(() => Promise.reject(new Error('DB error')))
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

describe('get Hinengaro table', () => {
  it('return Hinengaro from db', () => {
    userDb.getHinengaro.mockReturnValue(Promise.resolve([{ id: 1, name: 'Grogu', dob: '41 BBY', description: 'grogu@tattoine.boba.com' }]))
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
    userDb.getHinengaro.mockImplementation(() => Promise.reject(new Error('DB error')))
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

/* escribe('POST/api/v1/listings', () => {
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
 */
