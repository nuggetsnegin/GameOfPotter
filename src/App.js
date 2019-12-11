import React, { Component } from "react";
import "./styles/App.css";
import GetGotCharacters from "./GetGotCharacters";
import GetHpCharacters from "./GetHpCharacters";
import Outing from "./Outing.js";
import StatsMatch from "./StatsMatch.js";
import Footer from "./Footer.js";

class App extends Component {
  constructor() {
    super();
    this.state = {
      randomGotCharacter: {},
      randomHpCharacter: {},
      suggestions: [],
      matchValue: "",
      filteredRestaurant: [],
    };
  }

  handleGetReview = suggestionsArray => {
    this.setState(
      {
        suggestions: suggestionsArray,
      },
      () => {
        if (this.state.matchValue) {
          this.passValue();
        }
      }
    );
  };

  handleValue = value => {
    this.setState(
      {
        matchValue: value,
      },
      () => {
        if (this.state.suggestions.length > 0) {
          this.passValue();
        }
      }
    );
  };

  passValue = () => {
    console.log('hello')
    const cloneArray = [...this.state.suggestions];

    if (this.state.matchValue <= 50) {
      const newArray = cloneArray.filter(restaurant => {
        return restaurant.review <= 2;
      });

      // if the incoming array has more than 3 items, get three random numbers and use those numbers to grab 3 random restaurants, and then set that array to state
      if (newArray.length > 3) {
        let smallArray = [];
        // create array of 3 random Numbers and use to pick 3 random restaurants from the array newArray
        for (let i = 0; i < 3; i++) {
          // generate a random number between 0 and the newArray length
          const randomNumber = Math.floor(Math.random() * newArray.length);
          smallArray.push(newArray[randomNumber]);
          newArray.splice(randomNumber); /*preventing duplicates from showing*/
        }
        this.setState({
          filteredRestaurant: smallArray,
        });
        // else if the incoming array already has only 3 items, just put that array of 3 in state
      } else {
        this.setState({
          filteredRestaurant: newArray,
        });
      }
    } else if (this.state.matchValue > 50 && this.state.matchValue <= 70) {
      const newArray = cloneArray.filter(restaurant => {
        return restaurant.review >= 2 && restaurant.review < 4.4;
      });

      if (newArray.length > 3) {
        let smallArray = [];
        // create array of 3 random Numbers
        for (let i = 0; i < 3; i++) {
          // generate a random number between 0 and the newArray length
          const randomNumber = Math.floor(Math.random() * newArray.length);
          smallArray.push(newArray[randomNumber]); 
          newArray.splice(randomNumber); /*preventing duplicates from showing*/
        }
        this.setState({
          filteredRestaurant: smallArray,
        });
      } else {
        this.setState({
          filteredRestaurant: newArray,
        });
      }
    } else if (this.state.matchValue > 70) {
      const newArray = cloneArray.filter(restaurant => {
        return restaurant.review > 4.5;
      });

      if (newArray.length > 3) {
        let smallArray = [];
        // create array of 3 random Numbers
        for (let i = 0; i < 3; i++) {
          // generate a random number between 0 and the newArray length
          const randomNumber = Math.floor(Math.random() * newArray.length);
          smallArray.push(newArray[randomNumber]);
          newArray.splice(randomNumber);
        }
        this.setState({
          filteredRestaurant: smallArray,
        });
      } else {
        this.setState({
          filteredRestaurant: newArray,
        });
      }
    }
  };

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
