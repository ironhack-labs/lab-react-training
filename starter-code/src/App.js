import React, { Component } from 'react';
import IdCard from './components/IdCard'
import Greetings from './components/Greetings';
import Random from './components/Random';
import BoxColor from './components/BoxColor';
import { CreditCard } from './components/CreditCard';

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
          birth={`${(new Date("1992-07-14")).toDateString()}`}
          picture="https://randomuser.me/api/portraits/men/44.jpg"
        />

        <IdCard 
          lastName='Delores '
          firstName='Obrien'
          gender='female'
          height={172}
          birth={`${(new Date("1988-05-11")).toDateString()}`}
          picture="https://randomuser.me/api/portraits/women/44.jpg"
        />

        <h1>Greetings</h1>
        <Greetings lang="fr">Carlos</Greetings>
        <Greetings lang="en">Francisco</Greetings>
        
        <h1>Random</h1>
        <Random min={5} max={10} />
        <Random min={10} max={100} />

        <h1>Box Color</h1>
        <BoxColor r={255} g={0} b={0}/>
        <BoxColor r={128} g={255} b={0}/>

        <h1>Credit Card</h1>
        <CreditCard bg="#11aa99">

        </CreditCard>
      </div>
    );
  }
}

export default App;
