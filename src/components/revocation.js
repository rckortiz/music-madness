import React, { Component } from 'react'
import Nav from './nav'
import Revo from '../images/revocation_pic.jpg'

class Revocation extends Component {
  render() {
    return (
      <>
        <section className="main-container">
          <h1>This is Revocation</h1>
          <Nav />

          <img src={Revo}></img>
        </section>
      </>
    )
  }
}

export default Revocation
