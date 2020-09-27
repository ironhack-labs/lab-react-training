import React from 'react';
// import logo from './logo.svg';
import './App.css';
import IdCard from './components/idcard/IdCard';
import Greetings from './components/greetings/Greetings';
import RandomNum from './components/random/Random';
import BoxColor from './components/boxcolor/BoxColor';
import CreditCard from './components/creditcard/CreditCard';
import Rating from './components/rating/Rating';
import DriverCard from './components/drivercard/DriverCard';
import LikeButton from './components/likebutton/LikeButton';
import ClickablePicture from './components/clickablepicture/ClickablePicture';
import Dice from './components/dice/dice';

function App() {
  return (
    <div className="App">
      <IdCard
        firstName="Maynard"
        lastName="Keenan"
        gender="male"
        height="1.60m"
        birth="1970-03-05"
        picture="https://www.ultimate-guitar.com/static/article/news/3/76683_0_wide_ver1530532477.jpg@642"
      />
      <IdCard
        firstName="Christian"
        lastName="McCaffrey"
        gender="male"
        height="160"
        birth="1990-06-05"
        picture="data:image/jpeg;base64,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"
      />
      <Greetings lang="fr" name="Matthew" />
      <Greetings lang="en" name="Adam" />
      <RandomNum min={1} max={10} />
      <RandomNum min={20} max={29} />
      <BoxColor r={255} g={0} b={0} />
      <BoxColor r={128} g={255} b={0} />
      <CreditCard
        type="Master Card"
        number="0123456789018845"
        expirationMonth={1}
        expirationYear={2021}
        bank="Wells Fargo"
        owner="Matthew Howard"
        bgColor="#cd1409"
        color="white"
      />
      <CreditCard
        type="Visa"
        number="1984756302817463"
        expirationMonth={11}
        expirationYear={2023}
        bank="Bank of America"
        owner="Maartje Howard"
        bgColor="#0065B3"
        color="white"
      />
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
          model: 'Toyota Corolla Altis',
          licensePlate: 'CO42DE',
        }}
      />
      <DriverCard
        name="Dara Khosrowshahi"
        rating={4.9}
        img="https://ubernewsroomapi.10upcdn.com/wp-content/uploads/2017/09/Dara_ELT_Newsroom_1000px.jpg"
        car={{
          model: 'Audi A3',
          licensePlate: 'BE33ER',
        }}
      />
      <LikeButton />
      <ClickablePicture
        img="/img/persons/maxence.png"
        imgClicked="/img/persons/maxence-glasses.png"
      />
      <Dice
        diceEmpty="/img/dice-empty.png"
        dice1="/img/dice1.png"
        dice2="/img/dice2.png"
        dice3="/img/dice3.png"
        dice4="/img/dice4.png"
        dice5="/img/dice5.png"
        dice6="/img/dice6.png"
      />
    </div>
  );
}

export default App;
