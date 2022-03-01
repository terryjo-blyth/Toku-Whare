import request from 'superagent'

const baseUrl = '/api/v1/user'

export function getWhare (user) {
  return request.get(`${baseUrl}/whare`)
    .set('Authorization', `Bearer ${user.token}`)
    .then((response) => {
      return response.body
    })
    .catch(logError)
}

export function getWhareData (token) {
  return request.get(`${baseUrl}/entries`)
    .set('Authorization', `Bearer ${token}`)
    .then(response => {
      return response.body.entries
    })
    .catch(logError)
}

export function getUser (user) {
  return request.get(`${baseUrl}/user`)
    .set('Authorization', `Bearer ${user.token}`)
    .then((response) => {
      return response.body
    })
    .catch(logError)
}

export async function addUser (user) {
  return request.post(`${baseUrl}`)
    .set('authorization', `Bearer ${user.token}`)
    .send(user)
    .catch(logError)
}

export function updateAspect (aspect) {
  const { section, entry } = aspect
  return request.patch(`${baseUrl}/entries`)
    .set('Authorization', `Bearer ${aspect.token}`)
    .send({ section, entry })
    .then(res => res.body.entries)
    .catch(logError)
}

export function addUserInfo (userData) {
  console.log('api', userData)
  const { name, dob, email, svgAvatar } = userData
  return request.patch(`${baseUrl}/info`)
    .set('Authorization', `Bearer ${userData.token}`)
    .send({ name, dob, email, svgAvatar })
    .then(res => res.body.user)
    .catch(logError)
}

export function addAspect (aspect) {
  const { section, entry } = aspect
  return request.post(`${baseUrl}/entries`)
    .set('Authorization', `Bearer ${aspect.token}`)
    .send({ section, entry })
    .then(res => res.body.entries)
    .catch(logError)
}

function logError (err) {
  if (err.message === 'Forbidden') {
    throw new Error('Only the user who added the taha may update and delete it')
  } else {
    // eslint-disable-next-line no-console
    console.error(
      'Error consuming the API (in client/api.js):',
      err.message
    )
    throw err
  }
}
