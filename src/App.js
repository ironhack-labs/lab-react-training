import React from 'react';
import IdCard from './components/IdCard';
import Greetings from './components/Greetings';
import RandomNumber from './components/RandomNumber';
import BoxColor from './components/BoxColor';
import CreditCard from './components/CreditCard';

function App() {

  const iDCardData = [
    {
      lastName: "Doe",
      firstName: "John",
      gender: "male",
      height: 178,
      date: (new Date('1992-07-14')),
      picture: "https://randomuser.me/api/portraits/men/44.jpg"
    },
    {
      lastName: "Dolores",
      firstName: "Obrien",
      gender: "female",
      height: 170,
      date: (new Date('1990-07-14')),
      picture: "https://randomuser.me/api/portraits/women/44.jpg"
    }
  ]
  
  const renderIdCard = iDCardData.map(user => (
    <IdCard 
      lastName={user.lastName} 
      firstName={user.firstName} 
      gender={user.gender}
      height={user.height}
      birth={user.date}  
      picture={user.picture}
      />
  ));

  const random = {
    num: (num) => (Math.floor(Math.random() * num)),
    color: () => (Math.floor(Math.random() * 256)),
    lang: () => {
      const diffLang = ['en', 'es', 'de', 'fr']
      return diffLang[Math.floor(Math.random() * diffLang.length)]
    }
  }
   
  const creditCardData = [
    {
      type: "/img/master-card.svg",
      number: 123456789010995,
      expirationMonth: random.num(13),
      expirationYear: 2021,
      bank: "N26",
      owner: "John Doe",
      bgColor: `rgb(${random.color()},${random.color()},${random.color()})`,
      color: 'white'
    },
    {
      type: "/img/visa.png",
      number: 123963817010995,
      expirationMonth: random.num(13),
      expirationYear: 2025,
      bank: "BNP",
      owner: "Waskaman Doe",
      bgColor: `rgb(${random.color()},${random.color()},${random.color()})`,
      color: 'red'
    }
  ]

  const renderCCard = creditCardData.map(elem => (
    <CreditCard 
      type={elem.type}
      number={elem.number}
      expirationMonth={elem.expirationMonth}
      expirationYear={elem.expirationYear}
      bank={elem.bank}
      owner={elem.owner}
      bgColor={elem.bgColor}
      color={elem.color}
      className="c-card"
    />
  ))

  return (
    <div className="App">
        {renderIdCard}
        <Greetings lang={random.lang()} />
        <Greetings lang={random.lang()} />
        <RandomNumber min={random.num(10)} max={random.num(250)} />
        <RandomNumber min={random.num(10)} max={random.num(5000)} />
        <BoxColor r={random.color()} g={random.color()} b={random.color()} />
        <BoxColor r={random.color()} g={random.color()} b={random.color()} />
        <BoxColor r={random.color()} g={random.color()} b={random.color()} />
        {renderCCard}
    </div>
  );
}

export default App;
