import React, { Component } from 'react';
import IdCard from "./components/id-card/id-card"
import Greetings from "./components/greetings/greetings"
import Random from "./components/random/random"

class App extends Component {
  render() {
    return (
      <div>

        <h1>IdCard</h1>
        <IdCard 
          picture="https://randomuser.me/api/portraits/men/44.jpg"
          firstName='John'
          lastName='Doe'
          gender='male'
          height={178}
          birth={new Date("1992-07-14")}
        />
        <IdCard 
          picture="https://randomuser.me/api/portraits/women/44.jpg"
          firstName='Obrien'
          lastName='Delores'
          gender='female'
          height={172}
          birth={new Date("1988-05-11")}
        />


        <h1>Greetings</h1>
        <Greetings lang="de">Ludwig</Greetings>
        <Greetings lang="fr">François</Greetings>

        <h1>Random</h1>
        <Random min={1} max={6}/>
        <Random min={1} max={100}/>

      </div>
    );
  }
}

export default App;