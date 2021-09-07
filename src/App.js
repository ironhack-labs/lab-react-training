import React from 'react';
import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.css"
import IdCard from "./components/IdCard/IdCard"
import Gretings from "./components/Greetings/Greetings"
import Random from "./components/Random/Random"
import BoxColor from './components/BoxColor/BoxColor';
import CreditCard from './components/CreditCard/CreditCard';
import Rating from "./components/Rating/Rating"
import DriverCard from "./components/DriverCard/DriverCard"
import LikeButton from "./components/LikeButton/LikeButton"
import ClickablePicture from "./components/ClickablePicture/ClickablePicture"
import Dice from './components/Dice/Dice';
import Carousel from './components/Carousel/Carousel';
import NumbersTable from './components/NumbersTable/NumbersTable';
import FaceBook from './components/FaceBook/FaceBook';
import SignupPage from './components/SignupPage/SignupPage';

function App() {
  const dateToArr = (date) => {
    let birthArr = date.toString().split(" ");
    let birthStr = "";
    for (let i=0; i < 4; i++) {
      birthStr += birthArr[i];
      birthStr += " ";
    }
    return birthStr
  }
  
  return (
    <div className="App">
      <IdCard
         lastName='Doe'
         firstName='John'
         gender='male'
         height={178}
         birth={dateToArr(new Date("1992-07-14"))}
         picture="https://randomuser.me/api/portraits/men/44.jpg"
      />
      <Gretings lang="es">Marcos</Gretings>

      <Random min="15" max="25"/>

      <BoxColor r={206} g={218} b={255}/>

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

      <Rating>3.1</Rating>

      <DriverCard
        name="Travis Kalanick"
        rating={4.2}
        img="https://si.wsj.net/public/resources/images/BN-TY647_37gql_OR_20170621052140.jpg?width=620&height=428"
        car={{
          model: "Toyota Corolla Altis",
          licensePlate: "CO42DE"
        }} 
      />

      <LikeButton />

      <ClickablePicture 
        img='/img/persons/maxence.png'
        imgClicked='/img/persons/maxence-glasses.png'
      />

      <Dice />

      <Carousel
        imgs={[
          'https://randomuser.me/api/portraits/women/1.jpg',
          'https://randomuser.me/api/portraits/men/1.jpg',
          'https://randomuser.me/api/portraits/women/2.jpg',
          'https://randomuser.me/api/portraits/men/2.jpg'
        ]}
      />

      <NumbersTable limit={12} />

      <FaceBook />

      <SignupPage />

    </div>
  );
}

export default App;
