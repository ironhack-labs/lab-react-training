import React from 'react';
import logo from './logo.svg';
import './App.css';
import IdCard from "./components/IdCard.jsx";
import Greetings from "./components/greetings.jsx";
import Random from "./components/Random.jsx";
import BoxColor from "./components/BoxColor.jsx";
import CreditCard from "./components/CreditCard.jsx";

function App() {
  return (
    <div className="App">
    <h1>Header number 1</h1>
    <IdCard
  lastName='Doe'
  firstName='John'
  gender='male'
  height={178}
  
  birth={new Date("1992-07-14")}
  picture="https://randomuser.me/api/portraits/men/44.jpg"
/>

<IdCard
  lastName='Delores '
  firstName='Obrien'
  gender='female'
  height={172}
  birth={new Date("1988-05-11")}
  picture="https://randomuser.me/api/portraits/women/44.jpg"
/>

<Greetings
lang="de"

>
  Ludwig
</Greetings>

<Greetings
lang="fr"

>
  Françoise
</Greetings>

<Random 
min={1} max ={6}
></Random>

<Random 
min={1} max ={100}
></Random>


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
  logo="img/visa.png"/>
<CreditCard
  type="Master Card"
  number="0123456789010995"
  expirationMonth={3}
  expirationYear={2021}
  bank="N26"
  owner="Maxence Bouret"
  bgColor="#eeeeee"
  color="#222222"
  logo="img/master-card.svg" />
<CreditCard
  type="Visa"
  number="0123456789016984"
  expirationMonth={12}
  expirationYear={2019}
  bank="Attijari"
  owner="Mohammed Adib"
  bgColor="#ddbb55"
  color="white" 
  logo="img/visa.png"/>

    </div>
  );
}

export default App;
