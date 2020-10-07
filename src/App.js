import React from 'react';
import logo from './logo.svg';
import './App.css';
import Greeting from './components/Greeting';
import Random from './components/Random';
import BoxColor from './components/BoxColor';
import CreditCard from './components/CreditCard';
import LikeButton from './components/LikeButton';
import ClickablePicture from './components/ClickablePicture';
import Dice from './components/Dice';
import Carousel from './components/Carousel';
import SignupPage from './components/SignupPage';

function IdCard(props) {
  return (
    <div className="card-picture">
      <div className="picture">
        <img src={props.picture} alt="Profile image" />
      </div>
      <div className="Card">
        <p>Last name : {props.lastName}</p>
        <p>First name : {props.firstName}</p>
        <p>Gender : {props.gender}</p>
        <p>Height : {props.height}</p>
        <p>Birth : {props.birth}</p>
      </div>
    </div>
  );
}

const idCard = [
  {
    lastName: 'Doe',
    firstName: 'John',
    gender: 'male',
    height: 178,
    birth: '1992-07-14',
    picture: 'https://randomuser.me/api/portraits/men/44.jpg',
  },
  {
    lastName: 'Duh',
    firstName: 'Jane',
    gender: 'female',
    height: 172,
    birth: '1994-03-23',
    picture: 'https://randomuser.me/api/portraits/women/44.jpg',
  },
];

function App(props) {
  return (
    <div>
      {idCard.map((person) => (
        <IdCard
          firstName={person.firstName}
          lastName={person.lastName}
          height={person.height}
          gender={person.gender}
          birth={person.birth}
          picture={person.picture}
        />
      ))}
      <Greeting lang="de">Ludwig</Greeting>
      <Greeting lang="fr">François</Greeting>
      <Random min={1} max={6}></Random>
      <Random min={1} max={100}></Random>
      <BoxColor r={255} g={0} b={0}></BoxColor>
      <BoxColor r={128} g={255} b={0}></BoxColor>
      <CreditCard
        type="Visa"
        number="0123456789018845"
        expirationMonth={3}
        expirationYear={2021}
        bank="BNP"
        owner="Maxence Bouret"
        bgColor="#11aa99"
        color="white"
      />
      <CreditCard
        type="Master Card"
        number="0123456789010995"
        expirationMonth={3}
        expirationYear={2021}
        bank="N26"
        owner="Maxence Bouret"
        bgColor="#eeeeee"
        color="#222222"
      />
      <CreditCard
        type="Visa"
        number="0123456789016984"
        expirationMonth={12}
        expirationYear={2019}
        bank="Name of the Bank"
        owner="Firstname Lastname"
        bgColor="#ddbb55"
        color="white"
      />
      <LikeButton></LikeButton>

      <ClickablePicture></ClickablePicture>

      <Dice />

      <SignupPage></SignupPage>

      {/* <Carousel
        imgs={[
          'https://randomuser.me/api/portraits/women/1.jpg',
          'https://randomuser.me/api/portraits/men/1.jpg',
          'https://randomuser.me/api/portraits/women/2.jpg',
          'https://randomuser.me/api/portraits/men/2.jpg',
        ]}
      /> */}
    </div>
  );
}

export default App;
