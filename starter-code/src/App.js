import React, { Component } from 'react';
import IdCard from './components/IdCard.js';
import Greetings from './components/Greetings.js';
import Random from './components/Random.js';
import BoxColor from './components/BoxColor.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <h1  className="Header">IdCard</h1>
        <IdCard image="https://www.pethappiness.net/content/images/thumbs/0000082_dog-angry-at-another-pet-in-the-home_550.jpeg"
        firstName="Doo" lastName="Bie" gender="Male" height="0'11" birthDate="24-08-2014"/>
        <IdCard image="https://media.tenor.com/images/1e3f3036163b89eeb148df7ff2ffa573/tenor.png"
        firstName="Em Do" lastName="Do Eh" gender="Female" height="0.8" birthDate="12-03-2015"/>
        <Greetings lang="de"/>
        <Greetings lang="en"/>
        <Random min="1" max="6"/>
        <Random min="1" max="100"/>
        <BoxColor red="49" green="13" blue="240"/>
        <BoxColor red="200" green="128" blue="178"/>

        <h1  className="Header">Greetings</h1>
        {/* TODO: Use the Greetings component */}
      </div>
    );
  }
}

export default App;
