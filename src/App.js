import React, { Component } from 'react';
import IdCard from './components/IdCard';
import Greetings from './components/Greetings';
import Random from './components/Random';
import BoxColor from './components/BoxColor';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1 className="titles">IdCard</h1>
        <IdCard
        lastName="Doe"
        firstName="John"
        gender="male"
        height={178}
        birth={new Date("1992-07-14")}
        picture="https://randomuser.me/api/portraits/men/44.jpg"/>
        <IdCard lastName="Delores"
        firstName="Obrien"
        gender="female"
        height={72}
        birth={new Date("1988-05-11")}
        picture="https://randomuser.me/api/portraits/women/44.jpg"/>

        <h1 className="titles">Greetings</h1>
        <Greetings lang="es">Carles</Greetings>
        <Greetings lang="en">Susi</Greetings>
        <Greetings lang="de">Berni</Greetings>

        <h1 className="titles">Random Number</h1>
        <Random min={1} max={6}/>
        <Random min={1} max={100}/>

        <h1 className="titles">Box Color</h1>
        <div className="flag">
          <BoxColor r={255} g={255} b={0} />
          <BoxColor r={255} g={0} b={0} />
          <BoxColor r={255} g={255} b={0} />
          <BoxColor r={255} g={0} b={0} />
          <BoxColor r={255} g={255} b={0} />
          <BoxColor r={255} g={0} b={0} />
          <BoxColor r={255} g={255} b={0} />
          <BoxColor r={255} g={0} b={0} />
          <BoxColor r={255} g={255} b={0} />
        </div>
        


      </div>
    );
  }
}

export default App;
