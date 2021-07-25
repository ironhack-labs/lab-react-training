import React from 'react';
import './App.css';
import Idcard from './IdCard/IdCard';
import Greetings from './Greetings/Greetings';
import Random from './Random/Random';
import Boxcolor from './boxcolor/Boxcolor';
import Creditcard from './creditcard/Creditcard';
import visa from './creditcard/images/visa.png'
import NumberFormat from "react-number-format";
import LogoMastercard from './creditcard/images/master-card.svg'
import Rating from './rating/Rating'
import DriverCard from './DriverCard/DriverCard';
import LikeButton from './LikeButton/LikeButton'
import Photo from './Photo/Photo';
import Dice from './Dice/Dice';



function App() {
  return (
    <div>
      <Idcard picture='https://randomuser.me/api/portraits/men/44.jpg' firstName='John' lastName='Doe' gender='male' height={178} birth={new Date("1992-07-14")} />
      <Idcard picture='https://randomuser.me/api/portraits/women/44.jpg' firstName='Obrien' lastName='Delores' gender='female' height={172} birth={new Date("1988-05-11")} />
      <Greetings lang='jp'>Ludwing</Greetings>
      <Greetings lang='fr'>François</Greetings>
      <Random min={75} max={78} />
      <Boxcolor r={100} g={100} b={255} />
      <Boxcolor r={50} g={100} b={10} />
      <Creditcard bgColor='#11aa99' type={visa} number='3232323232324343' color='white' expirationMonth='03' expirationYear={2021} bank='BPN' owner='Maxence Bouret' />
      <Creditcard bgColor='#eeeeee' type={LogoMastercard} number='0123456789010995' color='#222222' expirationMonth='03' expirationYear={2021} bank='N26' owner='Maxence Bouret' />
      <Creditcard bgColor='#ddbb55' type={visa} number='0123456789016984' color='white' expirationMonth={12} expirationYear={2028} bank='Revolut' owner='IronHack ' />
      <Rating>1.5</Rating>
      <Rating>2</Rating>
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
      <LikeButton />
      <Photo />
      <Dice />
    </div>


  );
}

export default App;
