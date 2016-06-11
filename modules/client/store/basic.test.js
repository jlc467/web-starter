import test from 'ava'
import expect from 'expect'
import * as foodsActions from '../actions/foodsActions'
import rootReducer from '../reducers'
import configureStore from './configureStore'

test('Should be able to add food to foods', () => {
  // arrange
  const store = configureStore(rootReducer)
  const food = 'spam'

  // act
  const action = foodsActions.addFood(food)
  store.dispatch(action)

  // assert
  const actual = store.getState().foods[store.getState().foods.length - 1]
  const expected = food
  expect(actual).toEqual(expected)
})

test('Should be able to eat food from foods', () => {
  // arrange
  const store = configureStore(rootReducer)
  const food = 'spam'
  store.dispatch(foodsActions.addFood(food))

  // act
  const action = foodsActions.eatFood(food)
  store.dispatch(action)

  // assert
  const actual = store.getState().foods.indexOf('spam')
  const expected = -1
  expect(actual).toEqual(expected)
})
