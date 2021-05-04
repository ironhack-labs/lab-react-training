import React, { useReducer } from 'react';
// import logo from './logo.svg';
import './App.css';
import IdCard from './IdCard';
import Greetings from './Greetings';
import Random from './Random';
import BoxColour from './BoxColour';
import CreditCard from './CreditCard';
import Stars from './Stars';
import DriverCard from './DriverCard';
import LikeButton from './LikeButton';
import ClickablePicture from './ClickablePicture';
import Dice from './Dice';
import Carousel from './Carousel';
import NumbersTable from './NumbersTable';

function App() {
  const peter = {
    lastName: 'Smith',
    firstName: 'Peter',
    gender: 'male',
    height: 171,
    birth: '1987-01-01',
    picture: 'https://randomuser.me/api/portraits/men/44.jpg',
  };
  const it2 = {
    lang: 'de',
  };
  return (
    <div className="App">
      <header className="App-header">
        <h1>ID CARD</h1>
        <IdCard
          lastName={peter.lastName}
          firstName={peter.firstName}
          gender={peter.gender}
          height={peter.height}
          birth={peter.birth}
          picture={peter.picture}
        />
        <h1>GREETINGS</h1>
        <Greetings lang={it2.lang}>Simon</Greetings>
        <h1>Random</h1>
        <Random min={1} max={100} />
        <h1>BOX COLOUR</h1>
        <BoxColour r={12} g={233} b={145} />
        <BoxColour r={222} g={2} b={100} />
        <h1>CREDIT CARD</h1>
        <CreditCard
          type="Visa"
          number="123456789101112"
          expirationMonth={2}
          expirationYear={12}
          bank="Commerzbank"
          bgColor="purple"
          color="green"
          firstName="Bert"
          lastName="Dingle"
        />
        <h1>RATING</h1>
        <Stars>2</Stars>
        <h1>DRIVER CAR</h1>
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
        <h1>LIKE BUTTON</h1>
        <LikeButton>sdsd</LikeButton>
        <h1>CLICKABLE PICTURE</h1>
        <ClickablePicture
          img="/img/persons/maxence.png"
          imgClicked="/img/persons/maxence-glasses.png"
        />
        <h1>DICE</h1>
        <Dice />
        <h1>CAROUSEL</h1>
        <Carousel
          imgs={[
            'https://randomuser.me/api/portraits/women/1.jpg',
            'https://randomuser.me/api/portraits/men/1.jpg',
            'https://randomuser.me/api/portraits/women/2.jpg',
            'https://randomuser.me/api/portraits/men/2.jpg',
          ]}
        ></Carousel>
        <h1>NUMBERS TABLE</h1>
        <NumbersTable limit={50} />
      </header>
    </div>
  );
}

export default App;
