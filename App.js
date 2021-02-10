import React, { Component } from 'react'
import { Router, Scene } from 'react-native-router-flux'
import { StartScreen } from './src/screens'

export default class App extends Component {
  render() {
    return (
      <>
      <Router>
        <Scene key="root">
          <Scene key="home" component={StartScreen} initial={true}/>
        </Scene>
      </Router>
      </>
    )
  }
}


