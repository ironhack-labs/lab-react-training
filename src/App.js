import React from 'react';
import './App.css';
import IdCard from './components/IdCard';
import pic1 from './assets/images/dahlia.jpg';
import pic2 from './assets/images/flo.jpg';

import Random from './components/Random';
import BoxColor from './components/BoxColor';
import CreditCard from './components/CreditCard';
import Rating from './components/Rating';


const people = [
  {
    id: "12345",
    lastName: "Jublot",
    firstName: "Dahlia",
    gender: "so far, undefined",
    height: "80",
    birth: "25.06.2020",
    picture: pic1,
    lang: "en"
  },
  {
    id: "67891",
    lastName: "Jublot",
    firstName: "Florian",
    gender: "male",
    height: "178",
    birth: "16.11.1990",
    picture: pic2,
    lang: "fr"
  }
]

const creditCards = [
  {
    type: "Visa",
    number: "0123456789018845",
    expirationMonth: 3,
    expirationYear: 2021,
    bank: "BNP",
    owner: "Maxence Bouret",
    bgColor: "#11aa99",
    color: "white"
  },
  {
    type: "Master Card",
    number: "0123456789010995",
    expirationMonth: 3,
    expirationYear: 2021,
    bank: "N26",
    owner: "Maxence Bouret",
    bgColor: "#eeeeee",
    color: "222222"
  },
  {
    type: "Visa",
    number: "0123456789016984",
    expirationMonth: 12,
    expirationYear: 2019,
    bank: "Name of the Bank",
    owner: "Firstname Lastname",
    bgColor: "#ddbb55",
    color: "white"
  }
]

function App() {
  return (
    <div>
      <header>
        <p>Hello! This is a small react app just for learning. </p>

        { people.map( (p) => 
            <IdCard key={p.id} person={p} />
        ) }           

        <p> Now some Random stuff...</p>
        <Random min={Math.random()} max={Math.floor(Math.random() * 100) + 1}/>

        <div className="boxes-color">
          <BoxColor r={'234'} g={'222'} b={'111'} />
          <BoxColor r={'207'} g={'222'} b={'111'} />
          <BoxColor r={'207'} g={'222'} b={'999'} />
          <BoxColor r={'333'} g={'222'} b={'333'} />
        </div>

        <p> Now some credit cards...</p>
        <div className="list-credit-cards">
          { creditCards.map( (card) => 
              <CreditCard key={card.id} card={card} />
          ) }  
        </div>

        <p>Rating component!</p>
        <div className="rating">
          <Rating children='0'/>
          <Rating children='1.49'/>
          <Rating children='1.5'/>
          <Rating children='3'/>
          <Rating children='4'/>
          <Rating children='5'/>
        </div>
      </header>
    </div>
  );
}

export default App;
