import React from 'react';
import './App.css';
import IdCard from './components/IdCard'
import Greetings from './components/Greetings'
import Random from './components/Random'
import BoxColor from './components/BoxColor';
import CreditCard from './components/CreditCard';


function App() {

  return (
    <div className="App">
      <h1>IdCard</h1>
      <IdCard
        lastName='Delores'
        firstName='Obrien'
        gender='female'
        height={172}
        birth={new Date("1988-05-11").toDateString()}
        picture="https://randomuser.me/api/portraits/women/44.jpg"
      />

      <h1>Greetings</h1>
      <Greetings lang='es'>José</Greetings>
      <Greetings lang='de'>Andrea</Greetings>
      <Greetings lang='en'>Andrew</Greetings>
      
      <h1>Random</h1>
      <Random min={9} max={99}/>
      <Random min={11} max={150}/>

      <h1>BoxColor</h1>
      <BoxColor r={200} g={76} b={95}/>

      <h1>CreditCard</h1>
      <CreditCard
        type="Visa"
        number="0123456789018845"
        expirationMonth={3}
        expirationYear={2021}
        bank="BNP"
        owner="Maxence Bouret"
        bgColor="#11aa99"
        color="white" 
        />

    </div>
  );
}

export default App;
