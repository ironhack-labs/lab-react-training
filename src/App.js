import React, { Component } from 'react';
import IdCard from './components/IdCard.js' 
import Greetings from './components/Greetings'


class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>IdCard</h1>
        <IdCard picture='https://randomuser.me/api/portraits/men/44.jpg' 
        firstName="John"
        lastName="Doe"
        gender='male'
        heigth='1.78m'
        birth='Mon Jul 13 1992'
        ></IdCard>
        <div className="App">
        

        <IdCard picture='https://randomuser.me/api/portraits/women/8.jpg' 
        firstName="Obrien"
        lastName="Delores"
        gender='female'
        heigth='1.72m'
        birth='Mon May 10 1993'
        ></IdCard>
        </div>
        <h1>Greetings</h1>
        <Greetings lang="es"></Greetings>
        <Greetings lang="fr"></Greetings>
      </div>
    );
  }
}

export default App;
