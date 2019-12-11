import React, { Component } from 'react'
import axios from 'axios'
import placeholderImage from './assets/cameraPlaceholder.jpg'

class GetGotCharacters extends Component {
  constructor () {
    super()
    this.state = {
      gotCharacters: [
        {
          name: '',
          house: '',
          age: '',
          image: ''
        }
      ],
      gotHouses: [
        'House Stark',
        'House Lannister',
        'House Tyrell',
        'House Greyjoy',
      ],
      randomGotCharacter: {} /* holding random character */
    }
  }

  componentDidMount() {
    Promise.all([
      axios.get(
        `https://api.got.show/api/book/characters/byHouse/${
          this.state.gotHouses[0]
        }`
      ),
      axios.get(
        `https://api.got.show/api/book/characters/byHouse/${
          this.state.gotHouses[1]
        }`
      ),
      axios.get(
        `https://api.got.show/api/book/characters/byHouse/${
          this.state.gotHouses[2]
        }`
      ),
      axios.get(
        `https://api.got.show/api/book/characters/byHouse/${
          this.state.gotHouses[3]
        }`
      )
    ]).then(data => {
      let arrayOfCharacters = []

      data.forEach(house => {
        house.data.forEach(character => {
          if (character.house !== undefined && character.birth !== undefined) {
            if (character.image === undefined) {
              character.image = placeholderImage
            }
            const characterObject = {
              name: character.name,
              house: character.house,
              age: character.birth,
              image: character.image
            }
            arrayOfCharacters.push(characterObject)
          }
        })
      })
      this.setState({
        gotCharacters: arrayOfCharacters /* setting state of array of characters from api call */
      })
      this.getRandomCharacter() /* getting a random character */
    })
  }

  getRandomCharacter = () => {
    const { gotCharacters } = this.state
    const { setAppState } = this.props

    const arrayLength = gotCharacters.length

    // generate a random number between 0 and that length
    const randomNumberCharacter = Math.floor(Math.random() * arrayLength)

    // use that random number as an index to pick a character from the house
    const randomCharacter = gotCharacters[randomNumberCharacter]

    this.setState({
      randomGotCharacter: randomCharacter
    })
    const appState = {}
    appState.randomGotCharacter = randomCharacter
    setAppState(appState)
  }


  render() {
    const { randomGotCharacter } = this.state

    return (
      <div className='gotCharacters'>
        <div className='individualGotCharacter'>
          <h2>{randomGotCharacter.name}</h2>
          <p>
            {randomGotCharacter.house}
          </p>
          <img className='gotImages' src={randomGotCharacter.image} alt={`Illustration of ${randomGotCharacter.name}`}/>
          <button
            className='randomizeCharacter'
            onClick={this.getRandomCharacter}
          >
            Randomize GoT Character
          </button>
        </div>
      </div>
    )
  }
}

export default GetGotCharacters
