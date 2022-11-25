import React, { Component } from 'react'
import NavBar from './Components/NavBar'
import News from './Components/News'
import './App.css'

export default class App extends Component {
  render() {
    return (
      <div>
        <NavBar/>
        <News/>
      </div>
    )
  }
}
