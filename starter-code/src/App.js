import React, { Component } from 'react';
import IdCard from './IdCard'
import Greetings from './Greetings'
import Random from './Random'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>IdCard</h1>
        <IdCard/>

        <h1>Greetings</h1>
       
        <Greetings lang={"Hallo"}>Ludwig</Greetings>
        <Greetings lang={"Bounjour"}>François</Greetings>
        <Greetings lang={"Hello"}>Smith</Greetings>
        <Greetings lang={"Hola"}>Garcia</Greetings>
        
        <h1>Random</h1>
        <Random min={1} max={6}/>
        <Random min={1} max={100}/>

      </div>
    );
  }
}

export default App;