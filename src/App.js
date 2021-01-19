import React from 'react';
import './App.css';
import {IdCard} from './components/IdCard/IdCard';
import {Greetings} from './components/Greetings/Greetings';
import {Random} from './components/Random/Random';
import {BoxColor} from './components/BoxColor/BoxColor';

function App() {
  return (
    <React.Fragment>
      <h1>Id Cards</h1>
        <IdCard image="https://randomuser.me/api/portraits/men/44.jpg" firstName="John" lastName="Doe" gender="male" height={178 + 'm'} birthday={ new Date("1992-07-14").toString().slice(0, 15) } />
        <IdCard image="https://randomuser.me/api/portraits/women/44.jpg" firstName="Daina" lastName="Slezaite" gender="female" height={172 + 'm'} birthday={ new Date("1996-06-13").toString().slice(0, 15) } />
      <h1>Greetings</h1>
        <Greetings lang="de">Ludwig</Greetings>
        <Greetings lang="fr">Michelle</Greetings>
      <h1>Random</h1>
        <Random min={1} max={6} />
        <Random min={1} max={100} />
      <h1>BoxColor</h1>
        <BoxColor r={254} g={127} b={156} />
        <BoxColor r={177} g={156} b={217} />
    </React.Fragment>

  );
}

export default App;
