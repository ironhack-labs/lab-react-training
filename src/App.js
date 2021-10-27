import React from 'react';
import IdCard from './components/IdCard';
import Greetings from './components/Greetings';
import Random from './components/Random';
import BoxColor from './components/BoxColor';
import CreditCard from './components/CreditCard';
import './App.css';

function App() {
  return (
    <div className="App">
      <IdCard
        firstName="John"
        lastName="Doe"
        gender="Male"
        height={1.78 + 'm'}
        birth="1992-07-14"
        picture="https://randomuser.me/api/portraits/men/44.jpg"
      />
      <IdCard
        firstName="Delores"
        lastName="Obrien"
        gender="Female"
        height={1.72 + 'm'}
        birth="1988-05-11"
        picture="https://randomuser.me/api/portraits/women/44.jpg"
      />
      <Greetings lang="de">Ludwig</Greetings>
      <Greetings lang="en">Chris</Greetings>
      <Greetings lang="es">David</Greetings>
      <Random min={1} max={10} />
      <Random min={100} max={1000} />
      <BoxColor r={255} g={0} b={0} />
      <BoxColor r={128} g={255} b={0} />
      <BoxColor r={142} g={125} b={150} />
      <CreditCard
        cardtype="visa"
        number="0123456789018845"
        expdate={3}
        expyear={2021}
        bank="BNP"
        owner="Maxence Bouret"
        bgcolor="#11aa99"
        textcolor="white"
      />
      <CreditCard
        cardtype="Master Card"
        number="0123456789010995"
        expdate={3}
        expyear={1990}
        bank="N26"
        owner="Edward Scissorhands"
        bgcolor="#eeeeee"
        textcolor="#222222"
      />
      <CreditCard
        cardtype="visa"
        number="0123456789016984"
        expdate={12}
        expyear={2019}
        bank="Santander"
        owner="BillyBob"
        bgcolor="#ddbb55"
        textcolor="white"
      />
    </div>
  );
}

export default App;
