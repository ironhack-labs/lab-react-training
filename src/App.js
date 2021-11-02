import React from 'react';
// import logo from './logo.svg';
import './App.css';
import IdCard from "./IdCard";
import Greetings from "./Greetings";
import LanguageList from './LanguageList';
import Random from "./Random";
import CreditCard from "./CreditCard";
import LikeButton from "./LikeButton";


function App() {
  return (
    <div className="App">
      <h1>IdCard</h1>
        <IdCard lastName='Doe' firstName='John' gender='male' height="178cm" birth= "1992-07-14" picture="https://randomuser.me/api/portraits/men/44.jpg" />
        <br />
        <IdCard lastName='Delores' firstName='Obrien' gender='female' height="172cm" birth="1988-05-11" picture="https://randomuser.me/api/portraits/women/44.jpg"/>

      <h1>Greetings</h1>
      <LanguageList>
        <Greetings de = "Hallo" en = "Hello" es = "Hola" fr = "Hello"/>
      </LanguageList>

      <h1>Random</h1>
      <Random min={1} max={6} />   <br />
      <Random min={1} max={100} />

      <h1>CreditCard</h1>

      <CreditCard type= "Visa" number= "0123456789018845" expirationMonth ={11} expirationYear = {2021} bank ="Iron Bank" owner = "Lola Doe" bgColor= "#11aa99" color="white" />
      <CreditCard type="Master Card" number="0123456789010995"  expirationMonth={3} expirationYear={2021}  bank="N26" owner="Maxence Bouret" bgColor="#eeeeee" color="#222222" />
      <CreditCard type="Visa" number="0123456789016984" expirationMonth={12} expirationYear={2019} bank="Bank Broke" owner="Bob Doe" bgColor="#ddbb55" color="white" />

      
      <h1>Likes</h1>
      <LikeButton /> 
     
    </div>
  );
}

export default App;
