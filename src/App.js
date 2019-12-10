import React, { Component } from "react";
import "./styles/App.css";
import GetGotCharacters from "./GetGotCharacters";
import GetHpCharacters from "./GetHpCharacters";
import heart from './assets/heart.png';
import Outing from './Outing.js';
import StatsMatch from './StatsMatch.js';

let filteredRestaurant = {}

class App extends Component {
  constructor() {
    super();
    this.state = {
      randomGotCharacter: {},
      randomHpCharacter: {},
      suggestions: [],
      matchValue: '',
      filteredRestaurant: {}
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
    console.log(this.state.suggestions);
    this.state.suggestions.filter((restaurant) => {
      // console.log(value);
      // console.log(restaurant.review);
    // let filteredRestaurant = {}
      if (value <= '40%' && restaurant.review <= 4.2) {
        // console.log(value);
        console.log(restaurant);
        // return restaurant
        // filteredRestaurant = restaurant;
        // console.log(filteredRestaurant);
        // this.setState({
        //   filteredRestaurant: restaurant
        // })
        
      } else if (value > '40%' && value <= '60%' && restaurant.review <= 4.5 && restaurant.review > 4.2) {
        // console.log(restaurant);
        // return restaurant
        // filteredRestaurant = restaurant;
      } else if (value > '60%' && restaurant.review > 4.5) {
        // console.log(restaurant);
        // return restaurant
        // filteredRestaurant = restaurant;
        
      }
    })  
  }


 

  render() {
    // console.log(this.state);
    return (
      <div className='wrapper'>
        <h1>Game of Potter</h1>
        <div className='gridContainer'>
          <GetGotCharacters setAppState={value => this.setState(value)} />
          <img className='heartIcon' src={heart} alt=""/>
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
          sendValue={this.handleValue}
          filteredRestaurants={filteredRestaurant}
          />
          <div>
            {/* <h2>{this.state.filteredRestaurant.name}</h2> */}
            {/* <p>{filteredRestaurant.review}</p> */}
          </div>
        </div>
      </div>
    );
  }
}

export default App;