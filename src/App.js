import React, { Component } from "react";
import './styles/App.css';
import axios from "axios";
import RandomizeCharacters from './RandomizeCharacters';
import GetCharacterImages from './RandomizeCharacters'

let arrayOfHouses = []
class App extends Component {
  constructor() {
    super();
    this.state = {
      HPCharacters: [],
      GoTHouses1: [],
      GoTHouses2: [],
      GoTHousesTotal: [],
      GoTCharacters: [],
      arrayOfHouses: []
    };
  }

  
  componentDidMount() {
    axios({
      method: 'get',
      // 59 pages total 1-50, 51-59
      url: 'https://anapioficeandfire.com/api/characters?pageSize=50',
      // url: "https://www.anapioficeandfire.com/api/houses?page=51&pageSize=8",
      dataResponse: 'json',
    }).then(response => {
      console.log(response.data);

      this.setState({
        GoTHouses1: response.data,
      });

    }).then(() => {
      axios({
        method: 'get',
        // 59 pages total 1-50, 51-59
        // url: 'https://anapioficeandfire.com/api/characters?pageSize=50',
        url: "https://www.anapioficeandfire.com/api/houses?page=51&pageSize=8",
        dataResponse: 'json',
      }).then(response => {
        console.log(response.data);

        this.setState({
          GoTHouses2: response.data,
        });

      }).then(() => {
        this.getHouses();
      })
    })

    
    

    axios({
      method: 'get',
      url: 'https://www.potterapi.com/v1/characters',
      dataResponse: 'json',
      params: {
        key: '$2a$10$F5zeX2iHFskAgcz4ovhm4.BUaurcM.C9u5ncrkPda4RSBOgdTO8JK',
      },
    }).then(response => {
      console.log(response.data);

      this.setState({
        HPCharacters: response.data,
      });
    });
  }

  getHouses = () => {
    console.log(`helllo`);
    // console.log(this.state.GoTCharacters);
    // let arrayOfHouses = [...this.state.arrayOfHouses]

    // combine the two GoTHouses arrays
    this.setState({
      GoTHousesTotal: this.state.GoTHouses1.concat(this.state.GoTHouses2) 
    })


    // this.state.GoTHouses.map((house) => {
    //   arrayOfHouses.push(house.name)
    //  })
    //  console.log(arrayOfHouses);

     
    //  this.setState({
    //    arrayOfHouses: arrayOfHouses
    //  })
     
  }

  // getHouseAlleg = () => {
  //   console.log(`helllo`);
  //   console.log(this.state.GoTCharacters);
  //   let arrayOfAlleg = []
  //   this.state.GoTCharacters.map((character) => {
  //     // if the allefiences array is not empty
  //     // let arrayOfAlleiances = []
      
  //     if (character.allegiances != []) {
  //       // console.log(`I am not empty`);
  //       // iterate through the allegiances array and grab the URL
  //       // let arrayOfAlleiances = []
  //       for (let i = 0; i < character.allegiances.length; i++) {
  //         // console.log(character.allegiances[i]);
  //         if (arrayOfAlleg.includes(character.allegiances[i])) {
  //           // console.log(`I was already in the array`);
  //         } else {
  //           arrayOfAlleg.push(character.allegiances[i])
  //         }
  //       }
  //     }
  //   })
  //   // console.log(arrayOfAlleg);
  //   // make the api call for each of the allegiences to get the result
  //   // then loop again through the array of characters and match the result of the api call and the corresponding URL from arrayOfAlleg -> assign that particular character that allegiance
    
  // }

  render() {
    // console.log(this.state.GoTCharacters[0]);
    
    return (
      <div>
        <div className='wrapper'>
          <h1>Game of Potter</h1>
          <p>Test test test</p>
        </div>
        {/* <GetCharacterImages /> */}
      </div>
    );
  }
}

export default App;
