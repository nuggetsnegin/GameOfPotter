import React, { Component } from 'react';
import axios from 'axios';


// const RandomizeCharacter= (props) => {
//     // generate a random number between 0 and the length of the character array
//     const length = props.characterArray.length;
//     const randomNumber = Math.floor(Math.random() * length);
//     // use this random number as the index to grab the random character
//     const randomCharacter = props.characterArray[randomNumber];
    
//     return(
//         <div>{randomCharacter}</div>
//     );
// }

// export default RandomizeCharacter;

class GetCharacterImages extends Component {
    constructor() {
        super();
        this.state = {
            characters: []
        }
    }
    componentDidMount() {
        axios({
            url: `http://hp-api.herokuapp.com/api/characters`,
            method: 'get'
        }).then((data) => {
            console.log(data);
            console.log(data.data);
            this.setState({
                characters: data.data
            })
        }) 
    }
    render() {
        return (
            <div>
                <h2>Hello</h2>
                <ul className="characterImages">
                    {
                        this.state.characters.map((character) => {
                            return (
                                <li>
                                    <p>{character.name}</p>
                                    <div className="imageContainer">
                                        <img src={character.image}/>
                                    </div>
                                </li>
                            )
                        })
                    }
    
                </ul>
            </div>
        )
    }

}

export default GetCharacterImages;