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
      method: "get",
      url: "https://www.potterapi.com/v1/characters",
      dataResponse: "json",
      params: {
        key: "$2a$10$QTTp9tiCR8CNBsj3iA5IR.jJhfdT2FKcAnZsP2gYYGaI27KsGEVwy",
      },
    }).then(response => {
      console.log(response.data);

      this.setState({
        HPCharacters: response.data,
      });
    });
  }

  /*do got api https://anapioficeandfire.com/*/

  render() {
    return (
      <div className='wrapper'>
        <h1>Game of Potter</h1>
      </div>
    );
  }
}

export default App;
