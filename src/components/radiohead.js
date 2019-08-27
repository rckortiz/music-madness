import React, { Component } from 'react'
import Radio from '../images/radiohead_pic.jpg'
import Nav from './nav'

class Radiohead extends Component {
  render() {
    return (
      <>
        <main className="radio-main">
          <section className="radio-container">
            <h1>This is Radiohead</h1>
            <Nav />
            <img src={Radio}></img>
            <section classNam>
              <q></q>
            </section>
          </section>
        </main>
      </>
    )
  }
}

export default Radiohead
