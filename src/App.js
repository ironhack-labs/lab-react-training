import React from 'react';
import './App.css';
import IdCard from './components/IdCard/IdCard';
import Greetings from './components/Greetings/Greetings';
import Random from "./components/Random/Random";
import BoxColor from "./components/BoxColor/BoxColor"
import CreditCard from "./components/CreditCard/CreditCard"

function App() {

  return (
    <div className="App">
      <h2>Interation 1</h2>
      <h1>IdCard</h1>
      <IdCard
        picture="https://randomuser.me/api/portraits/men/44.jpg"
        lastName="Doe"
        firstName="John"
        gender="male"
        height={178}
        birth={'1992-07-14'}
        
      />
      <IdCard
        lastName="Delores "
        firstName="Obrien"
        gender="female"
        height={172}
        birth={'1988-05-11'}
        picture="https://randomuser.me/api/portraits/women/44.jpg"
      />

      <h2>Iteration 2</h2>

      <Greetings lang="es">Ludwig</Greetings>
      <Greetings lang="de">François</Greetings>

      <h2>Iteration 3</h2>

      <Random min={1} max={6}/>
      <Random min={1} max={100}/>


      <BoxColor r={255} g={0} b={0} />
      <BoxColor r={128} g={255} b={0} />


      
    </div>
  );
}

export default App;
