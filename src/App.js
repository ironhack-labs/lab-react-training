import { useState } from 'react';
import './App.css';
import IdCard from './components/IdCard';
import Greetings from './components/Greetings';
import Random from './components/Random';
import BoxColor from './components/BoxColor';
import CreditCard from './components/CreditCard';
import LikeButton from './components/LikeButton';
import ClickablePicture from './components/ClickablePicture';

function App() {
  const  users = [
    {
      "lastName": 'Doe',
      "firstName": 'John',
      "gender":'male',
      "height": 178,
      "birth": "1992-07-14",
      "picture":"https://randomuser.me/api/portraits/men/44.jpg",
    },
    {
      "lastName": 'Delores ',
      "firstName": 'Obrien',
      "gender":'female',
      "height": 172,
      "birth": "1992-07-14",
      "picture":"https://randomuser.me/api/portraits/women/44.jpg",
    }
  ];

  return (
    <div className="App">
    {/*{
      users.map((user, index) =>{
        return <IdCard 
          key = {index}
          {...user}
        />
      })
    }*/}

    {/*
    <Greetings lang="de">Ludwig</Greetings>
    <Greetings lang="fr">François</Greetings>
    */}

    {/*
      <Random min={1} max={5}/>
      <Random min={1} max={100}/>
     */}

    {/*
    <BoxColor  r={255} g={0} b={0} />
    <BoxColor  r={128} g={255} b={0} />
    */}

    {/*

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

      */}

      {/*
      <LikeButton />
      */}

      <ClickablePicture 
        img='././assets/images/maxence.png'
        imgClicked='././assets/images/maxence-glasses.png' />

        <img src="./src/assets/images/maxence.png" alt="ddd"/>


    </div>
  );
}

export default App;
