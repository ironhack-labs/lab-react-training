import './App.css';
import React from 'react';
import IdCard from './components/IdCard.js';
import Greetings from './components/Greetings.js';
import Random from './components/Random.js';
import BoxColor from './components/BoxColor.js';
import CreditCard from './components/CreditCards';

function App() {
  return (
    <div className="App">
      <h1>hello</h1>
      <IdCard 
        firstName='John'
        lastName='Doe'
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
      <div className="Greetings">
        <Greetings lang="fr">Hélène</Greetings>
        <Greetings lang="es">Adriana</Greetings>
        <Greetings lang="de">Mason</Greetings>
        <Greetings lang="">Knut</Greetings>
      </div>
      <div className='Random'>
        <Random min={1} max={6}/>
        <Random min={1} max={100}/>
      </div>
      <div className='BoxColor'>
        <BoxColor r={255} g={0} b={0} className='RowColor'/>
        <BoxColor r={128} g={255} b={0} className='RowColor'/>
      </div>
      <div className='CreditCard'>
      <CreditCard
        type="Visa" // function
        number="0123456789018845" // function
        expirationMonth={3} // function
        expirationYear={2021} // function
        bank="BNP" // function
        owner="Maxence Bouret" // function
        bgColor="#11aa99" // dans style
        color="white" // dans style
      />         
      <CreditCard
        type="Master Card"
        number="0123456789010995"
        expirationMonth={3}
        expirationYear={2021}
        bank="N26"
        owner="Maxence Bouret"
        bgColor="#eeeeee"
        color="#222222"
      />
      <CreditCard
        type="Visa"
        number="0123456789016984"
        expirationMonth={12}
        expirationYear={2019}
        bank="Name of the Bank"
        owner="Firstname Lastname"
        bgColor="#ddbb55"
        color="white" 
      />
      </div>
    </div>
  );
}

export default App;
