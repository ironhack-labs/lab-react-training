import React, { Component } from 'react';
import BoxColor from "./components/BoxColor"
import CreditCard from "./components/CreditCard"
import Driver from "./components/DriverCard"
import Greeatings from "./components/Greetings"
import IdCard from "./components/IdCart"
import Random from "./components/Random"
import Rating from "./components/Rating"
import Like from "./components/LikeButton"

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>IdCard</h1>
        {/* TODO: Use the IdCard component */}

        <h1>Greetings</h1>
        {/* TODO: Use the Greetings component */}
      </div>
    );
  }
}

export default App;
