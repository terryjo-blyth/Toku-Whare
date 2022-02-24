import { getWhare, saveWhare, saveUser } from '../apis'

export const SET_WHARE_PENDING = 'SET_WHARE_PENDING'
export const SET_WHARE_SUCCESS = 'SET_WHARE_SUCCESS'
export const SET_USER_SUCCESS = 'SET_USER_SUCCESS'
export const SET_ERROR = 'SET_ERROR'

export function fetchWhare () {
  return (dispatch, getState) => {
    dispatch(setWharePending())
    return getWhare()
      .then(whare => {
        dispatch(setWhareSuccess(whare))
        return null
      })
      .catch(err => {
        dispatch(setError(err.message))
      })
  }
}

export function addWhare (newWhare) {
  return dispatch => {
    return saveWhare(newWhare)
      .then(whare => {
        dispatch(setWhareSuccess(whare))
        return null
      })
      .catch(err => {
        dispatch(setError(err.message))
      })
  }
}

export function addUser (newUser) {
  return dispatch => {
    return saveUser(newUser)
      .then(user => {
        dispatch(setUserSuccess(user))
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

export function setWhareSuccess (whare) {
  return {
    type: SET_WHARE_SUCCESS,
    whare
  }
}

export function setUserSuccess (user) {
  return {
    type: SET_USER_SUCCESS,
    user
  }
}

export function setError (errMessage) {
  return {
    type: SET_ERROR,
    errMessage
  }
}
