import React, { PropTypes } from 'react'
import { Link } from 'react-router'


const AppHeader = () => <div>
  <ul>
    <li><Link to="/">Home</Link></li>
    <li><Link to="/food">Food</Link></li>
  </ul>
</div>

class AppContainer extends React.Component {
  static propTypes = {
    children: PropTypes.element.isRequired
  }
  render = () => {
    const { children } = this.props
    return (
      <div>
        <AppHeader />
        {children}
      </div>
    )
  }
}

export default AppContainer
