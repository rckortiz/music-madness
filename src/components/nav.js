import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Nav extends Component {
  render() {
    return (
      <>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/revocation">Revocation</Link>
            </li>
            <li>
              <Link to="/radiohead">Radiohead</Link>
            </li>
            <li>
              <Link to="/pinkFloyd">Pink Floyd</Link>
            </li>
          </ul>
        </nav>
      </>
    )
  }
}

export default Nav
