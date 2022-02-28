import request from 'superagent'

const whareUrl = '/api/v1/whare'

export function getWhare (user) {
  return request.get(`${whareUrl}/whare`)
    .set('authorization', `Bearer ${user.token}`)
    .then((response) => {
      return response.body
    })
    .catch(logError)
}

export function getUser (user) {
  return request.get(`${whareUrl}/user`)
    .set('authorization', `Bearer ${user.token}`)
    .then((response) => {
      return response.body
    })
    .catch(logError)
}

export async function addUser (user) {
  return request.post(`${whareUrl}`)
    .set('authorization', `Bearer ${user.token}`)
    .send(user)
    .catch(logError)
}

export function updateAspect (aspect) {
  return request.patch(`${whareUrl}/entry`)
    .set('authorization', `Bearer ${aspect.token}`)
    .send({ aspect })
    .then(res => res.body.aspect)
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
