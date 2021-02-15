import React from 'react';
import { IdCard } from './components/IdCard/IdCard';
import { Greetings } from './components/Greetings/Greetings';
import { Random } from './components/Random/Random';
import { BoxColor } from './components/BoxColor/BoxColor';
import { CreditCard } from './components/CreditCard/CreditCard';
import Rating from './components/Rating/Rating';
import { DriverCard } from './components/DriverCard/DriverCard';
import './App.css';
import LikeButton from './components/LikeButton/LikeButton';
import { ClickablePicture } from './components/ClickablePicture/ClickablePicture';
import { Dice } from './components/Dice/Dice';
import { Carousel } from './components/Carousel/Carousel';
import { NumbersTable } from './components/NumbersTable/NumbersTable';
import { FaceBook } from './components/FaceBook/FaceBook';


function App() {

  return (
    <div className="App">
      <h2>iteracion 1</h2>
      <IdCard
        lastName="Doe"
        firstName="John"
        gender="male"
        height={178}
        birth={'1992-07-14'}
        picture="https://randomuser.me/api/portraits/men/44.jpg"
      />
      <h2>iteracion 2</h2>
      <Greetings lang={'es'}>Tomás</Greetings>
      <h2>iteracion 3</h2>
      <Random min={0} max={255} />
      <h2>iteracion 4</h2>
      <BoxColor
        r={Math.floor(Math.random() * 255)}
        g={Math.floor(Math.random() * 255)}
        b={Math.floor(Math.random() * 255)}
      ></BoxColor>
      <h2>iteracion 5</h2>
      <div className="container-cards">
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
        <h2>iteracion 6</h2>
      </div>
      <div>
        <Rating>0</Rating>
      </div>
      <h2>iteracion 7</h2>
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
      <h2>iteracion 8</h2>
      <LikeButton />
      <h2>iteracion 9</h2>
      <ClickablePicture
        img="/img/persons/maxence.png"
        imgClicked="/img/persons/maxence-glasses.png"
      />
      <h2>iteracion 10</h2>
      <Dice
        diceZero="/img/dice-empty.png"
        dicePictures={[
          '/img/dice1.png',
          '/img/dice2.png',
          '/img/dice3.png',
          '/img/dice4.png',
          '/img/dice5.png',
          '/img/dice6.png',
        ]}
      />
      <h2>iteracion 11</h2>
      <Carousel
        imgs={[
          'https://randomuser.me/api/portraits/women/1.jpg',
          'https://randomuser.me/api/portraits/men/1.jpg',
          'https://randomuser.me/api/portraits/women/2.jpg',
          'https://randomuser.me/api/portraits/men/2.jpg',
        ]}
      />
      <h2>iteracion 12</h2>
      <NumbersTable limit={12}/>
      <h2>iteracion 13</h2>
      <FaceBook/>
    </div>
  );
}

export default App;
