import * as types from '../actions/actionTypes'

const initialFoods = [
  'Carnitas',
  'Picadillo',
  'Jägerschnitzel'
]


const food = (state, action) => {
  switch (action.type) {
    case types.ADD_FOOD:
      return action.food
    case types.EAT_FOOD:
      return state !== action.food
    default:
      return state
  }
}

const foods = (state = initialFoods, action) => {
  switch (action.type) {
    case types.ADD_FOOD:
      return [ ...state, food(undefined, action) ]
    case types.EAT_FOOD:
      return state.filter(f =>
        food(f, action)
      )
    default:
      return state
  }
}

export default foods
