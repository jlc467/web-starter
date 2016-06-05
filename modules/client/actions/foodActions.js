import * as types from './actionTypes'

export const addFood = food => (
  { type: types.ADD_FOOD, food }
)

export const eatFood = food => (
  { type: types.EAT_FOOD, food }
)
