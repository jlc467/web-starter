import React, { PropTypes } from 'react'


const AppHeader = () => <div></div>

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
