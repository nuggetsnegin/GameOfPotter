import React, { Component } from "react";
import "./styles/App.css";
import axios from "axios";
import RandomizeCharacters from './RandomizeCharacters';

class GetHpCharacters extends Component {
  constructor() {
    super();
    this.state = {
      hpCharacters: [{
        name: "",
        house: "",
        age: "",
        image: "",
      }],
    };
  }

  componentDidMount() {
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
  render() {
    return (
      <div className='hpCharacters'>
        <RandomizeCharacters
          charactersArray={this.state.hpCharacters}
          setAppState={this.props.setAppState}
          type='Hp' 
        />
      </div>
    );
  }
}

export default GetHpCharacters;
