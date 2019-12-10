import React, { Component } from 'react'
import heart from './assets/heart.png'

class HeartAnimation extends Component {
    render() {

        console.log(this.props.totalPoints);
        return (
            <img className='heartIcon' src={heart} alt='Icon of a red heart' style={{
                WebkitAnimation: "heartbeat 1.5s ease-in-out infinite both",
                animation: "heartbeat 1.5s ease-in-out infinite both"
            }}/>
        )
    }
}

// .heartbeat {
//     -webkit-animation: heartbeat 1.5s ease-in-out infinite both;
//     animation: heartbeat 1.5s ease-in-out infinite both;
//   }

export default HeartAnimation