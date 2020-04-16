import React, { Component } from 'react';
import IdCard from './IdCard'
import Greetings from './Greetings'
import "./index.css"

class App extends Component {
  // const a = 10
  render() {
    // const b = 20
    return (
      <div className="App">
        <h1>IdCard</h1>
        <div className="first-square">
        <IdCard
          lastName='Doe'
          firstName='John'
          gender='male'
          height={178}
          birth={new Date("1992-07-14")}
          picture="https://randomuser.me/api/portraits/men/44.jpg"
        />
        </div>
        <div className="second-square">
        <IdCard
          lastName='Delores'
          firstName='Obrien'
          gender='female'
          height={172}
          birth={new Date("1988-05-11")}
          picture="https://randomuser.me/api/portraits/women/44.jpg"
        />
        </div>
        
        {/* Check language: de, en, es, fr */}
        <h1>Greetings</h1>
        <div className="first-square">
        <Greetings 
        lang="Hallo"
        children="Ludwig"
        />
        </div>
        <div className="first-square">
        <Greetings 
        lang="Bonjour"
        children="François"
        />
        </div>
      </div>
    );
  }
}

export default App;
