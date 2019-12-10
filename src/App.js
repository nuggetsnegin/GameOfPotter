import React, { Component } from 'react'
import './styles/App.css'
import GetGotCharacters from './GetGotCharacters'
import GetHpCharacters from './GetHpCharacters'
import Outing from './Outing.js'
import StatsMatch from './StatsMatch.js'

class App extends Component {
  constructor () {
    super()
    this.state = {
      randomGotCharacter: {},
      randomHpCharacter: {}
    }
  }

  render () {
    console.log(this.state)
    return (
      <div className='wrapper'>
        <h1>Game of Potter</h1>
        <p className='introduction'>
          Hi there! Have you ever wanted to know which <span>Game of Thrones</span> and <span>Harry Potter </span> 
          characters could be BFFS? No? Well.. too bad!
        </p>
        <div className='gridContainer'>
          <GetGotCharacters setAppState={value => this.setState(value)} />
          <StatsMatch
            got={this.state.randomGotCharacter}
            hp={this.state.randomHpCharacter}
          />
          <GetHpCharacters setAppState={value => this.setState(value)} />
          {/* <Outing /> */}
        </div>
      </div>
    )
  }
}

export default App
