import { SET_WHARE_SUCCESS } from '../actions'

const initialState = {
  tahaTinana: '1',
  tahaWairua: '2',
  tahaWhanau: '3',
  tahaHinengaro: '4',
  whenua: '5'
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_WHARE_SUCCESS:
      return action.whareData
    default:
      return state
  }
}

export default reducer
