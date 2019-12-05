import React, { Component } from "react";
import "./styles/App.css";
import axios from "axios";
import RandomizeCharacter from "./RandomizeCharacters";
// import GetCharacterImages from "./RandomizeCharacters";

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

  componentDidMount() {
    const gotMultipleAPI = Promise.all([
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
      // console.log(data);
      // data is array of 4 objects (each object = house)

      // will contain all the character objects of all the houses
      let arrayOfHouses = []
      data.forEach(houseObject => {
        // goes through 4 times
        // returned 4 arrays

        // will contain all the character objects for the current house
        let arrayOfCharacters = [];

        // houseObject.data = array of character objects for each house
        // for each house go into the data and for each character make and object that contains the persons namd and house
        houseObject.data.forEach(character => {
          const characterObject = {
            name: character.name,
            house: character.house,
          };
          arrayOfCharacters.push(characterObject)
          // this.setState({
          //   gotCharacters: [...this.state.gotCharacters, characterObject],
          // });
        });
        // console.log(arrayOfCharacters);

        arrayOfHouses.push(arrayOfCharacters);
      });

      // console.log(arrayOfHouses);
      // have an array containing 4 house arrays, each house array contains all the corresponding character objects for that particuar house
      // add this to state
      this.setState({
        gotCharacters: arrayOfHouses
      })
      
    });

    // axios({
    //   method: "get",
    //   url: "https://www.potterapi.com/v1/characters",
    //   dataResponse: "json",
    //   params: {
    //     key: "$2a$10$F5zeX2iHFskAgcz4ovhm4.BUaurcM.C9u5ncrkPda4RSBOgdTO8JK",
    //   },
    // }).then(data => {
    //   data.data.forEach(character => {
    //     const characterObject = {
    //       name: character.name,
    //       house: character.house,
    //     };

    //     this.setState({
    //       hpCharacters: [...this.state.hpCharacters, characterObject],
    //     });
    //   });
    // });
  }

  render() {
    return (
      <div className='wrapper'>
        <h1>Game of Potter</h1>
        <RandomizeCharacter gotCharactersArray={this.state.gotCharacters}/>
      </div>
    );
  }
}

export default App;
