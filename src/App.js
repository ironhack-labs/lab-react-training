import React from 'react';
import './App.css';
import IdCard from './components/idcard/IdCard';
import './components/idcard/IdCard.css';
import Greetings from './components/greetings/Greetings'
import './components/greetings/Greetings.css';
import Random from './components/random/Random';
import './components/random/Random.css';
import BoxColor from './components/boxcolor/BoxColor';
import './components/boxcolor/BoxColor.css'
import CreditCard from './components/creditcard/CreditCard'
import './components/creditcard/CreditCard.css'
import Rating from './components/rating/Rating';
import './components/rating/Rating.css';
import LikeButton from './components/likebutton/LikeButton'


function App() {
  return (
    <div className="App">
      <IdCard
        lastName='Doe'
        firstName='John'
        gender='male'
        height={178}
        birth={new Date("1992-07-14")}
        picture="https://randomuser.me/api/portraits/men/44.jpg"
      />
      <IdCard
        lastName='Delores'
        firstName='Obrien'
        gender='female'
        height={172}
        birth={new Date("1988-05-11")}
        picture="https://randomuser.me/api/portraits/women/44.jpg"
      />
      <Greetings lang="de">Ludwig</Greetings>
      <Greetings lang="fr">François</Greetings>
      <Random min={1} max={6}>Random value between 1 and 6 =</Random>
      <Random min={1} max={100}>Random value between 1 and 100 =</Random>
      <BoxColor r={255} g={0} b={0} />
      <BoxColor r={128} g={255} b={0} />
      <CreditCard
        type="/img/visa.png"
        number="0123456789018845"
        expirationMonth={3}
        expirationYear={2021}
        bank="BNP"
        owner="Maxence Bouret"
        bgColor="#11aa99"
        color="white" 
        />
      <CreditCard
        type="/img/master-card.svg"
        number="0123456789010995"
        expirationMonth={3}
        expirationYear={2021}
        bank="N26"
        owner="Maxence Bouret"
        bgColor="#eeeeee"
        color="#222222" 
        />
      <CreditCard
        type="/img/visa.png"
        number="0123456789016984"
        expirationMonth={12}
        expirationYear={2019}
        bank="Name of the Bank"
        owner="Firstname Lastname"
        bgColor="#ddbb55"
        color="white" 
        />
        <Rating>0</Rating>
        <Rating>1.49</Rating>
        <Rating>1.5</Rating>
        <Rating>3</Rating>
        <Rating>4</Rating>
        <Rating>5</Rating>
        <LikeButton /> <LikeButton />
    </div>
  );
}

export default App;
