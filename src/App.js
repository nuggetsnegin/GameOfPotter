import React, { Component } from 'react';
import "./styles/App.css";
import GetGotCharacters from "./GetGotCharacters";
import GetHpCharacters from "./GetHpCharacters";
import Outing from "./Outing.js";
import StatsMatch from "./StatsMatch.js";

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
    })
  }

  handleValue = (value) => {
    // console.log(value);
    // this.setState({
    //   matchValue: value
    // })
    const cloneArray = [...this.state.suggestions];
    // console.log(this.state.suggestions);
    
      // console.log(value);
      // console.log(restaurant.review);
    // let filteredRestaurant = {}
    if (value <= 40) {
      // console.log(value);
      // console.log(restaurant);

      const newArray = cloneArray.filter((restaurant) => {
        return restaurant.review <= 4.2;
      })
      // this.setState({
      //   filteredRestaurant: newArray
      // })
      console.log(newArray);
      

    } 
    // else if (value > 40 && value <= 60 && restaurant.review <= 4.5 && restaurant.review > 4.2) {
    //   // console.log(restaurant);
    //   // return restaurant
    //   // filteredRestaurant = restaurant;
    // } else if (value > 60 && restaurant.review > 4.5) {
    //   // console.log(restaurant);
    //   // return restaurant
    //   // filteredRestaurant = restaurant;
      
    // } 
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
              sendValue={this.handleValue}
            />
            <GetHpCharacters setAppState={value => this.setState(value)} />
                <Outing
                  getReview={this.handleGetReview}
                  passReview={this.state.suggestions}
                  // passMatchValue={this.state.matchValue}
                  // sendValue={this.handleValue}
                  // filteredRestaurants={filteredRestaurant}
                />
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
