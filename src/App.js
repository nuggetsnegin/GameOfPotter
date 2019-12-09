import React, { Component } from "react";
import "./styles/App.css";
import GetGotCharacters from "./GetGotCharacters";
import GetHpCharacters from "./GetHpCharacters";
import heart from './assets/heart.png';
// import RandomizeCharacters from "./RandomizeCharacters";
import Outing from './Outing.js';
import StatsMatch from './StatsMatch.js';

// let arrayOfHouses = [];
class App extends Component {
  constructor() {
    super();
    this.state = {
      hpCharacters: [],
      gotCharacters: [],
      randomGotCharacter: {},
      randomHpCharacter: {},
      gotHouses: [
        "House Stark",
        "House Lannister",
        "House Tyrell",
        "House Greyjoy",
      ],
    };
  }

  render() {
    return (
      <div className='wrapper'>
        <h1>Game of Potter</h1>
        <div className='gridContainer'>
          <GetGotCharacters setAppState={value => this.setState(value)} />
          <img className='heart' src={heart} alt=""/>
          <StatsMatch 
            got = {this.state.randomGotCharacter}
            hp = {this.state.randomHpCharacter}
          />
          <GetHpCharacters setAppState={value => this.setState(value)} />
          {/* <button>Match Me! ❤️</button> */}
          <Outing />
        </div>
      </div>
    );
  }
}

export default App;