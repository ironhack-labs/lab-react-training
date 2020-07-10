import React from 'react';
import './App.css';

import IdCard from './components/IdCard';
import Greetings from './components/Greetings';
import Random from './components/Random';
import BoxColor from './components/BoxColor';
import CreditCard from './components/CreditCard';

function App() {
  const idCard = [
    {
      lastName: 'Doe',
      firstName: 'John',
      gender: 'male',
      height: 178 / 100 + ' m',
      birth: new Date('1992-07-14').toISOString().slice(0, 10),
      picture: 'https://randomuser.me/api/portraits/men/44.jpg',
    },
    {
      lastName: 'Delores',
      firstName: 'Obrien',
      gender: 'female',
      height: 172 / 100 + ' m',
      birth: new Date('1988-05-11').toISOString().slice(0, 10),
      picture: 'https://randomuser.me/api/portraits/women/44.jpg',
    },
  ];

  const idCardMap = idCard.map((card) => (
    <IdCard
      picture={card.picture}
      firstName={card.firstName}
      lastName={card.lastName}
      gender={card.gender}
      height={card.height}
      birth={card.birth}
    />
  ));

  const creditCard = [
    {
      type: 'Visa',
      number: '0123456789018845',
      expirationMonth: 3,
      expirationYear: 2021,
      bank: 'BNP',
      owner: 'Maxence Bouret',
      bgColor: '#11aa99',
      color: 'white',
    },
    {
      type: 'Master Card',
      number: '0123456789010995',
      expirationMonth: 3,
      expirationYear: 2021,
      bank: 'N26',
      owner: 'Maxence Bouret',
      bgColor: '#eeeeee',
      color: '#222222',
    },
    {
      type: 'Visa',
      number: '0123456789016984',
      expirationMonth: 12,
      expirationYear: 2019,
      bank: 'Name of the Bank',
      owner: 'Firstname Lastname',
      bgColor: '#ddbb55',
      color: 'white',
    },
  ];

  const creditCardMap = creditCard.map((card) => (
    <CreditCard
      type={card.type}
      number={card.number}
      expirationMonth={card.expirationMonth}
      expirationYear={card.expirationYear}
      bank={card.bank}
      owner={card.owner}
      bgColor={card.bgColor}
      color={card.color}
    />
  ));

  return (
    <div className="App">
      <h1>IdCard</h1>
      {idCardMap}

      <h1>Greetings</h1>
      <Greetings lang="de">Ludwig</Greetings>
      <Greetings lang="fr">François</Greetings>

      <h1>Random</h1>
      <Random min={1} max={6} />
      <Random min={1} max={100} />

      <h1>BoxColor</h1>
      <BoxColor r={255} g={0} b={0} />
      <BoxColor r={128} g={255} b={0} />

      <h1>CreditCard</h1>
      <div className="credit-box">{creditCardMap}</div>
    </div>
  );
}

export default App;
