//jshint esversion:8

import './App.css';
import {IdCard} from './components/IdCard';
import {Greetings} from './components/Greetings';
import { Random } from './components/Random';

import { BoxColor } from './components/BoxColor';
import {CreditCard} from './components/CreditCard';

const cards = [
  {
    lastName: 'Doe',
    firstName: 'John',
    gender: 'male',
    height: 178,
    birth: new Date("1992-07-14").toLocaleDateString(),
    picture:"https://randomuser.me/api/portraits/men/44.jpg"
  },
  {
    lastName: 'Delores',
    firstName: 'Obrien',
    gender: 'female',
    height: 172,
    birth: new Date("1988-05-11").toLocaleDateString(),
    picture:"https://randomuser.me/api/portraits/women/44.jpg"
  }
];

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
    color: "#222222"
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
];




function App() {
  return (
    <div className="App">

      {cards.map(elem => {
        return <IdCard firstName={elem.firstName} lastName={elem.lastName} gender={elem.gender} height={elem.height} birth={elem.birth} picture={elem.picture} />
      })}
      
      <Greetings lang="de">Ludwig</Greetings>
      <Greetings lang="fr">François</Greetings>
      
      <Random min={1} max={6}/>
      <Random min={1} max={100}/>

      <BoxColor r={255} g={0} b={0} />
      <BoxColor r={128} g={255} b={0} />

      {creditCards.map(card => {
        return <CreditCard type={card.type} number={card.number} expirationMonth={card.expirationMonth} expirationYear={card.expirationYear} bank={card.bank} owner={card.owner} bgColor={card.bgColor} color={card.color}/>
      })}
      
    </div>
  );
}

export default App;
