import React, { Component } from 'react';
// import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import IdCard from './components/IdCard';
import Greetings from './components/Greetings';
import Random from './components/Random';

// App.js
class App extends Component {

  render() {
    // ...
    return (
      <div>
        <IdCard
          lastName="Obrien"
          firstName="Dolores"
          gender="female"
          height={172}
          birth={new Date("1988-05-11")}
          picture="https://randomuser.me/api/portraits/women/44.jpg">
        </IdCard>
        <Greetings lang="fr">
          François
        </Greetings>
        <Random min={2} max={6}></Random>
      </div>
    );
  }
}

// just a string birth="1992-07-14"
// a date or number 

export default App;
