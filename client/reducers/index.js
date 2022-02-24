import { combineReducers } from 'redux'

import loading from './loading'
import errMessage from './errMessage'
import whare from './whare'

export default combineReducers({
  loading,
  errMessage,
  whare
})
