import React, { Component } from 'react'

class GotLogic extends Component {

    getRandomGot = (e, randomCharacter) => {
        e.preventDefault();
        const gotOriginalArray = this.props.character

        let value = 0;

        const gotCharactersHouse = gotOriginalArray.filter( (gotHouse) => {
            if (gotHouse.house === "House Stark") {
                console.log("House Stark");
                    return gotHouse.value = 90;
                    
            } else if (gotHouse.house === "House Tyrell") {
                console.log("House Tyrell");
                    return gotHouse.value = 70;
                    
            } else if (gotHouse.house === "House Greyjoy") {
                console.log("House Greyjoy");
                    return gotHouse.value = 50;

                } else {
                console.log("House Lannister");
                    return gotHouse.value = 30;               
            }
        });


        console.log(gotCharactersHouse);

        // // Initialize function to test if a number is even
        // const newCharacterValue = gotCharactersHouse.age((multiplyerApplied) => {
        // //     // If the remainder after dividing by two is 0, return true
        //     if (multiplyerApplied.age % 2 === 0) {
        //         return multiplyerApplied.value 
        //     }
        // });

        // console.log(newCharacterValue);

        // this.setState({
        //     finalCharSelection: multiplyerApplied
        // })
    }



render () {
    return (
        <div>
            <button onClick={this.getRandomGot} ></button>
        </div>
    )
}
}


export default GotLogic;




