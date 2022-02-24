import request from 'superagent'

const whareUrl = '/api/v1/' // this depends on server routes

export function getWhare () {
  return request
    .get(whareUrl)
    .then(response => response.body)
}

// export function saveWhare (whareData) {
//   return request
//     .post(whareUrl)
//     .send(whareData)
//     .then(response => response.body)
// }

export function saveUserData (userData) {
  return request
    .post(whareUrl)
    .send(userData)
    .then(response => response.body)
}
