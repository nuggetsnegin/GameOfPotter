import React, { Component } from "react";

const RandomizeCharacter = props => {
  // generate a random number between 0 and the length of the character array
  const length = props.characterArray.length;
  const randomNumber = Math.floor(Math.random() * length);
  // use this random number as the index to grab the random character
  const randomCharacter = props.characterArray[randomNumber];

  console.log(randomCharacter);

  return <div>{randomCharacter}</div>;
};

export default RandomizeCharacter;
