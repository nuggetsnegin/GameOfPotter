import React, { Component } from 'react';
import axios from 'axios';

class Outing extends Component {

    // constructor() {
    //     super();
    //     this.state = {
    //         restaurants: response.data.restaurants
    //     };
    // }

    componentDidMount() {
        axios({
            url: 'https://developers.zomato.com/api/v2.1/search?entity_id=89&entity_type=city',
            method:'GET',
            dataResponse: 'json',
            headers: {
                "user-key": 'a43d2ac63efba3212ecc9c702a40317c',
            }
        }).then((response) => {
            console.log(response.data.restaurants)  
        });
    
        // this.setState({
        //     restaurants: response.data.restaurants[0].restaurant,
        // })
    }


    render() {
        return (
         <div>
             <p>
                 
             </p>
         </div>
        );
    };
};

export default Outing