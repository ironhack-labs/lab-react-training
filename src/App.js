import React from 'react';
import './App.css';
import IdCard from './components/idcard/IdCard';
import Greetings from './components/greetings/Greetings';
import Random from './components/random/Random.jsx';
import BoxColor from './components/boxcolor/BoxColor.jsx';
import CreditCard from './components/creditcard/CreditCard.jsx'

function App() {
  return (
    <div className="App">
      <h1>IdCard</h1>
      <IdCard
        lastName='Doe'
        firstName='John'
        gender='male'
        height='178'
        birth="1992-07-14"
        picture="https://randomuser.me/api/portraits/men/44.jpg"
      />
      <IdCard
        lastName='Delores '
        firstName='Obrien'
        gender='female'
        height='172'
        birth="1988-05-11"
        picture="https://randomuser.me/api/portraits/women/44.jpg"
      />
      <hr/>

      <h1>Greetings</h1>
      <Greetings lang="de">Ludwig</Greetings>
      <Greetings lang="fr">François</Greetings>
      <hr/>
      
      <h1>Random</h1>
      <Random min={1} max={6}/>
      <Random min={1} max={100}/>
      <hr/>

      <h1>BoxColor</h1>
      <BoxColor r={255} g={0} b={0} />
      <BoxColor r={128} g={255} b={0} />
      <hr/>

      <div className="cards">
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
        bank="Sabadell"
        owner="Andrei Tudorica"
        bgColor="#ddbb55"
        color="white" />
      </div>
      <hr/>

      
      
    </div>
  );
}

export default App;
