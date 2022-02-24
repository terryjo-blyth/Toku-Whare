import request from 'superagent'

const whareUrl = '/api/v1/whare'

export function getWhare () {
  return request
    .get(whareUrl)
    .then(response => response.body)
}

export function saveWhare (whareData) {
  return request
    .post(whareUrl)
    .send(whareData)
    .then(response => response.body)
}

export function saveUser (userData) {
  return request
    .post(whareUrl)
    .send(userData)
    .then(response => response.body)
}
