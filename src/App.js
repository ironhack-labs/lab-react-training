import React, { Component } from 'react';

import IdCard from "./components/Idcard.js"
import Greetings from "./components/Greetings.js"
import Random from "./components/Random.js"
import BoxColor from "./components/Random.js"



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
    <br/>
    <IdCard 
          lastName='Dolores'
          firstName='Obrien'
          gender='female'
          height={172}
          birth={new Date("1993-05-10")}
          picture="https://randomuser.me/api/portraits/women/44.jpg"
    />
     
    <h1>Greetings</h1>
    <Greetings lang="de">Ludwig</Greetings>
    <Greetings lang="fr">François</Greetings>
      
    <h1>Random</h1>
    <Random min="1" max="6" />
    <Random min="1" max="100" />

    <h1>Box Color</h1>





      </div>
    );
  }
}

export default App;
