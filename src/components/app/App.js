import React from 'react';
import { IdCard } from '../idCard/IdCard';
import { Greetings } from '../Greetings';
import { Random } from '../Random';
import { BoxColor } from '../BoxColor';
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
    </div>
  );
}

export default App;
