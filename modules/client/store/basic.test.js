import test from 'ava'
import expect from 'expect'
import { createStore } from 'redux'
import * as foodsActions from '../actions/foodsActions'
import rootReducer from '../reducers'


test('Should be able to add food to foods', () => {
  // arrange
  const store = createStore(rootReducer)
  const food = 'spam'

  // act
  const action = foodsActions.addFood(food)
  store.dispatch(action)

  // assert
  const actual = store.getState().foods[store.getState().foods.length - 1]
  const expected = 'spam'
  expect(actual).toEqual(expected)
})
