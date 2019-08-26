import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Nav from './nav'

class Homepage extends Component {
  // bands = [
  //   {
  //     name: "Revocation"
  //     description: ""
  //     album: "The outer worlds"

  //   }
  //   {
  //     name: "Radiohead"
  //     description: ''
  //     album: 'A moon shaped pool'
  //   }
  //   {
  //     name: "Pink Floyd"
  //     description: ''
  //     album: 'The Endless River'
  //   }
  // ]
  render() {
    return (
      <>
        <h1>Favorite Bands</h1>
        <section>
          <nav>
            <Nav />
          </nav>
        </section>
      </>
    )
  }
}

export default Homepage
