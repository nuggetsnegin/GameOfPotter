import React, { Component } from 'react';
import axios from 'axios';

class Outing extends Component {

    constructor() {
        super();
        this.state = {
            suggestions: []
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
            // console.log(response.data.restaurants)
            response.data.restaurants.forEach(restaurant => {
                const restaurantsObject = {
                    name: restaurant.name,
                    image: restaurant.url,
                    cuisine: restaurant.cuisines,
                }
                // console.log(restaurant)
                this.setState({
                    suggestions: [...this.state.suggestions, restaurantsObject],
                });
            });
        });
    }


    render() {
        return(
            <div className='wrapper'>
                <h2>Outing Suggestions</h2>
                <div className='outingSuggestions'>
                    {this.state.suggestions.map( (restaurant) => {
                        return (
                            <div>
                                <h3>{restaurant.name}</h3>
                                <img src={restaurant.url} alt=""/>
                                <h3>{restaurant.cuisines}</h3>
                                {/* <h4>{options.user_rating.response.data.restaurants}</h4> */}
                            </div>
                        );
                    })}
                </div>
            </div>
        )
    };
};

export default Outing