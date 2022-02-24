import { createStore, applyMiddleware, compose } from 'redux'
import reducers from './reducers'
import thunk from 'redux-thunk'

const composeEnhancers = window.REDUX_DEVTOOLS_EXTENSION_COMPOSE || compose
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)))

export default store
