import React from 'react';
// import logo from './logo.svg';
import IdCard from './Components/BoxColor/IdCard/IdCard'
import Greetings from './Components/BoxColor/Greetings/Greetings'
import Random from './Components/BoxColor/Random/Random'
import BoxColor from './Components/BoxColor/BoxColor'
import CreditCard from './Components/BoxColor/CreditCard/CreditCard'
import './App.css';

function App() {
  return (
    <div className="App">
      <h2>Interation 1</h2>
      <h1>IdCard</h1>
      <IdCard
        picture="https://randomuser.me/api/portraits/men/44.jpg"
        lastName="Doe"
        firstName="John"
        gender="male"
        height={178}
        birth={'1992-07-14'}
      />

      <IdCard
        lastName="Delores "
        firstName="Obrien"
        gender="female"
        height={172}
        birth={'1988-05-11'}
        picture="https://randomuser.me/api/portraits/women/44.jpg"
      />
<h2>Interaction 2</h2>
<Greetings lang="de">Ludwig</Greetings>
<Greetings lang="fr">François</Greetings>

<h2>Interaction 3</h2>
<Random min={1} max={6}/>
<Random min={1} max={100}/>

<h2>Interaction 4</h2>
<BoxColor r={255} g={0} b={0} />
<BoxColor r={128} g={255} b={0} />

<h2>Interaction 5</h2>
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
  );
}



export default App;
