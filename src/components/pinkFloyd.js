import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Nav from './nav'
import Pfloyd from '../images/pink_floyd_pic.jpg'

class PinkFloyd extends Component {
  render() {
    return (
      <>
        <h1>This is Pink Floyd</h1>
        <Nav />

        <section>
          <img src={Pfloyd}></img>
        </section>
      </>
    )
  }
}

export default PinkFloyd
