import React from 'react';
import './App.css';
import IdCard from './components/IdCard';
import Greetings from './components/Greetings';
import Random from './components/Random';
import BoxColor from './components/BoxColor';
import CreditCard from './components/CreditCard';

function App() {
  return (
    <div className="App">

      <Greetings lang='fr'>Bernard</Greetings>

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

      <Random min={1} max={6} />
      <Random min={1} max={100} />

      <BoxColor r={171} g={171} b={171} />
      <BoxColor r={9} g={99} b={119} />

      <CreditCard
        type='Visa'
        number="0123456789018845"
        expirationMonth={3}
        expirationYear={2025}
        bank="BNP"
        owner="Bernard Cardoso"
        bgColor="#11aa99"
        color="white" />

    </div>
  );
}

export default App;
