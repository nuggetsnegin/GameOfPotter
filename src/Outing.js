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
    /*high rating restaurants*/
    const goodRestaurants = [];
    const badRestaurants = [];

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
            const restaurantsObject = {
              name: suggestion.restaurant.name,
              image: suggestion.restaurant.thumb?suggestion.restaurant.thumb:null, /*if no image available*/
              cuisine: suggestion.restaurant.cuisines,
              review: suggestion.restaurant.user_rating.aggregate_rating,
            }
            arrayOfRestaurants.push(restaurantsObject);
          });
        })
        this.props.getReview(arrayOfRestaurants);
        console.log(arrayOfRestaurants);
    });
  }

  


  render() {
    return (
      <div className='outing'>
        <div className='wrapper'>
          <h2 className='title'>Date Night Suggestions</h2>
          <div className='outingSuggestions'>
            <ul>
              {this.props.passReview.map(suggestion => {
                return (
                  <li>
                    <img
                      className='restaurantImg'
                      src={suggestion.image?suggestion.image:null}
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
