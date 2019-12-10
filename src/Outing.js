import React, { Component } from 'react';
import axios from 'axios';

// let suggestions = []
let filteredRestaurants = []
class Outing extends Component {

    constructor() {
        super();
        this.state = {
            suggestions: [{
                name: '',
                review: '',
                cuisine: '',
                image: '',
            }],
            matchValue: '',
            filteredRestaurant: {}
        };
    }


    componentDidMount() {
        axios({
            url: 'https://developers.zomato.com/api/v2.1/search?entity_id=89&entity_type=city',
            method:'GET',
            dataResponse: 'json',
            headers: {
                "user-key": 'a43d2ac63efba3212ecc9c702a40317c',
            }
        }).then(response => {

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
            // suggestions =  arrayOfRestaurants
        })
        // .then(() => {
        //     this.props.getReview(suggestions);
        // });
    }

    // console.log(restaurant.review)
                            // if (this.props.passMatchValue <= '40%') {
                            //     console.log(restaurant);

                            // }
    getRestaurants = () => {
        filteredRestaurants = this.props.filteredRestaurants
        console.log(filteredRestaurants);
        
    }


    render() {
        console.log(this.props);
        this.getRestaurants(this.props.filteredRestaurants)
        
        // this.getFilteredRestaurantFromProps()
        return(
            <div className='outing'>
                <h2>Outing Suggestions</h2>
                <div className='outingSuggestions'>
                    <ul>
                    {/* {this.props.sendFilteredRestaurant !== []

                    ?
                    this.props.sendFilteredRestaurant.map((restaurant) => {
                        return(
                            <li>{restaurant}</li>
                        )
                    })
                    :
                    <p>Nothing</p>
                    } */}
                        {/* {this.state.suggestions.map(suggestion => {
                            return (
                                <li>
                                    <h3>{suggestion.name}</h3>
                                    <h4>{suggestion.review}</h4>
                                    <h3>{suggestion.cuisine}</h3>
                                    <img src={suggestion.image} alt=""/>
                                </li>
                            );
                        })} */}
                        {/* {this.props.passReview.filter((restaurant) => {
                            console.log(restaurant);
                            console.log(this.props.matchValue);
                            return(
                                restaurant
                            )   
                        })
                        .map(() => {
                            return(
                                <li></li>
                            )
                        })

                        } */}
                    </ul>
                </div>
            </div>
        )
    };
};

export default Outing