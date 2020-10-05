import React from 'react';
import logo from './logo.svg';
import './App.css';
import IdCard from "./component/IdCard";
import Greetings from "./component/Greetings";
import Random from "./component/Random";
import BoxColor from "./component/BoxColor";
import CreditCard from "./component/CreditCard";


function App() {
  return (
  <div>
      <h1>IdCard</h1>
      <div id="main-id-card2">
        <IdCard
        lastName='Doe'
        firstName='John'
        gender='male'
        height={178}
        birth={new Date("1992-07-14")}
        picture="https://randomuser.me/api/portraits/men/44.jpg"
        />

        <IdCard
        lastName='Obrien'
        firstName='Delores'
        gender='female'
        height={172}
        birth={new Date("1993-05-11")}
        picture="https://randomuser.me/api/portraits/women/44.jpg"
        />
      </div>

      <h1>Greetings</h1>
      <div id="main-greetings">
        <Greetings lang="de">Ludwig</Greetings>
        <Greetings lang="fr">François</Greetings>
      </div>
      
      <h1>Random</h1>
      <Random min={1} max={6}/>
      <Random min={1} max={100}/>

      <h1>Box Color</h1>
      <BoxColor r={255} g={0} b={0} />
      <BoxColor r={128} g={255} b={0} />

      <h1>Credit Card</h1>
      <div id="main-cb">
        <CreditCard
        type="Visa"
        number="0123456789018845"
        expirationMonth={3}
        expirationYear={2021}
        bank="BNP"
        owner="Maxence Bouret"
        bgColor="#11aa99"
        color="white" />

        <CreditCard
        type="Master Card"
        number="0123456789010995"
        expirationMonth={3}
        expirationYear={2021}
        bank="N26"
        owner="Maxence Bouret"
        bgColor="#eeeeee"
        color="#222222" />

        <CreditCard
          type="Visa"
          number="0123456789016984"
          expirationMonth={12}
          expirationYear={2019}
          bank="Name of the Bank"
          owner="Firstname Lastname"
          bgColor="#ddbb55"
          color="white" />
      </div>

  </div>
  );
}


export default App;

