import React, { Component } from 'react';

class RandomizeCharacter extends Component {

  constructor() {
      super();
      this.state = {
        randomCharacter: null
      }
  }

  componentDidUpdate() {
    const arrayLength = this.props.charactersArray.length;

    // generate a random number between 0 and that length
    const randomNumberCharacter = Math.floor(Math.random() * arrayLength);

    // use that random number as an index to pick a character from the house
    const randomCharacter = this.props.charactersArray[randomNumberCharacter];

    if (
      randomCharacter !== undefined &&
      randomCharacter.name && 
      !this.state.randomCharacter
      // this.props.buttonClick !== this.state.buttonClick
      // The props for the button should go here
      ) {
      this.setState( {
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

  render() {
    if(!this.state.randomCharacter) {
      return null
    }
    return (
      <div className='individualGotCharacter'>
        <h3>{this.state.randomCharacter.name}</h3>
        <p>
          {this.state.randomCharacter.house}, {this.state.randomCharacter.age}
        </p>
        <img className='gotImages' src={this.state.randomCharacter.image} alt='' />
      </div>

    )
  }
} 

export default RandomizeCharacter;
