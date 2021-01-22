import React from 'react';
import './App.css';
import './Box.css';
import IdCard from './idcard/IdCard';
import Greetings from './greetings/Greetings';
import Random from './random/Random';
import BoxColor from './boxcolor/BoxColor';

function App() {
  return (
    <div className="App">
      <h1>IdCard</h1>
      <IdCard picture="https://randomuser.me/api/portraits/men/44.jpg" firstName="John" lastName="Doe" gender="male" height={178} birth={new Date("1992-7-14")} />
      <IdCard picture="https://randomuser.me/api/portraits/women/44.jpg" firstName="Deloris" lastName="Obrien" gender="female" height={172} birth={new Date("1988-5-11")} />

      <h1>Greetings</h1>
      <Greetings lang="de">Ludwig</Greetings>
      <Greetings lang="fr">François</Greetings>

      <h1>Random</h1>
      <Random min={1} max={6}/>
      <Random min={1} max={100} />

      <h1>Box Color</h1>
      <BoxColor r={255} g={0} b={0} />
      <BoxColor r={128} g={255} b={0} />
    </div>
  );
}

export default App;
