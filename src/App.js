import React from 'react';
import './App.css';
import IdCards from './Components/IdCards';
import Greetings from './Components/Greetings';
import Random from './Components/Random';
import BoxColor from './Components/BoxColor';
import CreditCard from './Components/CreditCard';

function App() {
  return (
    <div className="App">
      <IdCards
        lastName="Cranston"
        firstName="Bryan"
        gender="male"
        height={179}
        birth="1956-03-07"
        picture="http://www.gstatic.com/tv/thumb/persons/164311/164311_v9_bb.jpg"
      />
      <IdCards
        lastName="Murphy"
        firstName="Cillian"
        gender="male"
        height={175}
        birth="1976-05-25"
        picture="https://upload.wikimedia.org/wikipedia/commons/a/a5/Cillian_Murphy_Press_Conference_The_Party_Berlinale_2017_02cr.jpg"
      />
      <Greetings lang="fr">Timothée</Greetings>
      <Greetings lang="en">Antoine</Greetings>
      <Greetings lang="ti">franck</Greetings>
      <Random min={1} max={6} />
      <Random min={1} max={100} />
      <BoxColor r={145} g={0} b={50} />
      <BoxColor r={150} g={10} b={100} />
      <CreditCard
        type="visa.png"
        number="0123456789018845"
        expirationMonth={3}
        expirationYear={2021}
        bank="BNP"
        owner="Maxence Bouret"
        bgColor="#11aa99"
        color="white"
      />
      <CreditCard
        type="master-card.svg"
        number="0123456789010995"
        expirationMonth={3}
        expirationYear={2021}
        bank="N26"
        owner="Maxence Bouret"
        bgColor="#eeeeee"
        color="#222222"
      />
      <CreditCard
        type="visa.png"
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
