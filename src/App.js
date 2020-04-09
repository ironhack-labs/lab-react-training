import React, { Component } from 'react';
import IdCard from './components/IdCard/IdCard.js'
import Greetings from './components/greetings/Greetings.js'
import Random from './components/random/Random'
import BoxColor from './components/boxcolor/BoxColor.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>IdCard</h1>
        <IdCard
          lastName='Doe'
          firstName='John'
          gender='male'
          height={178}
          birth={new Date("1992-07-14")}
          picture="https://randomuser.me/api/portraits/men/44.jpg"
        />

      <IdCard
        lastName='Delores '
        firstName='Obrien'
        gender='female'
        height={172}
        birth={new Date("1988-05-11")}
        picture="https://randomuser.me/api/portraits/women/44.jpg"
      />

        <h1>Greetings</h1>
        
        <Greetings lang="de">Ludwig</Greetings>
        <Greetings lang="fr">François</Greetings>

        <Random min={1} max={6}/>
        <Random min={1} max={100}/>

        <BoxColor r={255} g={0} b={0} />
        <BoxColor r={128} g={255} b={0} />

      </div>
    );
  }
}

export default App;
