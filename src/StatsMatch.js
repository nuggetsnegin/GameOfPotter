import React from "react";
import HeartAnimation from "./HeartAnimation";

const calculateCharacterPoints = character => {
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

const pointMessages = totalPoints => {
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

const combineStats = (hp, got) => {
  const hpStats = calculateCharacterPoints(hp);
  const gotStats = calculateCharacterPoints(got);
  const totalValue = hpStats + gotStats;

  return totalValue;
};

const StatsMatch = props => {
  console.log("I'll get you gadget next time");
  
  if (!props.hp.name || !props.got.name) {
    return null;
  }
  const value = combineStats(props.hp, props.got);
  props.sendValue(value);

  return (
    <div className='affinityWrapper'>
      <div className='heartWrapper'>
        <HeartAnimation totalPoints={value} />
          <h2>{value}%</h2>
      </div>
      <div className='message'>
        <h3>{pointMessages(value)}</h3>
      </div>
    </div>
  );
};

export default StatsMatch;
