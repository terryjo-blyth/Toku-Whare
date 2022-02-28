import { SET_USER_SUCCESS } from '../actions'

const initialState = {
  auth0Id: 'fghd',
  email: 'fghgf',
  token: '13123'
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_SUCCESS:
      console.log(action.userData)
      return action.userData
    default:
      return state
  }
}

export default reducer
