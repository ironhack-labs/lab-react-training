import React from 'react'
import IdCard from './components/Idcard/IdCard'
import Greetings from './components/Greetings/Greetings'
import Random from './components/RandomNum/RandomNum'
import BoxColor from './components/Boxcolor/BoxColor'
import CreditCard from './components/Creditcard/CreditCard'
import Rating from './components/Rating/Rating'

function App() {

  const creditCards = 
  [{
      cardImg: "./img/visa.png",
      number: "0123456789018845",
      expirationMonth: 3,
      expirationYear: 2021,
      bank: "BNP",
      owner: "Maxence Bouret",
      bgColor: "#11aa99",
      color: "white"
    },
    {
      cardImg: "./img/master-card.svg",
      number: "0123456789010995",
      expirationMonth: 3,
      expirationYear: 2021,
      bank: "N26",
      owner: "Maxence Bouret",
      bgColor: "#eeeeee",
      color: "white"
    },
    {
      cardImg: "./img/visa.png",
      number: "0123456789016984",
      expirationMonth: 12,
      expirationYear: 2019,
      bank: "Firstname Lastname",
      owner: "Maxence Bouret",
      bgColor: "#ddbb55",
      color: "white"
    }];

  const creditCardList = creditCards.map((elem, index) => (
    <CreditCard 
      key={index}
      cardImg={elem.cardImg}
      number={elem.number}
      expirationMonth={elem.expirationMonth}
      expirationYear={elem.expirationYear}
      bank={elem.bank}
      owner={elem.owner}
      bgColor={elem.bgColor}
      color={elem.color}
    />
  ));

  return (
    <div className="App">
      <IdCard
        lastName='Doe'
        firstName='John'
        gender='male'
        height={178}
        birth='1992'
        img="https://randomuser.me/api/portraits/men/44.jpg"/>
      
      <IdCard
        lastName='Delores '
        firstName='Obrien'
        gender='female'
        height={172}
        birth="1988-05-11"
        img="https://randomuser.me/api/portraits/women/44.jpg"/>

      <Greetings lang="de">Ludwig</Greetings>
      <Greetings lang="es">Carlos</Greetings>
      <Greetings lang="en">Peter</Greetings>
      <Greetings lang="fr">JB</Greetings>

      <Random min={1} max={6}/>
      <Random min={1} max={100}/>

      <BoxColor r={255} g={0} b={0} />
      <BoxColor r={128} g={255} b={0} />

      {creditCardList}

      <Rating>0</Rating>
      <Rating>1.49</Rating>
      <Rating>1.5</Rating>
      <Rating>3</Rating>
      <Rating>4</Rating>
      <Rating>5</Rating>
    </div>
  );
}

export default App;
