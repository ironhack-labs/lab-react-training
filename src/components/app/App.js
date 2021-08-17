import React from 'react';
import { IdCard } from '../idCard/IdCard';
import { Greetings } from '../Greetings';
import { Random } from '../Random';
import { BoxColor } from '../BoxColor';
import { CreditCard } from '../creditCard/CreditCard';
import { Rating } from '../Rating';
import './App.css';

function App() {
  return (
    <div className="App">
      <IdCard />
      <Greetings lang="de" children="Ludwig" />
      <Random />
      <h1>Box Color</h1>
      <BoxColor r={255} g={0} b={0} />
      <BoxColor r={128} g={255} b={0} />
      <CreditCard />
      <Rating />
    </div>
  );
}

export default App;
