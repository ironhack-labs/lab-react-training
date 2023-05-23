import IdCard from './Components/idCard';
import Greetings from './Components/greetings';
import Random from './Components/random';
import BoxColor from './Components/boxColor';
import CreditCard from './Components/creditCard';

import './App.css';

let people = [
  {
    lastName: 'Doe',
    firstName: 'John',
    gender: 'male',
    height: 178,
    birth: new Date('1992-07-14'),
    picture: 'https://randomuser.me/api/portraits/men/44.jpg',
    lang: 'de',
  },
  {
    lastName: 'Delores ',
    firstName: 'Obrien',
    gender: 'female',
    height: 172,
    birth: new Date('1988-05-11'),
    picture: 'https://randomuser.me/api/portraits/women/44.jpg',
    lang: 'en',
  },
];


let cards=[
  {
  type:"Visa",
  number:"0123456789018845",
  expirationMonth:"3",
  expirationYear:"2021",
  bank:"BNP",
  owner:"Maxence Bouret",
  bgColor:"#11aa99",
  color:"white",
  },
  {
  type:"Master Card",
  number:"0123456789010995",
  expirationMonth:"3",
  expirationYear:"2021",
  bank:"N26",
  owner:"Maxence Bouret",
  bgColor:"#eeeeee",
  color:"#222222",
  },
  {
    type:"Visa",
    number:"0123456789016984",
    expirationMonth:"12",
    expirationYear:"2019",
    bank:"Name of the Bank",
    owner:"Firstname Lastname",
    bgColor:"#ddbb55",
    color:"white",
  }
]

function App() {
  return (
    <div>
      {people.map((people) => {
        return (
          <div>
            <IdCard data={people} />,
            <Greetings data={people} />
          </div>
        );
      })}

      <Random />
      <BoxColor />

      
        {cards.map((cards)=>{
          return(
            <div>
            <CreditCard cCard={cards}/>
            </div>
          )
        })}
      
    </div>
  );
}

export default App;
