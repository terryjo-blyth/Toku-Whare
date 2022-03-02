import { getWhare, addUser, addAspect, getUser, getWhareData, addUserInfo } from '../apis'

export const SET_WHARE_PENDING = 'SET_WHARE_PENDING'
export const SET_USER_SUCCESS = 'SET_USER_SUCCESS'
export const SET_WHARE_SUCCESS = 'SET_WHARE_SUCCESS'
export const SET_ERROR = 'SET_ERROR'

export function fetchUser (user) {
  return (dispatch, getState) => {
    dispatch(setWharePending())
    const token = user.token
    return getUser(user)
      .then(userData => {
        userData.user.token = token
        dispatch(setUserSuccess(userData.user))
        return null
      })
      .catch(err => {
        dispatch(setError(err.message))
      })
  }
}
export function fetchWhare (user) {
  return (dispatch, getState) => {
    dispatch(setWharePending())
    return getWhare(user)
      .then(whareData => {
        dispatch(setWhareSuccess(whareData))
        return null
      })
      .catch(err => {
        dispatch(setError(err.message))
      })
  }
}

export function fetchWhareData (token) {
  // const token = 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IjdNTjJ2QVJLNF84WjduOVFvOF9NeiJ9.eyJpc3MiOiJodHRwczovL3RvaG9yYTIyLXRlcnJ5am8uYXUuYXV0aDAuY29tLyIsInN1YiI6ImF1dGgwfDYyMWQ1OTc4N2Y5YmM2MDA2OTRjNjYwMCIsImF1ZCI6WyJodHRwczovL3doYXJlL2FwaSIsImh0dHBzOi8vdG9ob3JhMjItdGVycnlqby5hdS5hdXRoMC5jb20vdXNlcmluZm8iXSwiaWF0IjoxNjQ2MDkwNzYwLCJleHAiOjE2NDYxNzcxNjAsImF6cCI6InA4dWNRaHN3bmx4cHVrZFFEd3EwV2VTZ0JtMTZwblNLIiwic2NvcGUiOiJvcGVuaWQgcHJvZmlsZSBlbWFpbCJ9.OK53UyUsYgespV-vVccsm7dHM8h03_9I5dmOAmtMQ98kLCO7CuNIvMan6wtKqqhNZnAxv3OaPrx0j2OoUQRF97ZpoRqHCQuaNRdvKx4HPYl6KluTNzvoDvaG3qHmQYl6ywqvljFYJGVfQc8qCr__nFL3rGLhSQxIjtwxFby199AuKABWDjuIFMV0GmBWhThAE3My_kpS3ls7iInNed72FkbPGvIweg7wEnhqVXBnKWdk4LWeeHSF-2AcmjZXd-lU7poVFwmRGhHG8kS8Y_KSFo590u73e4VWIJf-PIk3DxbNqa8QyS9RjwlDtnobMCqiu0HWYztRErNIPhREpGs3gw'
  return dispatch => {
    return getWhareData(token)
      .then(whareData => {
        return dispatch(setWhareSuccess(whareData))
      })
      .catch(err => {
        dispatch(setError(err.message))
      })
  }
}

export function addAspectData (newData) {
  return (dispatch, getState) => {
    const { user } = getState()
    const token = user?.token
    const { section, entry } = newData
    return addAspect({ section, entry, token })
      .then(whareData => {
        console.log(whareData)
        return dispatch(setWhareSuccess(whareData))
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

export function saveUserInfo (newData) {
  return (dispatch, getState) => {
    const { user } = getState()
    const token = user?.token
    const { name, dob, email, svgAvatar } = newData
    return addUserInfo({ name, dob, email, svgAvatar, token })
      .then(() => {
        dispatch(setUserSuccess(newData))
        return null
      })
      .catch(err => {
        dispatch(setError(err.message))
      })
  }
}

export function addWhareDataSuccess (newData) {
  return {
    type: ADD_WHARE_DATA,
    newData
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

export function setWhareSuccess (whareData) {
  return {
    type: SET_WHARE_SUCCESS,
    whareData
  }
}

export function setError (errMessage) {
  return {
    type: SET_ERROR,
    errMessage
  }
}
