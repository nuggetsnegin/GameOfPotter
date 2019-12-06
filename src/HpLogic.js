import React, { Component } from 'react';

class HpLogic extends Component {

    constructor(props) {
        super(props);
        this.state = {
            value: 0
        };
    }
    
    getRandomHP = (e, randomCharacter) => {
        e.preventDefault();
        const hpOriginalArray = this.props.character
        console.log(hpOriginalArray)

        // let value = 0;

        const hpCharactersHouse = hpOriginalArray.filter( (hpHouse) => {
            if (hpHouse.house === "Gryffindor") {
                // console.log("Gryffindor")
                return hpHouse.value=90 
            } else if (hpHouse.house === "Hufflepuff") {
                // console.log("Hufflepuff")
                return hpHouse.value=70 
            } else if (hpHouse.house === "Ravenclaw") {
                // console.log("Ravenclaw")
                return hpHouse.value=50 
            } else if (hpHouse.house === "Slytherin") {
                // console.log("Slytherin")
                return hpHouse.value=30 
            }
            // return hpHouse[randomCharacter] === true
        })

        // const hpCharactersAge = hpOriginalArray.filter ( (hpAge) => {
        //     if (hpAge.age % 2 === 0)
        //         return hpAge.value=50
        //     else (hpAge.age % 3 === 0)
        //         return hpAge.value=25
        // })

        // this.setState({
        //     hpHouse: hpCharactersHouse,
        //     // hpAge: hpCharactersAge,
        // })
        // // console.log(this.state.hpHouse)

    }

    render() {
        return(
            <div>
                <button onClick={this.getRandomHP}></button>
            </div>
        )
    }

}

export default HpLogic