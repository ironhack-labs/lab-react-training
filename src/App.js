import React from 'react';
import logo from './logo.svg';
import './App.css';

import Greetings from './components/Greetings';
import Random from './components/Random';
import BoxColor from './components/BoxColor';
import CreditCard from './components/CreditCard';

function IdCard(props) {
  return (
    <div className="Card">
      <img src={props.picture} alt="picture" />
      <p>First name: {props.firstName}</p>
      <p>Last name: {props.lastName}</p>
      <p>Gender: {props.gender}</p>
      <p>Height: {props.height}</p>
      <p>Birth: {props.birth}</p>
    </div>
  );
}

const people = [
  {
    firstName: 'John',
    lastName: 'Doe',
    gender: 'male',
    height: 1.78,
    birth: new Date('1992-07-14').toString(),
    picture: 'https://randomuser.me/api/portraits/men/44.jpg',
  },
  {
    firstName: 'Obrien',
    lastName: 'Delores',
    gender: 'female',
    height: 1.72,
    birth: new Date('1993-05-11').toString(),
    picture: 'https://randomuser.me/api/portraits/women/8.jpg',
  },
];

const cards = [
  {
  type:"Visa",
  number:"0123456789018845".slice(-4),
  expirationMonth:3,
  expirationYear:2021,
  bank:"BNP",
  owner:"Maxence Bouret",
  bgColor:"#11aa99",
  color:"white"
  },
  {
  type:"Master Card",
  number:"0123456789010995".slice(-4),
  expirationMonth:3,
  expirationYear:2021,
  bank:"N26",
  owner:"Maxence Bouret",
  bgColor:"#eeeeee",
  color:"#222222"
  },
  {
  type:"Visa",
  number:"0123456789016984".slice(-4),
  expirationMonth:12,
  expirationYear:2019,
  bank:"Name of the Bank",
  owner:"Firstname Lastname",
  bgColor:"#ddbb55",
  color:"white"
  },
];

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>IdCard</h2>
        {people.map((person) => (
          <IdCard
            picture={person.picture}
            firstName={person.firstName}
            lastName={person.lastName}
            gender={person.gender}
            height={person.height}
            birth={person.birth}
          />
        ))}
        <h2>Greetings</h2>
        <Greetings lang="de">Ludwig</Greetings>
        <Greetings lang="fr">François</Greetings>

        <h2>Random</h2>
        Random value between 1 and 6 => <Random min={1} max={6} />
        <br />
        Random value between 1 and 100 => <Random min={1} max={100} />

        <h2>BoxColor</h2>
        <BoxColor r={255} g={0} b={0} /><br />
        <BoxColor r={128} g={255} b={0} />

        <h2>CreditCard</h2>
        <div className="cards">
        {cards.map((card) => (
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
        ))}
        </div>
      </header>
    </div>
  );
}

export default App;
