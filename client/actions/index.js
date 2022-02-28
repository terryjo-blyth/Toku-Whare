import { getWhare, addUser, updateAspect } from '../apis'

export const SET_WHARE_PENDING = 'SET_WHARE_PENDING'
export const SET_USER_SUCCESS = 'SET_USER_SUCCESS'
// export const SET_USER_SUCCESS = 'SET_USER_SUCCESS'
export const SET_ERROR = 'SET_ERROR'

export function fetchWhare (user) {
  return (dispatch, getState) => {
    dispatch(setWharePending())
    return getWhare(user)
      .then(userData => {
        dispatch(setUserSuccess(userData))
        return null
      })
      .catch(err => {
        dispatch(setError(err.message))
      })
  }
}

export function addUserData (newData) {
  return dispatch => {
    return addUser(newData)
      .then(() => {
        dispatch(setUserSuccess(newData))
        return null
      })
      .catch(err => {
        dispatch(setError(err.message))
      })
  }
}

// export function addAspectData (newData, token) {
//   return dispatch => {
//     return updateAspect(newData, token)
//       .then(() => {
//         dispatch(setUserSuccess(newData))
//         return null
//       })
//       .catch(err => {
//         dispatch(setError(err.message))
//       })
//   }
// }

export function addAspectData (newData) {
  return dispatch => {
    return updateAspect(newData)
      .then(() => {
        dispatch(setUserSuccess(newData))
        return null
      })
      .catch(err => {
        dispatch(setError(err.message))
      })
  }
}

export function setWharePending () {
  return {
    type: SET_WHARE_PENDING
  }
}

export function setUserSuccess (userData) {
  return {
    type: SET_USER_SUCCESS,
    userData
  }
}

// export function setUserSuccess (user) {
//   return {
//     type: SET_USER_SUCCESS,
//     user
//   }
// }

export function setError (errMessage) {
  return {
    type: SET_ERROR,
    errMessage
  }
}
