import React, { Component } from 'react';
import IdCard from './components/IdCard';
// import Greetings from './components/Greetings';
// import Random from './components/Random';
// import BoxColor from './components/BoxColor';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1 className="titles">IdCard</h1>
        {/* TODO: Use the IdCard component */}
        <IdCard
        lastName="Doe"
        firstName="John"
        gender="male"
        height={178}
        birth={new Date("1992-07-14")}
        picture="https://randomuser.me/api/portraits/men/44.jpg"/>
        <IdCard lastName="Delores"
        firstName="Obrien"
        gender="female"
        height={72}
        birth={new Date("1988-05-11")}
        picture="https://randomuser.me/api/portraits/women/44.jpg"/>
        <h1 className="titles">Greetings</h1>
        {/* TODO: Use the Greetings component */}
      </div>
    );
  }
}

export default App;
