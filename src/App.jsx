import React from 'react';
import logo from './logo.svg';
import './App.css';

// components
import IdCard from './components/idCard' ;
import Greeting from './components/greeting' ;
import Random from './components/Random' ;
import BoxColor from './components/BoxColor'
import CreditCard from './components/CreditCard'

const dateFormat = require("dateformat");


function App() {
  return (
    <div className="App">
    <h1>Iteration 1</h1>
    <IdCard
      lastName='Doe'
      firstName='John'
      gender='male'
      height={178}
      birth={dateFormat(new Date("1992-07-14"), "ddd mmm dd yyyy")}
      picture="https://randomuser.me/api/portraits/men/44.jpg"
    />

    <IdCard
      lastName='Delores '
      firstName='Obrien'
      gender='female'
      height={172}
      birth={dateFormat(new Date("1988-05-11"), "ddd mmm dd yyyy")}
      picture="https://randomuser.me/api/portraits/women/44.jpg"
    />

    <h2>Iteration 2</h2>

      <Greeting
        lang="de"
        children="Marc"
      />
      <Greeting
        lang="es"
        children="Benji"
      />

      <h3>Iteration 3</h3>
      <Random
        min={4}
        max={10}
      />

      <h4>Iteration 4</h4>
      <BoxColor r={100} g={2} b={3}/>
      <BoxColor r={255-100} g={255-2} b={255-3}/>
      <BoxColor r={100} g={200} b={33}/>

      <h5>Iteration 5</h5>

      <div id="credit-card">
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
