import React, { Component } from "react";
import "./styles/App.css";
import GetGotCharacters from "./GetGotCharacters";
import GetHpCharacters from "./GetHpCharacters";
import heart from './assets/heart.png';
import RandomizeCharacters from "./RandomizeCharacters";

let arrayOfHouses = [];
class App extends Component {
  constructor() {
    super();
    this.state = {
      hpCharacters: [],
      gotCharacters: [],
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
          <GetGotCharacters />
          <img className='heart' src={heart} alt=""/>
          <GetHpCharacters />
          {/* <RandomizeCharacters gotCharactersArray={this.state.gotCharacters}/> */}
        </div>
      </div>
    );
  }
}

export default App;
