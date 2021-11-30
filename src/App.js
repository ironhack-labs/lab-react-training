import React from 'react';
import './App.css';
import IdCard from './components/IdCard';
import Greetings from './components/Greetings';
import Random from './components/Random';
import BoxColor from './components/BoxColor';
import CreditCard from './components/CreditCard'
import Rating from './components/Rating';
import DriverCard from './components/DriverCard';

const users = [
{
  lastName: 'Doe',
  firstName: 'John',
  gender: 'male',
  height: 178,
  birth: "1992-07-14",
  picture: "https://randomuser.me/api/portraits/men/44.jpg"
},
{
  lastName: 'Delores',
  firstName: 'Obrien',
  gender: 'female',
  height: 172,
  birth: "1988-05-11",
  picture: "https://randomuser.me/api/portraits/women/44.jpg"
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
]

const driverCard = [
  {
    name: "Travis Kalanick", 
    rating: 4.2,
    img: "https://si.wsj.net/public/resources/images/BN-TY647_37gql_OR_20170621052140.jpg?width=620&height=428",
    car: {
      model: "Toyota Corolla Altis",
      licensePlate: "CO42DE"
    }
  },
  {
    name: "Dara Khosrowshahi",
    rating: 4.9,
    img: "https://ubernewsroomapi.10upcdn.com/wp-content/uploads/2017/09/Dara_ELT_Newsroom_1000px.jpg",
    car: {
      model: "Audi A3",
      licensePlate: "BE33ER"
    }
  }
]

const rating = [0, 1.49, 1.5, 3, 4, 5]

function App() {
  return (
    <div className="App">
      <h3>IdCard: </h3>
      {
        users.map((user, index)=>{
          return <IdCard user={user} key={index}/>
        })
      }

      <h3>Greetings: </h3>
      <Greetings lang="de">Ludwig</Greetings>
      <Greetings lang="fr">François</Greetings>

      <h3>Random Number: </h3>
      <Random min={1} max={6}/>
      <Random min={1} max={100}/>  

      <h3>Box Color: </h3>
      <BoxColor r={255} g={0} b={0} />
      <BoxColor r={128} g={255} b={0} /> 

      <h3>Credit Cards:</h3>
      {
        creditCards.map((card, index)=>{
          return <CreditCard card={card} key={index}/>
        })
      }
      <h3>Rating:</h3>
      {
        rating.map((number, index)=>{
          return <Rating number={number} key={index}/>
        })
      }
      <h3>Driver Cards:</h3>
      {
        driverCard.map((driver, index)=>{
          return <DriverCard driver={driver} key={index}/>
        })
      }
    </div>
  );
}

export default App;
