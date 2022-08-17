import React from 'react';
import './App.css';
import Greetings from './components/Greetings';
import IdCard from './components/IdCard';
import Random from './components/Random';
import BoxColor from './components/BoxColor';


function App() {
  const card = [
    {
      lastName: 'Doe',
      firstName: 'John',
      gender: 'male',
      height: 178,
      birth: new Date('1992-07-14'),
      picture: 'https://randomuser.me/api/portraits/men/44.jpg',
    },
    {
      lastName: 'Delores ',
      firstName: 'Obrien',
      gender: 'female',
      height: 172,
      birth: new Date('1988-05-11'),
      picture: 'https://randomuser.me/api/portraits/women/44.jpg',
    },
  ];

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

  const cards = card.map((thisCard) => {
    return (
      <IdCard
        key={thisCard.lastName}
        lastName={thisCard.lastName}
        firstName={thisCard.firstName}
        gender={thisCard.gender}
        height={thisCard.height}
        birth={thisCard.birth.toLocaleDateString()}
        picture={thisCard.picture}
      />
    );
  });

  const creditCards = creditCard.map((thisCC) => {
    return (
      <CreditCard
        key={thisCC.number}
        type={thisCC.type}
        number={thisCC.number}
        expirationMonth={thisCC.expirationMonth}
        expirationYear={thisCC.expirationYear}
        bank={thisCC.bank}
        owner={thisCC.owner}
        bgColor={thisCC.bgColor}
        color={thisCC.color}
      />
    );
  });

  return (
    <div className="app">
      <h1>IdCards</h1>
      {cards}
      <h1>Greetings</h1>
      <Greetings lang="pt">Lourenço</Greetings>
      <Greetings lang="es">Juan</Greetings>
      <Greetings>Jack</Greetings>
      <h1>Random</h1>
      <Random min={1} max={6} />
      <Random min={1} max={100} />
      <h1>BoxColor</h1>
      <BoxColor r={255} g={0} b={0} />
      <BoxColor r={128} g={255} b={0} />
     
    </div>
  );
}

export default App;