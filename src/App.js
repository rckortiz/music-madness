import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import Homepage from './components/homepage'
import Revocation from './components/revocation'
import Radiohead from './components/radiohead'
import PinkFloyd from './components/pinkFloyd'

class App extends Component {
  render() {
    return (
      <Router>
        <header>These are some of my favorite bands</header>
        <Switch>
          <Route exact path="/" component={Homepage}></Route>
          <Route exact path="/Revocation" component={Revocation}></Route>
          <Route exact path="/Radiohead" component={Radiohead}></Route>
          <Route exact path="/pinkFloyd" component={PinkFloyd}></Route>
        </Switch>
      </Router>
    )
  }
}

export default App
