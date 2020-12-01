import React from 'react';
import IDCard from './components/IDCard'
import Greetings from './components/Greetings/Greetings'
import Random from './components/Random/Random'
import BoxColor from './components/BoxColor/BoxColor'
import CreditCard from './components/CreditCard/CreditCard'
import Rating from './components/Rating/Rating'
import DriverCard from './components/DriverCard/DriverCard';

function App() {
  return (
    <div>
     <IDCard
    lastName='Doe'
    firstName='John'
    gender='male'
    height={178}
    birth={new Date("1992-07-14").toString()}
    picture="https://randomuser.me/api/portraits/men/44.jpg"
    />
    <Greetings lang = "en" >
      Ludwig
    </Greetings>
    <Random min = {1} max= {10} />
    <BoxColor r={255} g={0} b={0} />
    <CreditCard
  type="Visa"
  number="0123456789018845"
  expirationMonth={3}
  expirationYear={2021}
  bank="BNP"
  owner="Maxence Bouret"
  bgColor="#11aa99"
  color="white" />
  <Rating>1</Rating>
  <DriverCard
  name="Travis Kalanick"
  rating={4.2}
  img="https://si.wsj.net/public/resources/images/BN-TY647_37gql_OR_20170621052140.jpg?width=620&height=428"
  car={{
    model: "Toyota Corolla Altis",
    licensePlate: "CO42DE"
  }} />
    </div>
  );
}

export default App;
