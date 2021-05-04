import React from 'react';
// import logo from './logo.svg';
import './App.css';
import IdCard from './components/IdCard';
import Greetings from './components/Greetings';
import Random from './components/Random';
import BoxColor from './components/BoxColor';
import Rating from './components/Rating.js';
import DriverCard from './components/DriverCard.js';
// import CreditCard from './components/CreditCard.js'
import LikeButton from './components/LikeButton.js'
import ClickablePicture from './components/ClickablePicture.js'
import Dice from './components/Dice.js'
import Carousel from './components/Carousel.js'


// const users = [
//   {lastName:'Doe', firstName:'John', gender:'male', height:178, birth:new Date("1992-07-14"), picture:"https://randomuser.me/api/portraits/men/44.jpg"},
//   {lastName:'Delores ', firstName:'Obrien', gender:'female', height:172, birth:new Date("1988-05-11"), picture:"https://randomuser.me/api/portraits/women/44.jpg"},
// ]

function App() {
  return (
    <div className="App">

      <Carousel
        imgs={[
          'https://randomuser.me/api/portraits/women/1.jpg',
          'https://randomuser.me/api/portraits/men/1.jpg',
          'https://randomuser.me/api/portraits/women/2.jpg',
          'https://randomuser.me/api/portraits/men/2.jpg'
        ]}
      />

      <Dice />

      <ClickablePicture
        img='/img/persons/maxence.png'
        imgClicked='/img/persons/maxence-glasses.png'
      />

      <LikeButton /> <LikeButton />

      <DriverCard
        name="Travis Kalanick"
        rating={4.2}
        img="https://si.wsj.net/public/resources/images/BN-TY647_37gql_OR_20170621052140.jpg?width=620&height=428"
        car={{
          model: "Toyota Corolla Altis",
          licensePlate: "CO42DE"
        }} />
      <DriverCard
        name="Dara Khosrowshahi"
        rating={4.9}
        img="https://ubernewsroomapi.10upcdn.com/wp-content/uploads/2017/09/Dara_ELT_Newsroom_1000px.jpg"
        car={{
          model: "Audi A3",
          licensePlate: "BE33ER"
        }} />

      <Rating>0</Rating>
      <Rating>1.49</Rating>
      <Rating>1.5</Rating>
      <Rating>3</Rating>
      <Rating>4</Rating>
      <Rating>5</Rating>

      <BoxColor r={255} g={0} b={0} />
      <BoxColor r={128} g={255} b={0} />

      <Random min={1} max={6}/>
      <Random min={1} max={100}/>

      <Greetings lang="de">Ludwig</Greetings>
      <Greetings lang="en">François</Greetings>

      <h2>Id Cards:</h2>
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
    </div>
  );
}

export default App;
