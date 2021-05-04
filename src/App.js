import React from 'react';
import './App.css';

import IdCard from './IdCard/IdCard.js';
import './IdCard/IdCard.css';

import Greetings from './Greetings/Greetings.js';
import './Greetings/Greetings.css';

import Random from './Random/Random.js';
import './Random/Random.css';

import BoxColor from './BoxColor/BoxColor.js';
import './BoxColor/BoxColor.css';

function App() {
  return (
    <div className="App">
      <IdCard
        lastName="Delores"
        firstName="Obrien"
        gender="female"
        height={172}
        birth="1988-05-11"
        picture="https://randomuser.me/api/portraits/women/44.jpg"
      />
      <Greetings lang="de">Ludwig</Greetings>
      <Greetings lang="fr">François</Greetings>
      <Random min={1} max={6} />
      <BoxColor r={255} g={0} b={0} />
    </div>
  );
}

export default App;
