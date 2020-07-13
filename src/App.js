import React from 'react';
import './App.css';
import Greetings from './components/Greetings';
import IdCard from './components/IdCard';
import Random from './components/Random';
import BoxColor from './components/BoxColor';
import CreditCard from './components/CreditCard';
import Rating from './components/Rating';
import DriverCard from './components/DriverCard';
import LikeButton from './components/LikeButton';
import ClickablePicture from './components/ClickablePicture';
import Dice from './components/Dice';
import Carousel from './components/Carousel';
import NumbersTable from './components/NumbersTable';
import FaceBook from './components/FaceBook';


function App() {

  const card = [
    {
      lastName: 'Doe',
      firstName: 'John',
      gender: 'male',
      height: 178,
      birth: new Date("1992-07-14"),
      picture: "https://randomuser.me/api/portraits/men/44.jpg"
    },
    {
      lastName: 'Delores ',
      firstName: 'Obrien',
      gender: 'female',
      height: 172,
      birth: new Date("1988-05-11"),
      picture: "https://randomuser.me/api/portraits/women/44.jpg"
    }
  ]

  const creditCard = [
    {
      type: "Visa",
      number: "0123456789018845",
      expirationMonth: 3,
      expirationYear: 2021,
      bank:"BNP",
      owner: "Maxence Bouret",
      bgColor:"#11aa99",
      color: "white"
    },
    {
      type: "Master Card",
      number: "0123456789010995",
      expirationMonth: 3,
      expirationYear: 2021,
      bank:"N26",
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

  const cards = card.map(thisCard => {
    return (
      <IdCard key={thisCard.lastName}
              lastName={thisCard.lastName}
              firstName={thisCard.firstName} 
              gender={thisCard.gender} 
              height={thisCard.height} 
              birth={thisCard.birth.toLocaleDateString()}
              picture={thisCard.picture}
       />
    )
  })

  const creditCards = creditCard.map(thisCC => {
    return (
      <CreditCard key={thisCC.number}
                  type={thisCC.type}
                  number={thisCC.number}
                  expirationMonth={thisCC.expirationMonth}
                  expirationYear={thisCC.expirationYear}
                  bank={thisCC.bank}
                  owner={thisCC.owner}
                  bgColor={thisCC.bgColor}
                  color={thisCC.color}
       />
    )
  })

  return (
    <div className="app">
      <h1>IdCards</h1>
      {cards}
      <h1>Greetings</h1>
      <Greetings lang="pt">Lourenço</Greetings>
      <Greetings lang="es">Juan</Greetings> 
      <Greetings>Jack</Greetings> 
      <h1>Random</h1>
      <Random min={1} max={6}/>
      <Random min={1} max={100}/>
      <h1>BoxColor</h1>
      <BoxColor r={255} g={0} b={0} />
      <BoxColor r={128} g={255} b={0} />
      <h1>CreditCard</h1>
      <div className="credit-cards-container">
        {creditCards}
      </div>
      <h1>Rating</h1>
      <Rating>0</Rating>
      <Rating>1.49</Rating>
      <Rating>1.5</Rating>
      <Rating>3</Rating>
      <Rating>4</Rating>
      <Rating>5</Rating>
      <h1>DriverCard</h1>
      <DriverCard
        name="Travis Kalanick"
        rating={4.2}
        img="https://si.wsj.net/public/resources/images/BN-TY647_37gql_OR_20170621052140.jpg?width=620&height=428"
        car={{
          model: "Toyota Corolla Altis",
          licensePlate: "CO42DE"
      }} />
      <DriverCard
        name="Dara Khosrowshahi"
        rating={4.9}
        img="https://ubernewsroomapi.10upcdn.com/wp-content/uploads/2017/09/Dara_ELT_Newsroom_1000px.jpg"
        car={{
          model: "Audi A3",
          licensePlate: "BE33ER"
      }} />
      <h1>LikeButton</h1>
      <LikeButton />
      <LikeButton />
      <h1>ClickablePicture</h1>
      <ClickablePicture img='/img/persons/maxence.png' imgClicked='/img/persons/maxence-glasses.png' />
      <h1>Dice</h1>
      <Dice />
      <h1>Carousel</h1>
      <Carousel
        imgs={[
          'https://randomuser.me/api/portraits/women/1.jpg',
          'https://randomuser.me/api/portraits/men/1.jpg',
          'https://randomuser.me/api/portraits/women/2.jpg',
          'https://randomuser.me/api/portraits/men/2.jpg'
      ]} />
      <h1>NumbersTable</h1>
      <NumbersTable limit={12} />
      <h1>FaceBook</h1>
      <FaceBook />
    </div>
  );
}

export default App;