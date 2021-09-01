import React from 'react';
import './App.css';
import IdCard from "./components/idcard/IdCard";
import Greetings from "./components/greetings/Greetings";
import Random from "./components/random/Random";
import BoxColor from "./components/boxcolor/BoxColor";
import CreditCard from "./components/creditcard/CreditCard";
import Ratings from "./components/ratings/Ratings";
import DriverCard from "./components/drivercard/DriverCard";
import LikeButton from "./components/likebutton/LikeButton";
import ClickablePicture from "./components/clickablepicture/ClickablePicture";
import Dice from "./components/dice/Dice";


const doe = {
  lastName: 'Doe',
  firstName: 'John',
  gender: 'male',
  height: 178,
  birth: new Date("1992-07-14"),
  picture: "https://randomuser.me/api/portraits/men/44.jpg"
}

const delores = {
  lastName: 'Delores ',
  firstName: 'Obrien',
  gender: 'female',
  height: 172,
  birth: new Date("1988-05-11"),
  picture: "https://randomuser.me/api/portraits/women/44.jpg"
}

const visa1 = {
  type: 'Visa',
  number: '0123456789018845',
  expirationMonth: 3,
  expirationYear: 2021,
  bank: 'BNP',
  owner: 'Maxence Bouret',
  bgColor: '#11aa99',
  color: 'white'
}

const mastercard = {
  type: 'Master Card',
  number: '0123456789010995',
  expirationMonth: 3,
  expirationYear: 2021,
  bank: 'N26',
  owner: 'Maxence Bouret',
  bgColor: '#eeeeee',
  color: '#222222'
}

const visa2 = {
  type: 'Visa',
  number: '0123456789016984',
  expirationMonth: 12,
  expirationYear: 2019,
  bank: 'Name of the Bank',
  owner: 'Firstname Lastname',
  bgColor: '#ddbb55',
  color: 'white'
}

const driverCard1 = {
  name: 'Travis Kalanick',
  rating: 4.2,
  img: 'https://si.wsj.net/public/resources/images/BN-TY647_37gql_OR_20170621052140.jpg?width=620&height=428',
  car: {
    model: 'Toyota Corolla Altis',
    licensePlate: 'CO42DE'
  }
}

const driverCard2 = {
  name: 'Dara Khosrowshahi',
  rating: 4.9,
  img: 'https://ubernewsroomapi.10upcdn.com/wp-content/uploads/2017/09/Dara_ELT_Newsroom_1000px.jpg',
  car: {
    model: 'Audi A3',
    licensePlate: 'BE33ER'
  }
}

const clickablePicture = {
  img: '/img/persons/maxence.png',
  imgClicked: '/img/persons/maxence-glasses.png'
}

export default function App() {
  return (
    <div className="App">
      <h1>Id Card</h1>
        <IdCard {...doe} />
        <IdCard {...delores} />
      <h1>Greetings, summoner</h1>
        <Greetings lang="de">Ludwig</Greetings>
        <Greetings lang="fr">François</Greetings>
      <h1>Random</h1>
        <Random min={1} max={6} />
        <Random min={1} max={100} />
      <h1>BoxColor</h1>
        <BoxColor r={255} g={0} b={0} />
        <BoxColor r={128} g={255} b={0} />
      <h1>CreditCard</h1>
        <div className='cardContainer'>
          <CreditCard {...visa1} />
          <CreditCard {...mastercard} />
          <CreditCard {...visa2} />
        </div>
      <h1>Rating</h1>
        <Ratings>0</Ratings>
        <Ratings>1.49</Ratings>
        <Ratings>1.5</Ratings>
        <Ratings>3</Ratings>
        <Ratings>4</Ratings>
        <Ratings>5</Ratings>
      <h1>Driver Card</h1>
        <div className='driverCardContainer'>
          <DriverCard {...driverCard1} />
          <DriverCard {...driverCard2} />
        </div>
      <h1>Like Button</h1>
        <LikeButton />
      <h1>Clickable Picture</h1>
        <ClickablePicture {...clickablePicture} />
      <h1>Dice</h1>
        <Dice />
    </div>
  );
}