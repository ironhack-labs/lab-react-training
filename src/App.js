import React from 'react';

import './App.css';
import IdCard from './components/idcard/IdCard.jsx';
import Greetings from './components/greetings/Greetings.jsx';
import Random from './components/random/Random.jsx';
import BoxColor from './components/boxColor/BoxColor.jsx';
import CreditCard from './components/creditcard/CreditCard.jsx';
function App() {
  return (
    <div className="App">
      <div className="Cards">
        <IdCard
          picture="https://randomuser.me/api/portraits/men/44.jpg"
          firstName="John"
          lastName="Doe"
          gender="male"
          height="178"
          birth=" 1992-07-14"
        />
        <IdCard
          picture="https://randomuser.me/api/portraits/women/44.jpg"
          lastName="Delores"
          firstName="Obrien"
          gender="female"
          height="172"
          birth="1988-05-11"
        />
      </div>

      <Greetings lang="de">Ludwig</Greetings>
      <Greetings lang="fr">François</Greetings>
      <Greetings lang="es">Carol</Greetings>
      <Greetings lang="en">Henri</Greetings>
      <Random min={1} max={6} />
      <Random min={1} max={100} />
      <BoxColor r={255} g={0} b={0} />
      <BoxColor r={128} g={255} b={0} />
      <CreditCard
        type="Visa"
        number="0123456789018845"
        expirationMonth={3}
        expirationYear={2021}
        bank="BNP"
        owner="Maxence Bouret"
        bgColor="#11aa99"
        color="white"
      />
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
      <CreditCard
        type="Visa"
        number="0123456789016984"
        expirationMonth={12}
        expirationYear={2019}
        bank="Name of the Bank"
        owner="Firstname Lastname"
        bgColor="#ddbb55"
        color="white"
      />
    </div>
  );
}

export default App;
