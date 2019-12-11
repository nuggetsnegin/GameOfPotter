import React, { Component } from 'react';
import axios from 'axios';
import { strict } from 'assert';

class Outing extends Component {
  constructor() {
    super();
    this.state = {
      suggestions: [
        {
          name: '',
          review: '',
          cuisine: '',
          image: '',
        },
      ],
      matchValue: '',
      filteredRestaurant: {},
    };
  }

  shortenRestaurantName = (restaurantName) =>{
    if(restaurantName.length >= 12){
      return restaurantName.slice(0, 12)+"..."; //shorter word and add ...
    }
    return restaurantName;
  }

  componentDidMount() {
    Promise.all([
      axios.get('https://developers.zomato.com/api/v2.1/search?entity_id=89&entity_type=city',{
        method: 'GET',
        dataResponse: 'json',
        headers: {
          'user-key': 'a43d2ac63efba3212ecc9c702a40317c',
        },
      }),
      axios.get('https://developers.zomato.com/api/v2.1/search?entity_id=89&entity_type=city&sort=rating&order=asc',{
        method: 'GET',
        dataResponse: 'json',
        headers: {
          'user-key': 'a43d2ac63efba3212ecc9c702a40317c',
        },
      })
      
      ]).then(data => {
      let arrayOfRestaurants = [];
        data.forEach(restaurant => {
          restaurant.data.restaurants.forEach(suggestion =>{
            if(suggestion){
              const restaurantsObject = {
                name: this.shortenRestaurantName(suggestion.restaurant.name),
                image: suggestion.restaurant.thumb, /*if no image available*/
                cuisine: suggestion.restaurant.cuisines,
                review: suggestion.restaurant.user_rating.aggregate_rating,
              }
              arrayOfRestaurants.push(restaurantsObject);
            }

          });
        })
        this.props.getReview(arrayOfRestaurants);
    });
  }

  render() {
    return (
      <div className='outing'>
        <div className='wrapper'>
          <h2 className='title'>Date Night Suggestions</h2>
          <div className='outingSuggestions'>
            <ul>
            {/*using filter to avoid undefined suggestion crash*/}
              {this.props.passReview.filter(suggestion => suggestion).map(suggestion => {
                return (
                  <li key={suggestion.name}>
                    <img
                      className='restaurantImg'
                      src={suggestion.image}
                      alt=''
                    />
                    <div className='restaurantInfo'>
                      <h3>{suggestion.name}</h3>
                      <h5>Review: {suggestion.review} ⭐️</h5>
                      <h4>Cuisine: {suggestion.cuisine}</h4>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Outing;
