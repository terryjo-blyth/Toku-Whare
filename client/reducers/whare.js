import { SET_WHARE_SUCCESS } from '../actions'

const initialState = []

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_WHARE_SUCCESS:
      return action.whare.users
    default:
      return state
  }
}

export default reducer
