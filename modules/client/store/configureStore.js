import { createStore, applyMiddleware } from 'redux'
import createLogger from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import webStarterApp from '../reducers'

const configureStore = () => {
  const middlewares = [ thunkMiddleware ]
  if (process.env.NODE_ENV !== 'production') {
    middlewares.push(createLogger())
  }
  return createStore(
    webStarterApp,
    applyMiddleware(...middlewares) // returns enhancer
  )
}

export default configureStore
