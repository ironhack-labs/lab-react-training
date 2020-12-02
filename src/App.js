import React from 'react';
import logo from './logo.svg';
import './App.css';
import IdCard from '../src/idcard/IdCard';
import Greetings from '../src/greetings/Greetings';
import BoxColor from '../src/boxcolor/Boxcolor';
import CreditCard from '../src/creditcard/CreditCard';
import DriverCard from '../src/drivercard/DriverCard';
import LikeButton from './likebutton/LikeButton';
import Random from '../src/random/Random';
import Rating from '../src/rating/Rating';

function App() {
  return (
    <div className="App">
      <IdCard
        lastName="Doe"
        firstName="John"
        gender="male"
        height={178}
        birth={new Date('1992-07-14')}
        picture="https://randomuser.me/api/portraits/men/44.jpg"
      />

      <Greetings lang="de">Ludwig</Greetings>

      <Random min={1} max={100} />

      <BoxColor r={255} g={0} b={0} />

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

      <Rating>1.5</Rating>

      <DriverCard
        name="Travis Kalanick"
        rating={4.2}
        img="https://si.wsj.net/public/resources/images/BN-TY647_37gql_OR_20170621052140.jpg?width=620&height=428"
        car={{
          model: 'Toyota Corolla Altis',
          licensePlate: 'CO42DE',
        }}
      />
    </div>
  );
}

export default App;
