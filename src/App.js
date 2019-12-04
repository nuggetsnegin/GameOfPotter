import React, { Component } from "react";
import './styles/App.css';
import axios from "axios";

class App extends Component {
  constructor() {
    super();
    this.state = {
      HPCharacters: [],
      GoTCharacters: [],
    };
  }

  componentDidMount() {
    axios({
      method: 'get',
      url: 'https://anapioficeandfire.com/api/characters?pageSize=50',
      dataResponse: 'json',
    }).then(response => {
      console.log(response.data);

      this.setState({
        GoTCharacters: response.data,
      });

    })
    axios({
      method: 'get',
      url: 'https://www.potterapi.com/v1/characters',
      dataResponse: 'json',
      params: {
        key: '$2a$10$F5zeX2iHFskAgcz4ovhm4.BUaurcM.C9u5ncrkPda4RSBOgdTO8JK',
      },
    }).then(response => {
      console.log(response.data);

      this.setState({
        HPCharacters: response.data,
      });
    });
  }

  render() {
    return (
      <div className='wrapper'>
        <h1>Game of Potter</h1>
        <p>Test test test</p>
      </div>
    );
  }
}

export default App;
