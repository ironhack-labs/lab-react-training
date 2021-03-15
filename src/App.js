import React from 'react';
// import logo from './logo.svg';
import './App.css';
import IdCard from './Components/IdCard';
import Greetings from './Components/Greetings';
import Random from './Components/Random';
import BoxColor from './Components/BoxColor';
import CreditCard from './Components/CreditCard';

function App() {
  return (
    <div className="App">
      <IdCard
        lastName="Doe"
        firstName="John"
        gender="male"
        height={178}
        birth={new Date('1992-07-14').toDateString()}
        picture="https://randomuser.me/api/portraits/men/44.jpg"
      />
      <Greetings lang="fr">John</Greetings>
      <Random min={1} max={6} />

      <BoxColor r={255} g={85} b={150} />

      <CreditCard 
       type="Visa"
       number="0123456789010995"
       expirationMonth="12"
       expirationYear="2019"
       bank="BNP"
       owner="Maxence Bouret"
       bgColor="#ddbb55"
       color="white"
       />

    </div>
  );
}

export default App;
