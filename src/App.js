import React from 'react';
import logo from './logo.svg';
import './App.css';
import IdCard from './Components/IdCard'
import Greetings from './Components/Greetings'
import Random from './Components/Random'
import BoxColor from './Components/BoxColor';
import CreditCard from './Components/CreditCard'
import Rating from './Components/Rating'
import DriverCard from './Components/DriverCard'
import LikeButton from './Components/LikeButton';
import Dice from './Components/Dice';
import Carousel from './Components/Carousel';
import NumbersTable from './Components/NumbersTable';
import FaceBook from './Components/FaceBook';
import ClickablePicture from './Components/ClickablePicture';
import SignupPage from './Components/SignupPage';
import SingleColorPicker from './Components/SingleColorPicker';
import RGBColorPicker from './Components/RGBColorPicker';

function App() {
  return (<div className="App" >
    {/* <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p>
        Edit <code>src/App.js</code> and save to reload.
            </p>
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
            </a>
    </header> */}


    {/* <IdCard lastName="Doe"
      firstName="John"
      gender="male"
      height={
        180
      }
      birth={
        Date("1992-07-14")
      }
      picture="https://randomuser.me/api/portraits/men/44.jpg" /> */}


    {/* <Greetings lang="fr">François</Greetings> */}


    {/* <Random min={1} max={3} /> */}


    {/* <BoxColor r={255} g={0} b={0} /> */}


    {/* <CreditCard
      type="Visa"
      number="0123456789018845"
      expirationMonth={3}
      expirationYear={2021}
      bank="BNP"
      owner="Maxence Bouret"
      bgColor="#11aa99"
      color="white" /> */}


    {/* <Rating>0</Rating>
    <Rating>1.49</Rating>
    <Rating>1.5</Rating>
    <Rating>3</Rating>
    <Rating>4</Rating>
    <Rating>5</Rating> */}


    {/* <DriverCard
      name="Travis Kalanick"
      rating={4.2}
      img="https://si.wsj.net/public/resources/images/BN-TY647_37gql_OR_20170621052140.jpg?width=620&height=428"
      car={{
        model: "Toyota Corolla Altis",
        licensePlate: "CO42DE"
      }} /> */}


    {/* <LikeButton></LikeButton> */}


    {/* <ClickablePicture
      img='/img/persons/maxence.png'
      imgClicked='/img/persons/maxence-glasses.png'
    /> */}


    {/* <Dice></Dice> */}


    {/* <Carousel
      imgs={[
        'https://randomuser.me/api/portraits/women/1.jpg',
        'https://randomuser.me/api/portraits/men/1.jpg',
        'https://randomuser.me/api/portraits/women/2.jpg',
        'https://randomuser.me/api/portraits/men/2.jpg'
      ]}
    /> */}


    {/* <NumbersTable limit={12}></NumbersTable> */}


    {/* <FaceBook></FaceBook> */}


    {/* <SignupPage></SignupPage> */}


    {/* <SingleColorPicker
      color='r'
      value={212}
      onChange={() => console.log("change")}
    /> */}


    <RGBColorPicker />

  </div>
  );
}

export default App;