import nock from 'nock'
import { getListings, getListing, removeListing, addListingApi } from '../listings'

const fakeListings = [
  {
    id: '1',
    user_id: '1',
    title: 'Fake listing 1',
    description: 'Fake listing 1 description',
    employer: 'Fake employer 1',
    link: 'https://fake.link.1',
    active: true
  },
  {
    id: '2',
    user_id: '1',
    title: 'Fake listing 2',
    description: 'Fake listing 2 description',
    employer: 'Fake employer 2',
    link: 'https://fake.link.2',
    active: true
  }
]

describe('getListings', () => {
  it('should return listings', () => {
    const scope = nock('http://localhost')
      .get('/api/v1/listings')
      .reply(200, fakeListings)

    return getListings()
      .then(listings => {
        scope.done()
        expect(listings).toEqual(fakeListings)
        return null
      })
  })
})

describe('getListing', () => {
  it('should return a single listing', () => {
    const scope = nock('http://localhost')
      .get('/api/v1/listings/2')
      .reply(200, fakeListings[0])

    return getListing(2)
      .then(listing => {
        scope.done()
        expect(listing.id).toEqual(fakeListings[0].id)
        expect(listing).toEqual(fakeListings[0])
        return null
      })
  })
})

describe('removeListing', () => {
  it('should DELETE at the correct route', async () => {
    const scope = nock('http://localhost')
      .delete('/api/v1/listings/1')
      .reply(200)
    const id = { githubId: 'github|93647094' }

    return removeListing(fakeListings[0].id, id)
      .then((res) => {
        scope.done()
        expect(res).toEqual({})
        return null
      })
  })
})

describe('addListingApi', () => {
  const newListing = {
    title: 'junior developer',
    employer: 'dev academy',
    link: 'www.devacademy.com',
    details: 'new job',
    status: 'starred',
    active: true
  }

  const token = '1234'

  it('adds new list with POST /api/v1/listings', () => {
    const scope = nock('http://localhost')
      .post('/api/v1/listings')
      .reply(201, { id: 1 })
    expect.assertions(1)
    return addListingApi(newListing, token)
      .then(newListing => {
        expect({ ...newListing }).toEqual({ id: 1, ...newListing })
        scope.done()
        return null
      })
  })
})
