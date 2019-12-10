import React, { Component } from 'react';
import "./styles/App.css";
import GetGotCharacters from "./GetGotCharacters";
import GetHpCharacters from "./GetHpCharacters";
import Outing from "./Outing.js";
import StatsMatch from "./StatsMatch.js";
import Footer from './Footer.js';

// let filteredRestaurant = {}

class App extends Component {
  constructor() {
    super();
    this.state = {
      randomGotCharacter: {},
      randomHpCharacter: {},
      suggestions: [],
      matchValue: '',
      filteredRestaurant: []
    };
  }

  handleGetReview = (suggestionsArray) => {
    this.setState({
      suggestions: suggestionsArray
    }, () => {
      if (this.state.matchValue) {
        this.passValue();
      }
    })
  }

  handleValue = (value) => {
    this.setState({
      matchValue: value
    }, () => {
      if (this.state.suggestions.length > 0) {
        this.passValue();
      }
    })
  }

  passValue = () => {
    const cloneArray = [...this.state.suggestions];
    
    if (this.state.matchValue <= 40) {
      const newArray = cloneArray.filter((restaurant) => {
        return restaurant.review <= 4.2;
      })
      this.setState({
        filteredRestaurant: newArray
      })
    } 
    else if (this.state.matchValue > 40 && this.state.matchValue <= 60) {
      const newArray = cloneArray.filter((restaurant) => {
        return restaurant.review <= 4.5 && restaurant.review > 4.2;
      })
      this.setState({
        filteredRestaurant: newArray
      })
    } 
    else if (this.state.matchValue > 60) {
      const newArray = cloneArray.filter((restaurant) => {
        return restaurant.review > 4.5;
      })
      this.setState({
        filteredRestaurant: newArray
      })
    } 
  }


  render() {
    
    return (
      <div className='app'>
        <header>
          <h1>Game of Potter</h1>
        </header>
          
        <div className='wrapper'>
          <main className='gridContainer'>
            <div className='introduction'>
              <p>
                Hi there! Have you ever wanted to know which{' '}
                <span>Game of Thrones</span> and <span>Harry Potter </span>
                characters could be BFFS? No? Well.. too bad!
              </p>
            </div>
            <GetGotCharacters setAppState={value => this.setState(value)} />
            <StatsMatch
              got={this.state.randomGotCharacter}
              hp={this.state.randomHpCharacter}
              sendValue={this.handleValue}
            />
            <GetHpCharacters setAppState={value => this.setState(value)} />
          </main>
        </div>
        <Outing
              getReview={this.handleGetReview}
              passReview={this.state.filteredRestaurant}
            />
        <Footer />
      </div>

    );
  }
}

export default App;
