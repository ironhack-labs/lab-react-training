import React, { Component } from 'react';

import IdCard from "./components/Idcard.js"
import Greetings from "./components/Greetings.js"
import Random from "./components/Random.js"
import BoxColor from "./components/BoxColor.js"
import CreditCard from "./components/CreditCard.js"
import CreditCard2 from "./components/CreditCard2.js"



class App extends Component {
  render() {
    return (
    <div className="App">


    <h1>IdCard</h1> 
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
          lastName='Dolores'
          firstName='Obrien'
          gender='female'
          height={172}
          birth={new Date("1993-05-10")}
          picture="https://randomuser.me/api/portraits/women/44.jpg"
    />
     
    <h1>Greetings</h1>
    <Greetings lang="de">Ludwig</Greetings>   <br/>
    <Greetings lang="fr">François</Greetings>
      
    <h1>Random</h1>
    <Random min="1" max="6" />      <br/>
    <Random min="1" max="100" />

    <h1>Box Color</h1>
    <BoxColor r="255" g="0" b="0" />     <br/>
    <BoxColor r="128" g="255" b="0" />

    <h1>Credit Card</h1>
    <CreditCard 
      type="Visa"
      number= "**** **** **** 8845"
      expirationMonth= "03"
      expirationYear= "21"
      bank = "BNP"
      owner = "Maxence Bouret"
      bgColor = "#11aa99"
      color = "white"
    />     <br/>

    <CreditCard2 
      type="Mastercard"
      number= "**** **** **** 0995"
      expirationMonth= "03"
      expirationYear= "21"
      bank = "N26"
      owner = "Maxence Bouret"
      bgColor = "azure"
      color = "black"
    />        <br/>

    <CreditCard 
      type="Visa"
      number= "**** **** **** 6984"
      expirationMonth= "12"
      expirationYear= "19"
      bank = "BNP"
      owner = "Maxence Bouret"
      bgColor = "burlywood"
      color = "white"
    />                   

    <h1>Credit Card</h1>






      </div>
    );
  }
}

export default App;
