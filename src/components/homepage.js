import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Nav from './nav'
import Pfloyd from '../images/pink_floyd_pic.jpg'
import Revo from '../images/revocation_pic.jpg'
import Radio from '../images/radiohead_pic.jpg'

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
        <main>
          <section>
            <h1>Favorite Bands</h1>
            <nav>
              <Nav />
            </nav>
            <div className="images">
              <img src={Revo} />
              <img src={Pfloyd} />
              <img src={Radio} />
            </div>
          </section>
        </main>
      </>
    )
  }
}

export default Homepage
