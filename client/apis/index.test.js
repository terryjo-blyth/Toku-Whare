// import nock from 'nock'
// import { response } from '../../server/server'
// import { getWhare, getWhareData, deleteEntry, addAspect } from './index'

// const fakeData = [
//   {
//     id: 2003,
//     userAuth0Id: 'auth0|123',
//     section: 'tahaHinengaro',
//     feeling: 'happy',
//     text: 'I want to play soccer',
//     createdAt: Date.now(),
//     updatedAt: Date.now(),
//     imageUrl: null,
//     audioUrl: null
//   },
//   {
//     id: 2004,
//     userAuth0Id: 'auth0|123',
//     section: 'tahaHinengaro',
//     feeling: 'happy',
//     text: 'I want to play soccer',
//     createdAt: Date.now(),
//     updatedAt: Date.now(),
//     imageUrl: null,
//     audioUrl: null
//   }
// ]

// describe('getWhare', () => {
//   it('should return whare', () => {
//     const scope = nock('http://localhost')
//       .get('/api/v1/entries')
//       .reply(200, fakeData)

//     return getWhare()
//       .then(response => {
//         scope.done()
//         expect(response).toEqual(fakeData)
//         return null
//       })
//   })
// })

// describe('getWhareData', () => {
//   it('should return a whare data', () => {
//     const scope = nock('http://localhost')
//       .get('/api/v1/entries/2')
//       .reply(200, fakeData[0])

//     return getWhareData(2)
//       .then(response => {
//         scope.done()
//         expect(response.body.entries).toEqual(fakeData[0].id)
//         expect(response).toEqual(fakeData[0])
//         return null
//       })
//   })
// })

// describe('deleteEntry', () => {
//   it('should DELETE the correct entry', async () => {
//     const scope = nock('http://localhost')
//       .delete('/api/v1/entries/1')
//       .reply(200)
//     const id = { userAuth0Id: 'auth0|123' }

//     return deleteEntry(fakeData[0].id, id)
//       .then((res) => {
//         scope.done()
//         expect(res).toEqual({})
//         return null
//       })
//   })
// })

// describe('addAspect', () => {
//   const newData = {
//     id: 2005,
//     userAuth0Id: 'auth0|123',
//     section: 'whenua',
//     feeling: 'sad',
//     text: 'look after my health',
//     createdAt: Date.now(),
//     updatedAt: Date.now(),
//     imageUrl: null,
//     audioUrl: null
//   }

//   const token = '1234'

//   it('adds new list with POST /api/v1/listings', () => {
//     const scope = nock('http://localhost')
//       .post('/api/v1/listings')
//       .reply(201, { id: 1 })
//     expect.assertions(1)
//     return addAspect(newData, token)
//       .then(newData => {
//         expect({ ...newData }).toEqual({ id: 1, ...newData })
//         scope.done()
//         return null
//       })
//   })
// })
