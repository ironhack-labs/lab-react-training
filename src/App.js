import React from 'react';
import './App.css';
import IdCard from './IdCard';
import Greetings from './Greetings';
import Random from './Random';
import BoxColor from './BoxColor';
import CreditCard from './CreditCard';

function App() {
  return (
    <div className="App">
      <IdCard
        lastName="Alossi"
        firstName="Rich"
        gender="male"
        height="175"
        birth="1985-01-28"
        picture="https://www.myrtlebeachonline.com/latest-news/w5f2l3/picture244574487/alternates/FREE_768/zombie%20greg"
      />
      <IdCard
        lastName="Holloway"
        firstName="Jake"
        gender="male"
        height="180"
        birth="1983-06-06"
        picture="https://cdn.mos.cms.futurecdn.net/4xnGvCxSExkxBeBgYbRQfj-1024-80.jpg.webp"
      />
      <Greetings lang="it">Nora</Greetings>
      <Greetings lang="de">Arielle</Greetings>
      <Random min={1} max={6} />
      <Random min={1} max={100} />
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
  );
}

export default App;
