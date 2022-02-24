const knex = require('knex')
const config = require('./knexfile')
const testDb = knex(config.test)

beforeAll(() => testDb.migrate.latest())
beforeEach(() => testDb.seed.run())

describe('getListings', () => {
  test('read a list of listings', () => {
    expect.assertions(2)
    return db.getListings(testDb)
      .then(listings => {
        expect(listings).toHaveLength(4)
        expect(listings[1].id).toEqual(2)
        return null
      })
  })
})

describe('getListing', () => {
  it('should return a single listing when an id is given', () => {
    expect.assertions(2)
    return db.getListing(1, testDb)
      .then(listing => {
        expect(listing.id).toEqual(1)
        expect(listing.title).toEqual('Junior Dev')
        return null
      })
  })
})

describe('addListing', () => {
  it('should add a listing to the database', () => {
    const newListing = {
      title: 'Senior Dev',
      userId: 100,
      employer: 'Enspiral Dev Academy',
      link: 'http://enspiral.co.nz/careers',
      description: 'Code stuff',
      active: false
    }
    expect.assertions(2)
    return db.addListing(newListing, testDb)
      .then(listing => {
        expect(listing.id).toEqual(5)
        expect(listing.title).toEqual('Senior Dev')
        return null
      })
  })
})

describe('removeListing', () => {
  it('should remove a single listing when an id is given', () => {
    expect.assertions(1)
    const id = { githubId: 'github|93647094' }
    return db.removeListing(2, id, testDb)
      .then(numberDeleted => {
        expect(numberDeleted).toEqual(1)
        return null
      })
  })
})

describe('updateListing', () => {
  it('should update a single listing on the database', () => {
    const newListing = {
      title: 'Senior Dev',
      employer: 'Enspiral Dev Academy',
      link: 'http://enspiral.co.nz/careers',
      description: 'Code stuff',
      active: false
    }
    expect.assertions(5)
    return db.updateListing(1, newListing, testDb)
      .then(listing => {
        expect(listing.title).toBe('Senior Dev')
        expect(listing.employer).toBe('Enspiral Dev Academy')
        expect(listing.link).toBe('http://enspiral.co.nz/careers')
        expect(listing.description).toBe('Code stuff')
        expect(listing.active).toBeFalsy()
        return null
      })
  })
})
