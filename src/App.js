import React from 'react';

import './App.css';
import IdCard from './components/idcard/IdCard.jsx';
import Greetings from './components/greetings/Greetings.jsx';
import Random from './components/random/Random.jsx';
import BoxColor from './components/boxColor/BoxColor.jsx';
import CreditCard from './components/creditcard/CreditCard.jsx';
import Rating from './components/rating/Rating.jsx';
import DriverCard from './components/drivercard/DriverCard';
import LikeButton from './components/likebutton/LikeButton';
import ClickablePicture from './components/clickablepicture/ClickablePicture';
import Dice from './components/dice/Dice';
import Carousel from './components/carousel/Carousel';
import NumbersTable from './components/numberstable/NumbersTable';

function App() {
  return (
    <div className="App">
      <div className="container">
        <IdCard
          picture="https://randomuser.me/api/portraits/men/44.jpg"
          firstName="John"
          lastName="Doe"
          gender="male"
          height={178}
          birth={new Date('1992-07-14')}
        />
        <IdCard
          picture="https://randomuser.me/api/portraits/women/44.jpg"
          lastName="Delores"
          firstName="Obrien"
          gender="female"
          height={172}
          birth={new Date('1988-05-11')}
        />
      </div>
      <div className="container">
        <Greetings lang="de">Ludwig</Greetings>
        <Greetings lang="fr">François</Greetings>
        <Greetings lang="es">Carol</Greetings>
        <Greetings lang="en">Henri</Greetings>
      </div>
      <div className="container">
        <Random min={1} max={6} />
        <Random min={1} max={100} />
      </div>
      <div className="container">
        <BoxColor r={255} g={0} b={0} color="#fff" />
        <BoxColor r={128} g={255} b={0} color="#000" />
      </div>
      <div className="container">
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
      </div>
      <div className="container">
        <Rating>0</Rating>
        <Rating>1.49</Rating>
        <Rating>1.5</Rating>
        <Rating>3</Rating>
        <Rating>4</Rating>
        <Rating>5</Rating>
      </div>
      <div>
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
      </div>
      <div>
        <LikeButton /> <LikeButton />
      </div>
      <div>
        <ClickablePicture
          img="/img/persons/maxence.png"
          imgClicked="/img/persons/maxence-glasses.png"
        />
      </div>
      <div className="container">
        <Dice />
      </div>
      <div>
        <Carousel
          imgs={[
            'https://randomuser.me/api/portraits/women/1.jpg',
            'https://randomuser.me/api/portraits/men/1.jpg',
            'https://randomuser.me/api/portraits/women/2.jpg',
            'https://randomuser.me/api/portraits/men/2.jpg',
          ]}
        />
      </div>
      <div className="container">
        <NumbersTable limit={12} />
      </div>
    </div>
  );
}

export default App;
