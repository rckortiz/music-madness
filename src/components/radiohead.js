import React, { Component } from 'react'
import Radio from '../images/radiohead_pic.jpg'
import Nav from './nav'

class Radiohead extends Component {
  render() {
    return (
      <>
        <h1>This is Radiohead</h1>
        <Nav />
        <img src={Radio}></img>
        <section classNam>
          <q></q>
        </section>
      </>
    )
  }
}

export default Radiohead
