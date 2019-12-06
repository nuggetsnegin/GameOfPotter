import React, { Component } from "react";

const randomizeCharacters = (props) =>{


const hp = [

    { house: '1', name: 'harry' },
  
    { house: '2', name: 'voltermor' },
  
    { house: '3', name: 'dumbodor' }
  
  ]
  
  ​
  
  console.log(hp.length)
  console.log(props.length)
  
  
    let randomResult =  Math.floor(Math.random() * Math.floor(props));
  
    
}

export default RandomizeHP
//   console.log(result)
  
//   return result;
  
//   }
  
//   ​
  
//   let randomNumber = getRandomInt(hp.length)
  
//   ​
  
//   console.log(hp[randomNumber])
  
//   console.log(hp[randomNumber].name)
  
  
// }
