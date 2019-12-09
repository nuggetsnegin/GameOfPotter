import React, { Component } from "react";
import axios from 'axios';
import "./styles/App.css";
// import GetGotCharacters from "./GetGotCharacters";
// import GetHpCharacters from "./GetHpCharacters";
import heart from './assets/heart.png';
import placeholderImage from './assets/cameraPlaceholder.jpg';
// import RandomizeCharacters from "./RandomizeCharacters";
// import Outing from './Outing.js';
import StatsMatch from './StatsMatch.js';


class App extends Component {
  constructor() {
    super();
    this.state = {
      // hpCharacters: [],
      hpCharacters: [{
        name: "",
        house: "",
        age: "",
        image: "",
      }],
      // gotCharacters: [],
      gotCharacters: [{
        name: "",
        house: "",
        age: "",
        image: "",
      }],
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

  componentDidMount() {

    const getHpCharacters = () => {
      axios({
        url: `http://hp-api.herokuapp.com/api/characters`,
        method: "get",
      }).then(data => {

        let arrayOfCharacters = [];

        data.data.forEach(character => {
          if (character.house !== "" && character.yearOfBirth !== "") {
            const characterObject = {
              name: character.name,
              house: character.house,
              image: character.image,
              age: character.yearOfBirth,
            };
            arrayOfCharacters.push(characterObject);
          }
        });
        this.setState({
          hpCharacters: arrayOfCharacters,
        });
      });
    }

    const getGotCharacters = () => {
      Promise.all([
        axios.get(
          `https://api.got.show/api/book/characters/byHouse/${this.state.gotHouses[0]}`
        ),
        axios.get(
          `https://api.got.show/api/book/characters/byHouse/${this.state.gotHouses[1]}`
        ),
        axios.get(
          `https://api.got.show/api/book/characters/byHouse/${this.state.gotHouses[2]}`
        ),
        axios.get(
          `https://api.got.show/api/book/characters/byHouse/${this.state.gotHouses[3]}`
        ),
      ]).then(data => {

        let arrayOfCharacters = [];

        data.forEach(house => {
          house.data.forEach(character => {
            if (character.house !== undefined && character.birth !== undefined) {
              if (character.image === undefined) {
                character.image = placeholderImage;
              }
              const characterObject = {
                name: character.name,
                house: character.house,
                age: character.birth,
                image: character.image,
              };
              arrayOfCharacters.push(characterObject);
            }
          });
        });
        this.setState({
          gotCharacters: arrayOfCharacters
        });
      });
    }
  }

  componentDidUpdate() {
    const getRandomCharacter = () => {
      const arrayLength = this.props.charactersArray.length;

      // generate a random number between 0 and that length
      const randomNumberCharacter = Math.floor(Math.random() * arrayLength);

      // use that random number as an index to pick a character from the house
      const randomCharacter = this.props.charactersArray[randomNumberCharacter];

      if (
        randomCharacter !== undefined &&
        randomCharacter.name &&
        !this.state.randomCharacter) {  
        this.setState({
          randomCharacter
        })

        const appState = {}
        if (this.props.type === 'Got') {
          appState.randomGotCharacter = randomCharacter
        } else {
          appState.randomHpCharacter = randomCharacter
        }
        this.props.setAppState(appState)
      }
    }
  }

  // rematch = () => {
  //   // have the rematch function being called here once the botton is clicked.
  // }

  render() {
    return (
      <div className='wrapper'>
        <h1>Game of Potter</h1>
        <div className='gridContainer'>
          {/* <Match 
           gotCharacter={this.state.randomGotCharacter}
           hpCharacter={this.state.randomHpCharacter}
           rematch = {this.rematch}
          /> */}
          {/* <GetGotCharacters setAppState={value => this.setState(value)} /> This will be moved to App.js ComponenetDidMount */}
          <div className='gotCharacters'>
            <div className='individualGotCharacter'>
              <h3>{this.state.randomCharacter.name}</h3>
              <p>
                {this.state.randomCharacter.house}, {this.state.randomCharacter.age}
              </p>
              <img className='gotImages' src={this.state.randomCharacter.image} alt='' />
            </div>
          </div>
          <img className='heart' src={heart} alt=""/>
          <StatsMatch 
            got = {this.state.randomGotCharacter}
            hp = {this.state.randomHpCharacter}
          />
          {/* <button setAppState={value => this.setState(value)}>Match Me! ❤️</button> */}
          {/* <GetHpCharacters setAppState={value => this.setState(value)} /> This will be moved to App.js ComponenetDidMount */}
          <div className='hpCharacters'>
            <div className='individualGotCharacter'>
              <h3>{this.state.randomCharacter.name}</h3>
              <p>
                {this.state.randomCharacter.house}, {this.state.randomCharacter.age}
              </p>
              <img className='gotImages' src={this.state.randomCharacter.image} alt='' />
            </div>
          </div>
          {/* <Outing /> */}
        </div>
      </div>
    );
  }
}

export default App;