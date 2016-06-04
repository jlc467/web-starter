import React from 'react'
import './Home.css'
import logo from '../../images/central-logo.svg'

class Home extends React.Component {
  render = () => {
    return (
      <div className="center-container">
        <div className="center-item">
          <h3>Home</h3>
          <img alt="logo" width="100" height="100" src={logo} />
          <p>where do we go from here...</p>
        </div>
      </div>
    )
  }
}

export default Home
