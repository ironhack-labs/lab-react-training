import React from 'react';
import './App.css';
import IdCard from './components/idcard/IdCard';
import Greetings from './components/greetings/Greetings';
import Random from './components/random/Random';
import BoxColor from './components/boxcolor/BoxColor';
import CreditCard from './components/creditcard/CreditCard';
import Rating from './components/rating/Rating';

function App() {
  function integerToMeters(num){
    return `${num / 100}m`;
  }

  return (
    <div className="App">
      <h1>Id Card</h1>
      <IdCard firstName="John" lastName="Doe" gender="male" height={integerToMeters(178)} picture="https://randomuser.me/api/portraits/men/44.jpg" dob={new Date("1992-07-15")} />

      <IdCard firstName="Dolores" lastName="Obrien" gender="female" height={integerToMeters(172)} picture="https://randomuser.me/api/portraits/women/44.jpg" dob={new Date("1993-05-12")} />

      <hr />
      <div>
        <Greetings lang='de'>Ludwig</Greetings>
      </div>
      <div>
        <Greetings lang='fr'>François</Greetings>
      </div>
      <hr />

      <div>
        <Random min="1" max="6" />
      </div>
      <div>
        <Random min="1" max="100" />
      </div>

      <hr />

      <BoxColor r='255' g='0' b='0' />
      <BoxColor r='128' g='255' b='0' />

      <hr />

      <CreditCard bgColor="#11aa99" type="Visa" number="0123456789018845" expirationMonth="3" expirationYear="2021" bank="BNP" owner="Maxence Bouret"/>
      <CreditCard type="Master Card" number="0123456789010995" expirationMonth={3} expirationYear={2021} bank="N26"owner="Maxence Bouret" bgColor="#eeeeee" color="#222222" />
      <CreditCard type="Visa"number="0123456789016984"expirationMonth={12}expirationYear={2019}bank="Name of the Bank"owner="Firstname Lastname" bgColor="#ddbb55" color="white" />
    <hr/>
      <div>
        <Rating>0</Rating>
      </div>
      
      <div>
        <Rating>1.49</Rating>
      </div>
      
      <div>
        <Rating>1.5</Rating>
      </div>
      
      <div>
        <Rating>3</Rating>
      </div>
      
      <div>
        <Rating>4</Rating>
      </div>
  
      <div>
        <Rating>5</Rating>
      </div>

    </div>
  );
}

export default App;
