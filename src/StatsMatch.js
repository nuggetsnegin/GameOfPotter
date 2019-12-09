import React, { Component } from 'react'

const calculateCharacterPoints = character => {
  let totalPoints = 0

  const house = character.house
  if (house === 'Gryffindor' || house === 'House Stark') {
    totalPoints += 30
  } else if (house === 'Hufflepuff' || house === 'House Lannister') {
    totalPoints += 20
  } else if (house === 'Ravenclaw' || house === 'House Tyrell') {
    totalPoints += 10
  } else if (house === 'Slytherin' || house === 'House Greyjoy') {
    totalPoints += 0
  }

  const age = character.age
  if (age % 2 === 0) totalPoints += 20
  else totalPoints -= 10

  return totalPoints
}

const combineStats = (hp, got) => {
  const hpStats = calculateCharacterPoints(hp)
  const gotStats = calculateCharacterPoints(got)

  const totalValue = hpStats + gotStats

  return totalValue + '%'
}

const StatsMatch = props => {
  if (!props.hp.name || !props.got.name) {
    return null
  }
  const value = combineStats(props.hp, props.got)
  return <div className='affinity'>{value}</div>
}

export default StatsMatch
