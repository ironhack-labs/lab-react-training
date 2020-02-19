import React, { Component } from 'react';
import Card from './componnents/Card'
import Greatings from './componnents/Greatings';
import Random from './componnents/Random'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>IdCard</h1>
        <Card img="https://randomuser.me/api/portraits/men/44.jpg"
              lastName="Doe"
              firstName="John"
              gender="Male"
              height={178}
              birth={new Date("1992-07-04")}  />
              
              <Card img="https://randomuser.me/api/portraits/women/8.jpg"
              lastName="Obrien"
              firstName="Delores"
              gender="Female"
              height={172}
              birth={new Date("1993-10-04")}  />
        <h1>Greetings</h1>
        <Greatings idioma="de"> Ricardo</Greatings>
        <Greatings idioma="fr"> Rish</Greatings>
        <Greatings idioma="en"> Ricardo</Greatings>
        <Greatings idioma="es"> Risha</Greatings>


        <h1>Random</h1>
        <Random min={1} max={6}/>
        <Random min={4} max={100}/>       
        <h1></h1> 


    </div>
    );
  }
}

export default App;
