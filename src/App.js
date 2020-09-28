import React from 'react';
import './App.css';

import IdCard from './idcard/IdCard';
import Greetings from './greetings/Greetings';
import Random from './random/Random';
import BoxColor from './boxcolor/BoxColor';
import CreditCard from './creditcard/CreditCard';
import Rating from './rating/Rating';
import DriverCard from './drivercard/DriverCard';
import LikeButton from './likebutton/LikeButton';
import ClickablePicture from './clickablepicture/ClickablePicture';
import Dice from './dice/Dice';
import Carousel from './carousel/Carousel';
import NumbersTable from './numberstable/NumbersTable';
import FaceBook from './facebook/FaceBook'
import SignUp from './signup/SignUp'
import SingleColorPicker from './rbgcolorpicker/SingleColorPicker'
import RGBColorPicker from './rbgcolorpicker/RGBColorPicker'

function App() {
  return (
    <div className="App">
      <h1>IdCard</h1>
      <IdCard
        picture="https://randomuser.me/api/portraits/men/44.jpg"
        firstName="John"
        lastName="Doe"
        gender="male"
        height={189}
        birth={new Date('1992-07-14')}
      />
      <IdCard
        picture="https://randomuser.me/api/portraits/women/8.jpg"
        firstName="Obrien"
        lastName="Delores"
        gender="female"
        height={172}
        birth={new Date('1993-05-11')}
      />
      <h1>Greetings</h1>
      <Greetings lang="de">Andre</Greetings>
      <Greetings lang="es">Val</Greetings>
      <h1>Random</h1>
      <Random min={1} max={6} />
      <Random min={1} max={100} />
      <h1>BoxColor</h1>
      <BoxColor r={255} g={0} b={0} />
      <BoxColor r={128} g={255} b={0} />
      <BoxColor r={0} g={0} b={140} />
      <h1>Credit Card</h1>
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
      <h1>Rating</h1>
      <Rating>0</Rating>
      <Rating>1.49</Rating>
      <Rating>1.5</Rating>
      <Rating>3</Rating>
      <Rating>4</Rating>
      <Rating>5</Rating>
      <h1>Driver Card</h1>
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
      <h1>Like Button</h1>
      <LikeButton />
      <LikeButton />
      <h1>Clickable Picture</h1>
      <ClickablePicture
        img="/img/persons/maxence.png"
        imgClicked="/img/persons/maxence-glasses.png"
      />
      <h1>Dice</h1>
      <Dice />
      <h1>Carousel</h1>
      <Carousel
        imgs={[
          'https://randomuser.me/api/portraits/women/1.jpg',
          'https://randomuser.me/api/portraits/men/1.jpg',
          'https://randomuser.me/api/portraits/women/2.jpg',
          'https://randomuser.me/api/portraits/men/2.jpg',
        ]}
      />
      <h1>Numbers Table</h1>
      <NumbersTable limit={12} />
      <h1>FaceBook</h1>
      <FaceBook />
      <h1>Sign Up</h1>
      <SignUp />
      <h1>Color Picker</h1>
      <RGBColorPicker />
    </div>
  );
}

export default App;
