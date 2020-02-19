import React, { Component } from 'react';
import IdCard from './components/Idcards'
import Greetings from './components/Greetings'
import Random from './components/Random'
import BoxColor from './components/Boxcolors'

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
        birth={new Date("1993-05-11")}
        picture="https://randomuser.me/api/portraits/women/44.jpg"
      />
      {/* Greetings*/}
       <h1>Greetings</h1>
      <Greetings lang="de">Ludwig</Greetings>
      <Greetings lang="fr">François</Greetings>

        <h1>Random</h1>
      <Random min={1} max={5}/>
      <Random min={1} max={100}/>

        <h1>BoxColor</h1>
      <BoxColor r={255} g={0} b={0} />
      <BoxColor r={128} g={255} b={0} />

   
      </div>
    );
  }
}

export default App;
