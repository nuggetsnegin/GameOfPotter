import React, { Component } from 'react';
import "./styles/App.css";
import GetGotCharacters from "./GetGotCharacters";
import GetHpCharacters from "./GetHpCharacters";
import Outing from "./Outing.js";
import StatsMatch from "./StatsMatch.js";

class App extends Component {
  constructor() {
    super();
    this.state = {
      randomGotCharacter: {},
      randomHpCharacter: {},
    };
  }

  render() {
    return (
      <div className='app'>
        <div className='wrapper'>
          <header><h1>Game of Potter</h1></header>
          <main className='gridContainer'>
            <div className='introduction'>
              <p>
                Hi there! Have you ever wanted to know which{" "}
                <span>Game of Thrones</span> and <span>Harry Potter </span>
                characters could be BFFS? No? Well.. too bad!
              </p>
            </div>
            <GetGotCharacters setAppState={value => this.setState(value)} />
            <StatsMatch
              got={this.state.randomGotCharacter}
              hp={this.state.randomHpCharacter}
            />
            <GetHpCharacters setAppState={value => this.setState(value)} />
            {/* <Outing /> */}
          </main>
        </div>
        <footer>
          Made with magic & blood by <span>Negin</span>, <span>Sarah</span>,{" "}
          <span>Nuno</span> & <span>Keil</span> 2019
        </footer>
      </div>
    );
  }
}

export default App;
