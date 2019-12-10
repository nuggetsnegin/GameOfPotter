import React, { Component } from 'react'
import './styles/App.css'
import axios from 'axios'

class GetHpCharacters extends Component {
  constructor () {
    super()
    this.state = {
      hpCharacters: [
        {
          name: '',
          house: '',
          birth: '',
          image: ''
        }
      ],
      randomHPCharacter: {} /*holding random character*/
    }
  }

  componentDidMount () {
    axios({
      url: `https://hp-api.herokuapp.com/api/characters`,
      method: 'get'
    }).then(data => {
      let arrayOfCharacters = []

      data.data.forEach(character => {
        if (character.house !== '' && character.yearOfBirth !== '') {
          const characterObject = {
            name: character.name,
            house: character.house,
            image: character.image,
            age: character.yearOfBirth,
            ancestry: character.ancestry,
          }
          arrayOfCharacters.push(characterObject)
        }
      })
      this.setState({
        hpCharacters: arrayOfCharacters
      })
      this.getRandomCharacter()
    })
  }

  getRandomCharacter = () => {
    const { hpCharacters } = this.state
    const { setAppState } = this.props

    const arrayLength = hpCharacters.length

    // generate a random number between 0 and that length
    const randomNumberCharacter = Math.floor(Math.random() * arrayLength)

    // use that random number as an index to pick a character from the house
    const randomCharacter = hpCharacters[randomNumberCharacter]
    this.setState({
      randomHPCharacter: randomCharacter
    })
    const appState = {}
    appState.randomHpCharacter = randomCharacter
    setAppState(appState)
  }
  render () {
    const { randomHPCharacter } = this.state

    return (
      <div className='hpCharacters'>
        <div className='individualGotCharacter'>
          <h2>{randomHPCharacter.name}</h2>
          <p>
            {randomHPCharacter.house}
          </p>
          <img className='hpImages' src={randomHPCharacter.image} alt={`Photograph of ${randomHPCharacter.name}`} />
          <button
            className='randomizeCharacter'
            onClick={this.getRandomCharacter}
          >
            Randomize HP Character
          </button>
        </div>
      </div>
    )
  }
}

export default GetHpCharacters
