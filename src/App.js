import React from 'react';
import logo from './logo.svg';
import './App.css';
import IdCard from './components/IdCard'
import data from './data/berlin.json'
import Greeting from './components/Greeting'
import Random from './components/Random'
import BoxColor from './components/BoxColor';
import CreditCard from './components/CreditCard';
import Rating from './components/Rating';
import DriverCard from './components/DriverCard';
import LikeButton from './components/LikeButton';
import ClickablePicture from './components/ClickablePicture';
import Dice from './components/Dice';
import Carousel from './components/Carousel';


function App() {
  const person1 = data[0];
  const person2 = data[1];

  

  return (
    <>
      <h1>Id Cards</h1>
      <IdCard lastName={person1.lastName} firstName={person1.firstName} img={person1.img} height={180} gender="male"/>
      <IdCard lastName={person2.lastName} firstName={person2.firstName} img={person2.img} height={165} gender="male"/>

      <h1>Greetings</h1>
      <Greeting lang="es">Hans</Greeting>
      <Greeting lang="fr">Pierre</Greeting>

      <h1>Random</h1>
      <Random min={3} max={7}/>
      <Random min={120} max={160}/>

      <h1>BoxColor</h1>
      <BoxColor r="255" g="100" b="200"></BoxColor>
      <BoxColor r="40" g="50" b="100"></BoxColor>

      <h1>Credit Card</h1>
      <div id="credit-cards">
        <CreditCard type="visa" number="0154 5454 9874 8565" expirationMonth="7" expirationYear="2024" bank="Lloyds" owner="Harry J. Potter" bgColor="silver" color="blue"></CreditCard>
        <CreditCard type="mastercard" number="0154 5454 6546 5488" expirationMonth="10" expirationYear="2021" bank="HSBC" owner="Hermione J. Granger" bgColor="purple" color="white"></CreditCard>
        <CreditCard type="visa" number="0154 5454 9874 8565" expirationMonth="6" expirationYear="2019" bank="Gringotts" owner="Ron B. Weasley" bgColor="red" color="yellow"></CreditCard>
      </div>

      <h1>Ratings</h1>
      <Rating>4</Rating>
      <Rating>2.3</Rating>
      <Rating>4.6</Rating>
      <Rating>1</Rating>

      <h1>DriverCards</h1>
      <DriverCard name="Travis Kalanick"
        rating={2}
        img="https://si.wsj.net/public/resources/images/BN-TY647_37gql_OR_20170621052140.jpg?width=620&height=428"
        car={{
          model: "Toyota Corolla Altis",
          licensePlate: "CO42DE"
        }} 
      />
      <DriverCard
        name="Dara Khosrowshahi"
        rating={4.9}
        img="https://ubernewsroomapi.10upcdn.com/wp-content/uploads/2017/09/Dara_ELT_Newsroom_1000px.jpg"
        car={{
          model: "Audi A3",
          licensePlate: "BE33ER"
        }} 
      />

      <h1>LikeButtons</h1>
      <LikeButton></LikeButton>
      <LikeButton></LikeButton>

      <h1>ClickablePicture</h1>
      <ClickablePicture 
        img='/img/persons/maxence.png'
        imgClicked='/img/persons/maxence-glasses.png'
      />

      <h1>Dice</h1>
      <Dice></Dice>

      <h1>Carousel</h1>
      <Carousel
        imgs={[
          'https://randomuser.me/api/portraits/women/1.jpg',
          'https://randomuser.me/api/portraits/men/1.jpg',
          'https://randomuser.me/api/portraits/women/2.jpg',
          'https://randomuser.me/api/portraits/men/2.jpg'
        ]}
      />
    </>
  );
}

export default App;
