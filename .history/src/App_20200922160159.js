import React from 'react';
import './App.css';
import IdCard from './IdCard.js';
import Greetings from './Greetings.js';
import Random from './Random.js';
import BoxColor from './BoxColor.js';
import CreditCard from './CreditCard.js';

function App() {
  return (
    <div className="App">
      <div className="IdCard">
        <h1>IdCard</h1>
        <IdCard
          lastName="Doe"
          firstName="John"
          gender="male"
          height={178}
          birth={new Date('1992-07-14')}
          picture="https://randomuser.me/api/portraits/men/44.jpg"
        />
        <IdCard
          lastName="Delores "
          firstName="Obrien"
          gender="female"
          height={172}
          birth={new Date('1988-05-11')}
          picture="https://randomuser.me/api/portraits/women/44.jpg"
        />
      </div>
      <div className="Greetings">
        <h1>Greetings</h1>
        <Greetings lang="de">Ludwig</Greetings>
        <Greetings lang="fr">François</Greetings>
      </div>
      <div className="Random">
        <h1>Random</h1>
        <Random min={1} max={6} />
        <Random min={1} max={100} />
      </div>
      <div className="BoxColor">
        <h1>Box Color</h1>
        <BoxColor r={255} g={0} b={0} />
        <BoxColor r={128} g={255} b={0} />
      </div>
      <div className="CreditCard">
        <h1>Credit Card</h1>
      </div>
    </div>
  );
}

export default App;
