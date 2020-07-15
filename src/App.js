import React from 'react';
import './App.css';
import Greetings from './components/Greetings'
import Card from './components/Card'
import Random from './components/Random'
import Color from './components/Color'
import CreditCard from './components/CreditCard'
import Rating from './components/Rating'
import DriverCard from './components/DriverCard'
import LikeBtn from './components/LikeBtn'
import ClickablePic from './components/ClickablePic'
import Dice from './components/Dice'
import Carousel from './components/Carousel'
import NumbersTable from './components/NumbersTable'
import Facebook from './components/Facebook'
import Form from './components/Form'

function App() {
  return (
    <div className="App">
      <Card pic="img/persons/maxence.png" firstName="Max" lastName="Doe" gender="N/A" height="1.60m" birthdate="June 11, 1983"/>
      <Greetings lang="cat">Alba</Greetings>
      <Random min={1} max={3}/>
      <Color red={0} green={255} blue={0}/>
      <CreditCard type="Visa" number="0123456789018845" expirationMonth={3} expirationYear={2021} bank="BNP" owner="Maxence Bouret" bgColor="#11aa99" color="white" />
      <CreditCard type="Master Card" number="0123456789010995" expirationMonth={3} expirationYear={2021} bank="N26" owner="Maxence Bouret" bgColor="#eeeeee" color="#222222" />
      <CreditCard type="Visa" number="0123456789016984" expirationMonth={12} expirationYear={2019} bank="Name of the Bank" owner="Firstname Lastname" bgColor="#ddbb55" color="white" />
      <Rating>0</Rating>
      <Rating>1</Rating>
      <Rating>2</Rating>
      <Rating>3</Rating>
      <Rating>4</Rating>
      <Rating>5</Rating>
      <DriverCard name="Travis Kalanick" rating={4.2} img="https://si.wsj.net/public/resources/images/BN-TY647_37gql_OR_20170621052140.jpg?width=620&height=428"  car={{model: "Toyota Corolla Altis",  licensePlate: "CO42DE"}} />
      <LikeBtn />
      <ClickablePic img='/img/persons/maxence.png' imgClicked='/img/persons/maxence-glasses.png'/>
      <Dice />
      <Carousel imgs={['https://randomuser.me/api/portraits/women/1.jpg','https://randomuser.me/api/portraits/men/1.jpg','https://randomuser.me/api/portraits/women/2.jpg','https://randomuser.me/api/portraits/men/2.jpg']}/>
      <NumbersTable limit={12} />
      <Facebook />
      <Form />
    </div>
  );
}

export default App;
