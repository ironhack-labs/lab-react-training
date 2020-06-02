import React, { Component } from 'react';
// import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.css';
import _ from 'lodash';
import './App.css';
import IdCard from './components/IdCard';
import Greetings from './components/Greetings';
import Random from './components/Random';
import BoxColor from './components/BoxColor';

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
        {/* <BoxColor red="red"></BoxColor> */}
        <BoxColor r={255} g={128} b={255}></BoxColor>
      </div>
    );
  }
}

// just a string birth="1992-07-14"
// a date or number 

export default App;
