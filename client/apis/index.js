import request from 'superagent'

const whareUrl = '/api/v1/whare'

export function getWhare () {
  return request
    .get(whareUrl)
    .then(response => response.body)
    .catch(logError)
}

export function saveWhare (whareData) {
  return request
    .post(whareUrl)
    .send(whareData)
    .then(response => response.body)
    .catch(logError)
}

export function saveUser (userData) {
  return request
    .post(whareUrl)
    .send(userData)
    .then(response => response.body)
    .catch(logError)
}

export async function addUser (user) {
  return request.post(`${whareUrl}/users`)
    .send(user)
    .catch(logError)
}

function logError (err) {
  if (err.message === 'Forbidden') {
    throw new Error('Only the user who added the data may update and delete it')
  } else {
    // eslint-disable-next-line no-console
    console.error(
      'Error consuming the API (in client/index.js):',
      err.message
    )
    throw err
  }
}

// import request from 'superagent'

// const whareUrl = '/api/v1/whare'

// export function getWhare () {
//  return request
// .get(whareUrl)
// .then(response => response.body)
// }

// export function saveWhare (whareData) {
//   return request
//     .post(whareUrl)
//     .send(whareData)
//     .then(response => response.body)
// }

// export function saveUserData (userData) {
// return request
// .post(whareUrl)
// .send(userData)
// .then(response => response.body)
// }
