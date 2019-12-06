import React, { Component } from "react";

const RandomizeCharactersHP = props => {
    //   // gotCharactersArray
      console.log(props.charactersArray);


    const arrayLength = props.charactersArray.length;
    //   console.log(arrayLength);

    // const arrayLength = randomHouse.length was coming back undefined???
    // used if statement to get

    // get the length of the house array chosen above
    //   const arrayLength = randomHouse.length;
    //   console.log(arrayLength);


    // generate a random number between 0 and that length
    const randomNumberCharacter = Math.floor(Math.random() * arrayLength);
    // console.log(randomNumberCharacter);
    // // use that random number as an index to pick a character from the house
    const randomCharacter = props.charactersArray[randomNumberCharacter];
    console.log(randomCharacter);

    let newRandomCharacter;
    if (randomCharacter !== undefined) {
        newRandomCharacter = randomCharacter;
    }


    return (
        <div className='individualGotCharacter'>
            <h3>{newRandomCharacter.name}</h3>
            <p>
                {newRandomCharacter.house}, {newRandomCharacter.birth}
            </p>
            <img className='gotImages' src={newRandomCharacter.image} alt='' />
        </div>
    )
};

export default RandomizeCharactersHP;
