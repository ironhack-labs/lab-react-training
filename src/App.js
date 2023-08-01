import React from 'react';
import './App.css';
import IdCard from './components/IdCard';
import Greetings from './components/Greetings';
import Random from './components/Random';
import BoxColor from './components/BoxColor';
import CreditCard from './components/CreditCard';
import Rating from './components/Rating';
import DriverCard from './components/DriverCard';
import LikeButton from './components/LikeButton';
import ClickablePicture from './components/ClickablePicture';
import Dice from './components/Dice';
import Carousel from './components/Carousel';
import NumbersTable from './components/NumbersTable';

function App() {
  return (
    <div className="App">

      <Greetings lang='fr'>Bernard</Greetings>

      <IdCard 
        lastName='Doe'
        firstName='John'
        gender='male'
        height={178}
        birth={new Date("1992-07-14")}
        picture="https://randomuser.me/api/portraits/men/44.jpg"
      />
      <IdCard
        lastName='Delores '
        firstName='Obrien'
        gender='female'
        height={172}
        birth={new Date("1988-05-11")}
        picture="https://randomuser.me/api/portraits/women/44.jpg"
/>

      <Random min={1} max={6} />
      <Random min={1} max={100} />

      <BoxColor r={171} g={171} b={171} />
      <BoxColor r={9} g={99} b={119} />

      <CreditCard
        type='Visa'
        number="0123456789018845"
        expirationMonth={3}
        expirationYear={2025}
        bank="BNP"
        owner="Bernard Cardoso"
        bgColor="#11aa99"
        color="white" />

        <Rating>4</Rating>

        <DriverCard
          name="Travis Kalanick"
          rating={4.2}
          img="https://si.wsj.net/public/resources/images/BN-TY647_37gql_OR_20170621052140.jpg?width=620&height=428"
          car={{
            model: "Toyota Corolla Altis",
            licensePlate: "CO42DE"}}/>

        <LikeButton />

        <ClickablePicture img = "maxence.png" imgClicked = "maxence-glasses.png" />

        <Dice />

        <Carousel
          images={[
          'https://randomuser.me/api/portraits/women/1.jpg',
          'https://randomuser.me/api/portraits/men/1.jpg',
          'https://randomuser.me/api/portraits/women/2.jpg',
          'https://randomuser.me/api/portraits/men/2.jpg']}/>

        <NumbersTable limit={10} />

    </div>
  );
}

export default App;
