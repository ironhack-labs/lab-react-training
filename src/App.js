import React from 'react';
import logo from './logo.svg';
import './App.css';

import BoxColor from './components/BoxColor';
import Greetings from './components/Greetings';
import IdCard from './components/IdCard';
import Random from './components/Random';
import CreditCard from './components/CreditCard';


function App() {
  return (
    <div className="App">
    <h1>Id Card</h1>
      <IdCard
  lastName='Doe'
  firstName='John'
  gender='male'
  height={178}
  birth={new Date("1992-07-14")}
  picture="https://randomuser.me/api/portraits/men/44.jpg"
/>
<br/>

<IdCard
  lastName='Delores '
  firstName='Obrien'
  gender='female'
  height={172}
  birth={new Date("1988-05-11")}
  picture="https://randomuser.me/api/portraits/women/44.jpg"
/>


<h1>Greetings</h1>

<Greetings lang="de">Ludwig</Greetings>
<br/>
<Greetings lang="fr">François</Greetings>


<h1>Random</h1>

<Random min={1} max={6}/>
<br/>
<Random min={1} max={100}/>


<h1>Box Color</h1>

<BoxColor r={255} g={0} b={0} />
<br/>
<BoxColor r={128} g={255} b={0} />


<h1>Credit Card</h1>
<div className="credit-cards">

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
