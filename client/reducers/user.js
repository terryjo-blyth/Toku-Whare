import { SET_USER_SUCCESS } from '../actions'

const initialState = {
  auth0Id: '',
  email: '',
  token: ''
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_SUCCESS:
      return action.userData
    default:
      return state
  }
}

export default reducer
