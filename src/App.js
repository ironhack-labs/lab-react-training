import React, { Component } from 'react';
import './App.css'
import Card from './components/card/Card'
import Greeting from './components/greeting/Greeting'
import Random from './components/random/Random'
import BoxColor from './components/boxcolor/BoxColor'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>IdCard</h1>
        <Card
          lastName='Doe'
          firstName='John'
          gender='male'
          height={178}
          birth={new Date("1992-07-14")}
          picture="https://randomuser.me/api/portraits/men/44.jpg"
        />
        <Card
          lastName='Delores '
          firstName='Obrien'
          gender='female'
          height={172}
          birth={new Date("1988-05-11")}
          picture="https://randomuser.me/api/portraits/women/44.jpg"
        />
        <h1>Greetings</h1>
        <Greeting lang="de">Ludwig</Greeting>
        <Greeting lang="fr">François</Greeting>
        <h1>Random</h1>
        <Random min={1} max={6}/>
        <Random min={1} max={100}/>
        <h1>BoxColor</h1>
        <BoxColor r={256} g={0} b={0} fontColor="white"/>
        <BoxColor r={128} g={255} b={0} fontColor="black"/>
      </div>
    );
  }
}

export default App;
