import request from 'superagent'

const whareUrl = '/api/v1/whare'

export function getWhare (id) {
  return request
    .get(whareUrl)
    .then((response) => {
      const userArray = response.body.users
      const user = userArray.find((user) => {
        return user.id === id
      })
      return user
    })
    .catch(logError)
}

export async function addUser (user) {
  return request.post(`${whareUrl}`)
    .set('authorization', `Bearer ${user.token}`)
    .send(user)
    .catch(logError)
}

export function updateAspect (aspect, token) {
  return request.put(`${whareUrl}/${aspect}`)
    .set('authorization', `Bearer ${token}`)
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
