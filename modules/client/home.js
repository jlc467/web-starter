import React from 'react'
import { render } from 'react-dom'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import Home from './components/home/Home'
import AppContainer from './components/AppContainer'

const NotFound = () => <h2>Not found</h2>

render(
  <Router history={browserHistory}>
    <Route path="/" component={AppContainer}>
      <IndexRoute component={Home} />
      <Route path="*" component={NotFound}/>
    </Route>
  </Router>,
  document.getElementById('app')
)
