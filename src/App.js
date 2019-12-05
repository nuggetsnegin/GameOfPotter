import React, { Component } from "react";
import "./styles/App.css";
import axios from "axios";
import RandomizeCharacters from "./RandomizeCharacters";
import GetCharacterImages from "./RandomizeCharacters";

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
      data.forEach(house => {
        house.data.forEach(character => {
          if(character.house !== "" && character.birth !== ""){
            const characterObject = {
              name: character.name,
              house: character.house,
              alive: character.alive,
                age: character.birth,
                image: character.image,
              };

              this.setState({
                gotCharacters: [...this.state.gotCharacters, characterObject],
              });
              console.log(gotCharacters);
          }

          // console.log(characterObject);

        });
      });
    });

  //   axios({
  //     method: "get",
  //     url: "https://www.potterapi.com/v1/characters",
  //     dataResponse: "json",
  //     params: {
  //       key: "$2a$10$F5zeX2iHFskAgcz4ovhm4.BUaurcM.C9u5ncrkPda4RSBOgdTO8JK",
  //     },
  //   }).then(data => {
  //     data.data.forEach(character => {
  //       const characterObject = {
  //         name: character.name,
  //         house: character.house,
  //         species: character.species,
  //         book: character.books,
  //       };

  //       this.setState({
  //         hpCharacters: [...this.state.hpCharacters, characterObject],
  //       });
  //     });
  //   });

    axios({
      url: `http://hp-api.herokuapp.com/api/characters`,
      method: "get",
    }).then(data => {
      data.data.forEach(character => {

        if(character.house !== "" && character.yearOfBirth !== ""){
          const characterObject = {
            name: character.name,
            house: character.house,
            image: character.image,
            birth: character.yearOfBirth,
          }

        this.setState({
          hpCharacters: [...this.state.hpCharacters, characterObject],
        });
        }

      })

    });
  }
  render() {
    return (
      <div className='wrapper'>
        <h1>Game of Potter</h1>
        <div className='characters'>
          <div className='gotCharacters'>
            {this.state.gotCharacters.map(character => {
              return (
                <div className='test'>
                  <h3>{character.name}</h3>
                  <p>{character.house}, {character.age}</p>
                  <img
                    className='gotImages'
                    src={character.image}
                    alt=''
                  />
                </div>
              );
            })}
          </div>

          <div className='hpCharacters'>
            {this.state.hpCharacters.map(character => {
              return <div class="test2">
                <h3>{character.name}</h3>
                <p>{character.house}</p>
                <p>{character.birth}</p>
                <img
                    className='hpImages'
                    src={character.image}
                    alt=''
                  />
              </div>
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
