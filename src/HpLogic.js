import React, { Component } from 'react';

class HpLogic extends Component {
    
    getRandomHP = (e, randomCharacter) => {
        e.preventDefault();
        const hpOriginalArray = this.props.character
        console.log(hpOriginalArray)

        let value = 0;

        const hpCharactersHouse = hpOriginalArray.filter( (hpHouse) => {
            if (hpHouse.house === "Gryffindor") {
                // console.log("Gryffindor")
                return hpHouse.value=90 
            } else if (hpHouse.house === "Hufflepuff") {
                // console.log("Hufflepuff")
                return hpHouse.value = 70 
            } else if (hpHouse.house === "Ravenclaw") {
                // console.log("Ravenclaw")
                return hpHouse.value = 50 
            } else if (hpHouse.house === "Slytherin") {
                // console.log("Slytherin")
                return hpHouse.value = 30 
            }
            return hpHouse[randomCharacter] === true
        })

        // const hpCharactersAge = isEven((year) => {
        //     if (year.age % 2 == 0)
        //         return true;
        //     else
        //         return false;
        // })

        function isEven(year) {
            if (year.age % 2 == 0)
                return true;
            else
                return false;
        }
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