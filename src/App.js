
import React from 'react';
import './App.css';
// import ClickablePic from './ClickablePicture';
// import LikeBtn from "./LikeBtn"
// import DiceRoll from './Dice';
// import carousel from "./carousel"
import IdCard from "./idCard"
import Greetings from "./greetings"
import Random from "./Random"
import BoxColor from "./BoxColor"
import CreditCard from "./CreditCard"

function App() {
  return (
    <div className="App">
      <IdCard
        lastName='Doe'
        firstName='John'
        gender='male'
        height={178}
        birth={new Date("1992-07-14")}
        picture="https://randomuser.me/api/portraits/men/44.jpg"
      />
      <Greetings lang= "de">Pamelle</Greetings>
      <Greetings lang= "es">Pipo</Greetings>
      <Random min={2} max={40} />
      <Random min={20} max={60} />
      <BoxColor r={120} g={2} b={20}/>
      <BoxColor r={50} g={65} b={5}/>
      <BoxColor r={200} g={150} b={7}/>
      <CreditCard
  type="Visa"
  number="0123456789018845"
  expirationMonth={3}
  expirationYear={2021}
  bank="BNP"
  owner="Maxence Bouret"
  bgColor="#11aa99"
  color="white" />
    </div>
  );
 
}

export default App;

//* <LikeBtn /> <LikeBtn />
//<ClickablePic />
//<DiceRoll /> */}