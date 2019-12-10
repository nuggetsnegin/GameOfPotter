import React, { Component } from 'react';
import axios from 'axios';

let suggestions = [];

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

  componentDidMount() {
    axios({
      url:
        'https://developers.zomato.com/api/v2.1/search?entity_id=89&entity_type=city',
      method: 'GET',
      dataResponse: 'json',
      headers: {
        'user-key': 'a43d2ac63efba3212ecc9c702a40317c',
      },
    })
    .then(response => {
      const restaurants = response.data.restaurants;

      let arrayOfRestaurants = restaurants.map(suggestion => {
        const restaurantsObject = {
          name: suggestion.restaurant.name,
          image: suggestion.restaurant.thumb,
          cuisine: suggestion.restaurant.cuisines,
          review: suggestion.restaurant.user_rating.aggregate_rating,
        };
        return restaurantsObject;
      });
      suggestions = arrayOfRestaurants;
    })
    .then(() => {
      this.props.getReview(suggestions);
    });
  }


  render() {

    return (
      <div className='outing'>
        <h2 className='title'>Outing Suggestions</h2>
        <div className='outingSuggestions'>
          <ul>
            {this.props.passReview.map(suggestion => {
              return (
                <li>
                  <img
                    className='restaurantImg'
                    src={suggestion.image}
                    alt={suggestion.name}
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
    );
  }
}

export default Outing;
