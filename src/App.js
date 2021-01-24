import React from 'react';
import './App.css';
import IdCard from './components/idcard/IdCard';
import Greetings from './components/greetings/Greetings';
import Random from './components/random/Random';
import BoxColor from './components/boxcolor/BoxColor';
import { CreditCard, WrapContainer } from './components/creditcard/CreditCard';
import Rating from './components/rating/Rating';
import DriverCard from './components/drivercard/DriverCard';
import LikeButton from './components/likebutton/LikeButton';
import ClickablePicture from './components/clickablepicture/ClickablePicture';
import Dice from './components/dice/Dice';
import Carousel from './components/carousel/Carousel';
import NumbersTable from './components/numberstable/NumbersTable';

const dateOption = {
  weekday: 'long', 
  year:'numeric', 
  month:'long', 
  day:'numeric'
};

const users = [
  {
    lastName: 'Doe',
    firstName: 'John',
    gender: 'male',
    height: 178,
    birth: (new Date("1992-07-14")).toLocaleDateString(undefined, dateOption),
    picture: "https://randomuser.me/api/portraits/men/44.jpg",
  },
  {
    lastName: 'Delores',
    firstName: 'Obrien',
    gender: 'female',
    height: 172,
    birth: (new Date("1988-05-11")).toLocaleDateString(undefined, dateOption),
    picture: "https://randomuser.me/api/portraits/women/44.jpg",
  }
];

const cards = [
  {
      type: "Visa",
      number: "0123456789018845",
      expirationMonth: 3,
      expirationYear: 2021,
      bank: "BNP",
      owner: "Maxence Bouret",
      bgColor: "#11aa99",
      color: "white",
  },
  {
      type: "Master Card",
      number: "0123456789010995",
      expirationMonth: 3,
      expirationYear: 2021,
      bank: "N26",
      owner: "Maxence Bouret",
      bgColor: "#eeeeee",
      color: "#222222",
  },
  {
      type: "Visa",
      number: "0123456789016984",
      expirationMonth: 12,
      expirationYear: 2019,
      bank: "Name of the Bank",
      owner: "Firstname Lastname",
      bgColor: "#ddbb55",
      color: "white",
  }
];

function App() {
  
  return (
    <>
      <IdCard user={users[0]} />
      <IdCard user={users[1]} />
      <Greetings lang="de">
        Ludwig
      </Greetings>
      <Greetings lang="fr">
        François
      </Greetings>
      <Random min='1' max='6' />
      <Random min='1' max='100' />
      <BoxColor r="255" g="173" b="173" />
      <BoxColor r="160" g="196" b="255" />
      <WrapContainer>
        <CreditCard card={cards[0]}/>
        <CreditCard card={cards[1]}/>
        <CreditCard card={cards[2]}/>
      </WrapContainer>
      <Rating>0</Rating>
      <Rating>1.49</Rating>
      <Rating>1.5</Rating>
      <Rating>3</Rating>
      <Rating>4</Rating>
      <Rating>5</Rating>
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
      <LikeButton />
      <LikeButton />
      <ClickablePicture />
      <Dice />
      <Carousel
        imgs={[
          'https://randomuser.me/api/portraits/women/1.jpg',
          'https://randomuser.me/api/portraits/men/1.jpg',
          'https://randomuser.me/api/portraits/women/2.jpg',
          'https://randomuser.me/api/portraits/men/2.jpg'
        ]}
      />
      <NumbersTable limit={12} />
    </>
  );
}

export default App;
