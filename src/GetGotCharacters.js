import React, { Component } from "react";
import axios from "axios";
import placeholderImage from './assets/cameraPlaceholder.jpg';
import RandomizeCharacters from './RandomizeCharacters';


class GetGotCharacters extends Component {
  constructor() {
    super();
    this.state = {
      gotCharacters: [{
        name: "",
        house: "",
        age: "",
        image: "",
      }],
      gotHouses: [
        "House Stark",
        "House Lannister",
        "House Tyrell",
        "House Greyjoy",
      ],
    };
  }

  componentDidMount() {
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
              alive: character.alive,
              age: character.birth,
              image: character.image,
            };
            arrayOfCharacters.push(characterObject);  
          }
        });
        
      });

      // console.log(arrayOfCharacters);
      
      this.setState({
        gotCharacters: arrayOfCharacters
      });
      
    });


  }
  render() {
    
    return (
      <div className='gotCharacters'>
        <RandomizeCharacters
          charactersArray={this.state.gotCharacters} 
          setAppState={this.props.setAppState} 
          type='Got' 
        />
        {/* {this.state.gotCharacters.map(character => {
          return (
            <div className='individualGotCharacter'>
              <h3>{character.name}</h3>
              <p>
                {character.house}, {character.age}
              </p>
              <img className='gotImages' src={character.image} alt='' />
            </div>
          );
        })} */}
      </div>
    );
  }
}

export default GetGotCharacters;
