import React, { Component } from "react";
import HeartAnimation from "./HeartAnimation";


class StatsMatch extends Component {
  constructor() {
    super();
    this.state = {
      value: ''
    }
  }
  componentDidUpdate(prevProps) {
    // when the props change, check props.hp.name & props.got.name
    if (this.props.hp.name !== prevProps.hp.name || this.props.got.name !== prevProps.got.name) {
      // if either is different from previous, do the following
      // if both are false, return null
      if (!this.props.hp.name || !this.props.got.name) {
        return null;
        // else do the following
      } else {
        console.log("I'll get you gadget next time");

        const value = this.combineStats(this.props.hp, this.props.got);
        this.setState({
          value: value
        })
        console.log("my name");
        
        this.props.sendValue(value);
      }
    }
  
  }

  calculateCharacterPoints = character => {
    let totalPoints = 0;

    const house = character.house;
    if (house === "Gryffindor" || house === "House Stark") {
      totalPoints += Math.floor(Math.random() * 10) + 41;
    }
    if (house === "Hufflepuff" || house === "House Tyrell") {
      totalPoints += Math.floor(Math.random() * 10) + 11;
    }
    if (house === "Ravenclaw") {
      totalPoints += Math.floor(Math.random() * 5) + 10;
    }
    if (house === "House Greyjoy") {
      totalPoints -= Math.floor(Math.random() * 5) + 1;
    }
    if (house === "House Lannister" || house === "Slytherin") {
      totalPoints -= Math.floor(Math.random() * 10) + 11;
    }

    const age = character.age;
    if (age % 2 === 0) totalPoints += 10;
    else totalPoints -= 5;

    return totalPoints;
  };

  pointMessages = totalPoints => {
    if (totalPoints >= 90) return "Wow! Best Friends Forever!";
    else if (totalPoints >= 80) return "Besties";
    else if (totalPoints >= 70) return "Matching outfits time!";
    else if (totalPoints >= 60)
      return "I may not know your phone number but I remember your name!";
    else if (totalPoints >= 50) return "Fine Friends";
    else if (totalPoints >= 40)
      return "Maybe if you talked less, I would like you more..";
    else if (totalPoints >= 30) return "Totally Friendzoned";
    else if (totalPoints >= 20) return "Do I know you?";
    else if (totalPoints >= 10) return "Wow.. just no.";
    else return "Worst match EVER!";
  };

  combineStats = (hp, got) => {
    const hpStats = this.calculateCharacterPoints(hp);
    const gotStats = this.calculateCharacterPoints(got);
    const totalValue = hpStats + gotStats;

    return totalValue;
  };

  render() {
    return (
      <div className='affinityWrapper'>
        <div className='heartWrapper'>
          <HeartAnimation totalPoints={this.state.value} />
          <h2>{this.state.value}%</h2>
        </div>
        <div className='message'>
          <h3>{this.pointMessages(this.state.value)}</h3>
        </div>
      </div>
    );
  }


};

export default StatsMatch;
