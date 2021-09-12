import React from 'react';
import IdCard from './components/IdCard';
import Greeting from './components/Greeting';
import Random from './components/Random';
import BoxColor from './components/Boxcolor';
import CreditCard from './components/CreditCard';
import Rating from './components/Rating';
import DriverCard from './components/DriverCard';
import LikeButton from './components/LikeButton';
import ClickablePicture from './components/ClickablePicture';
import Dice from './components/Dice';
import Carousel from './components/Carousel';
import NumbersTable from './components/NumbersTable';
import FaceBook from './components/FaceBook';
import SignupPage from './components/SignupPage';
import './App.css';

function App() {
  return (
    <div className="App">
      <IdCard
        firstName="Doe"
        lastName="John"
        gender="male"
        height="178"
        birth="1992-07-14"
        pictureLink="/img/persons/maxence-glasses.png"
      />
      <IdCard
        firstName="Obrien"
        lastName="Delores"
        gender="female"
        height="172"
        birth="1988-05-11"
        pictureLink="/img/persons/maxence.png"
      />
      <Greeting lang="de">Goku</Greeting>
      <Greeting>Vegeta</Greeting>
      <Random min={3} max={17} />
      <BoxColor r={0} g={255} b={130} />
      <BoxColor r={255} g={0} b={55} />
      <CreditCard
        owner="Maxence Bouret"
        type="master card"
        numbers="0123456789016984"
        expirationMonth={12}
        expirationYear={2019}
        bank="Name of the Bank"
        bgColor="blue"
        color="black"
      />
      <CreditCard
        owner="Maxence Bouret"
        type="visa"
        numbers="0123456789016984"
        expirationMonth={12}
        expirationYear={2019}
        bank="Name of the Bank"
        bgColor="rgb(125,125,125)"
        color="white"
      />
      <Rating rating={2.14} />
      <DriverCard
        name="Travis Kalanick"
        rating={4.2}
        imgLink="https://si.wsj.net/public/resources/images/BN-TY647_37gql_OR_20170621052140.jpg?width=620&height=428"
        car={{
          model: 'Toyota Corolla Altis',
          licensePlate: 'CO42DE',
        }}
      />
      <DriverCard
        name="Dara Khosrowshahi"
        rating={4.9}
        imgLink="https://ubernewsroomapi.10upcdn.com/wp-content/uploads/2017/09/Dara_ELT_Newsroom_1000px.jpg"
        car={{
          model: 'Audi A3',
          licensePlate: 'BE33ER',
        }}
      />
      <LikeButton />
      <ClickablePicture
        img01Path="img/persons/maxence.png"
        img02Path="/img/persons/maxence-glasses.png"
      />
      <Dice />
      <Carousel
        imgList={[
          'https://randomuser.me/api/portraits/women/1.jpg',
          'https://randomuser.me/api/portraits/men/1.jpg',
          'https://randomuser.me/api/portraits/women/2.jpg',
          'https://randomuser.me/api/portraits/men/2.jpg',
        ]}
      />
      <NumbersTable limit={12} />
      <FaceBook />
      <SignupPage/>
    </div>
  );
}

export default App;
