import React, { Component } from 'react';
import Card from './Components/Card.js';
import Greetings from './Components/Greetings.js';
import Random from './Components/Random.js';


class App extends Component {
  state = {
    users: [{
      lastName: "Veras",
      firstName: "Camila",
      gender: "female",
      height: 1.70,
      birth: "1989-05-17",
      picture: "https://randomuser.me/api/portraits/women/63.jpg"
    },

    {
      lastName: "Dowsley",
      firstName: "Isabela",
      gender: "female",
      height: 1.57,
      birth: "1988-02-16",
      picture: "https://randomuser.me/api/portraits/women/32.jpg"
    }],
    greetings: [{
      lang: "fr",
      children: "Bonjour François"
    },
    {
      lang: "de",
      children: "Hallo Ludwig"
    }
    ],
    randoms: [{
      min: 1,
      max: 6,
      random: Number,
    },
    {
      min: 1,
      max: 100,
      random: Number,
    }
    ]
  }

  randomNumber() {
    let max = this.state.max
    let min = this.state.min
    let randomNumber = Math.floor(Math.random() * (max - min + 1)) + min
    this.setState({
      random: randomNumber
    })
  }





  render() {
    return (
      <div className="App">
        <h1>Card</h1>
        {this.state.users.map((user, index) => {
          return (<Card key={index} firstName={user.firstName} lastName={user.lastName} gender={user.gender} height={user.height} birth={user.birth} picture={user.picture} />)
        })}
        <h1>Greetings</h1>
        {this.state.greetings.map((greeting, index) => {
          return (<Greetings key={index} lang={greeting.lang} children={greeting.children} />)
        })}
        {this.state.randoms.map((random, index) => {

          return (<Random key={index} min={random.min} max={random.max} random={random.random} />)
        })}
      </div>
    );
  }
}

export default App;
