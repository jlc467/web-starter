import { combineReducers } from 'redux'
import foods from './foodsReducer'

const rootReducer = combineReducers({
  foods,
})

export default rootReducer
