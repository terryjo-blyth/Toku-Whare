import { combineReducers } from 'redux'

import loading from './loading'
import errMessage from './errMessage'
import user from './user'

export default combineReducers({
  loading,
  errMessage,
  user
})
