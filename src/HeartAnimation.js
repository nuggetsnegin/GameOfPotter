import React, { Component } from 'react'
import heart from './assets/heart.png'

class HeartAnimation extends Component {
  heartBeatCalculator = heartBeat => {
    if (heartBeat >= 90) return 0.5
    else if (heartBeat >= 80) return 0.75
    else if (heartBeat >= 70) return 0.85
    else if (heartBeat >= 60) return 0.95
    else if (heartBeat >= 50) return 1
    else if (heartBeat >= 40) return 1.5
    else if (heartBeat >= 30) return 1.75
    else if (heartBeat >= 20) return 2
    else if (heartBeat >= 10) return 5
    else return 10
  }


  render() {
    const heartBeat = this.props.totalPoints

    const heartBeatAnimation = this.heartBeatCalculator(heartBeat);
    return (
      <img
        className='heartIcon'
        src={heart}
        alt='Icon of a red heart'
        style={{
          WebkitAnimation: `heartbeat ${heartBeatAnimation}s ease-in-out infinite both`,
          animation: 'heartbeat 1.5s ease-in-out infinite both'
        }}
      />
    )
  }
}

export default HeartAnimation
