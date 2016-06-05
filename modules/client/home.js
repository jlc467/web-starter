import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import AppContainer from './components/AppContainer'
import FoodContainer from './components/food/FoodContainer'
import Home from './components/home/Home'
import configureStore from './store/configureStore'

const store = configureStore()

const NotFound = () => <h2>Not found</h2>

render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={AppContainer}>
        <IndexRoute component={Home} />
        <Route path="food" component={FoodContainer}/>
        <Route path="*" component={NotFound}/>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('app')
)
