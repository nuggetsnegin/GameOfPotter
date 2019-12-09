import React, { Component } from 'react';
import "./styles/App.css";
import GetGotCharacters from './GetGotCharacters';
import GetHpCharacters from './GetHpCharacters';
import seal from './assets/seal.png';
import Outing from './Outing.js';
import StatsMatch from './StatsMatch.js';

class App extends Component {
  constructor() {
    super();
    this.state = {
      randomGotCharacter: {},
      randomHpCharacter: {}
    };
  }

  render() {
    console.log(this.state);
    return (
      <div className='wrapper'>
        <h1 className="title">Game of Potter</h1>
        <div className='gridContainer'>
          <GetGotCharacters setAppState={value => this.setState(value)} />
          <div className="iconContainer">
            <img className='sealIcon' src={seal} alt=""/>
            <h4>match</h4>
          </div>
          <StatsMatch 
            got={this.state.randomGotCharacter}
            hp={this.state.randomHpCharacter}
          />
          <GetHpCharacters setAppState={value => this.setState(value)} />
        </div>
        <div className="outingContainer">
          <Outing />
        </div>
      </div>
    );
  }
}

export default App;