import React, { useReducer } from 'react';
// import logo from './logo.svg';
import './App.css';
import IdCard from './IdCard';
import Greetings from './Greetings';
import Random from './Random';
import BoxColour from './BoxColour';
import CreditCard from './CreditCard';
import Stars from './Stars';

function App() {
  const peter = {
    lastName: 'Smith',
    firstName: 'Peter',
    gender: 'male',
    height: 171,
    birth: '1987-01-01',
    picture: 'https://randomuser.me/api/portraits/men/44.jpg',
  };
  const it2 = {
    lang: 'de',
  };
  return (
    <div className="App">
      <header className="App-header">
        <h1>ID CARD</h1>
        <IdCard
          lastName={peter.lastName}
          firstName={peter.firstName}
          gender={peter.gender}
          height={peter.height}
          birth={peter.birth}
          picture={peter.picture}
        />
        <h1>GREETINGS</h1>
        <Greetings lang={it2.lang}>Simon</Greetings>
        <h1>Random</h1>
        <Random min={1} max={100} />
        <h1>BOX COLOUR</h1>
        <BoxColour r={12} g={233} b={145} />
        <BoxColour r={222} g={2} b={100} />
        <h1>CREDIT CARD</h1>
        <CreditCard
          type="Visa"
          number="123456789101112"
          expirationMonth={2}
          expirationYear={12}
          bank="Commerzbank"
          bgColor="purple"
          color="green"
          firstName="Bert"
          lastName="Dingle"
        />
        <h1>RATING</h1>
        <Stars>2</Stars>
      </header>
    </div>
  );
}

export default App;
