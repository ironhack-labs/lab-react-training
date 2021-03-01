import React from 'react';
import './App.css';

import IdCard from './component/IdCard';
import Greetings from './component/Greetings';
import Random from './component/Random';
import BoxColor from './component/BoxColor';
import CreditCard from './component/CreditCard';
import Rating from './component/Rating';

function App() {
  return (
    <div className="App">
      <h1>IdCard</h1>
      <div className="Id-Card">
      <IdCard
        lastName='Doe'
        firstName='John'
        gender='male'
        height={178}
        birth={new Date("1992-07-14")} >
        <img id="image" src="https://randomuser.me/api/portraits/men/44.jpg" alt="" />
      </IdCard>
      </div>
      <div className="Id-Card">
      <IdCard
        lastName='Delores'
        firstName='Obrien'
        gender='female'
        height={172}
        birth={new Date("1988-05-11")} >
        <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="" />
        </IdCard>
      </div>
      <h1>Greetings</h1>
      <div className="Greetings">
      <Greetings lang="de">Ludwig</Greetings>
      </div>
      <div className="Greetings">
      <Greetings lang="fr">François</Greetings>
      </div>
      <h1>Random</h1>
      <div className="Random">
      <Random min={1} max={6}/>
      <Random min={1} max={100}/> 
      </div>
      <h1>BoxColor</h1>
      <div>
      <BoxColor r={255} g={0} b={0} />
      <BoxColor r={128} g={255} b={0} />
      </div>
      <h1>CreditCard</h1>
      <div className="credit-card">
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
      <h1>Rating</h1>
      <div className="Rating">
       <Rating>0</Rating>
       <Rating>1.49</Rating>
       <Rating>1.5</Rating>
       <Rating>3</Rating>
       <Rating>4</Rating>
       <Rating>5</Rating>
       </div>
    </div>
  );
}


export default App;
