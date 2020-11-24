import React from 'react';
import logo from './logo.svg';
import './App.css';
import IdCard from './IdCards/IdCard';
import Greetings from './Greetings/Greetings';
import Random from './Random/Random';
import BoxColor from './BoxColor/BoxColor';
import CreditCard from './CreditCard/CreditCard'
import Rating from './Rating/Rating';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <IdCard 
          lastName='Reeves'
          firstName='Keanu'
          gender='male'
          height={187}
          birth="02-09-1964"
          picture="https://pyxis.nymag.com/v1/imgs/178/da9/4028eebbb3af66cdae2a1598803e95a4e2-28-keanu-reeves.rsquare.w1200.jpg"/>
        <Greetings lang='de'> Alex </Greetings>
        <Greetings lang='fr'> Xavi </Greetings>
        <Random min={1} max={6}/>
        <Random min={1} max={100}/>
        <BoxColor r={0} g={204} b={102}/>
        <BoxColor r={0} g={102} b={204}/>
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
          bank="ING"
          owner="Luis Garcia"
          bgColor="#ddbb55"
          color="white" />
        <Rating />
        <Rating />
        <Rating />
        <Rating />
        <Rating />
      </header>
    </div>
  );
}

export default App;
