import { combineReducers } from 'redux'

import loading from './loading'
import errMessage from './errMessage'
import user from './user'
import whare from './whare'

export default combineReducers({
  loading,
  errMessage,
  user,
  whare
})
