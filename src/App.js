import React from 'react';
import './App.css';
import IdCard from './components/IdCard';
import Greetings from './components/Greetings';
import Random from './components/Random';
import BoxColor from './components/BoxColor';
import CreditCard from './components/CreditCard';
import Rating from './components/Rating'
function App() {
  return (
    <div className="App">

      <h1 className="title-greetings"><strong>IdCard</strong></h1>

      <IdCard
        lastName='Doe'
        firstName='John'
        gender='male'
        height='178'
        birth="1992-07-14"
        picture="https://randomuser.me/api/portraits/men/44.jpg"
      />

      <IdCard
        lastName='Delores '
        firstName='Obrien'
        gender='female'
        height='172'
        birth="1988-05-11"
        picture="https://randomuser.me/api/portraits/women/44.jpg"
      />

      <h1 className="title-greetings"><strong>Grettings</strong></h1>

      <Greetings lang="de">Ludwig</Greetings>
      <Greetings lang="fr">François</Greetings>

      <h1 className="title-greetings"><strong>Random</strong></h1>



      <Random min={1} max={6} />
      <Random min={1} max={100} />


      <h1 className="title-greetings"><strong>BoxColor</strong></h1>

      <BoxColor className="App-boxcolor" r={255} g={0} b={0} />
      <BoxColor r={128} g={255} b={0} />


      <h1 className="title-greetings"><strong>CreditCard</strong></h1>

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


      <h1 className="title-Rating"><strong>Rating</strong></h1>

      <Rating>0</Rating>
      <Rating>1.49</Rating>
      <Rating>1.5</Rating>
      <Rating>3</Rating>
      <Rating>4</Rating>
      <Rating>5</Rating>

    </div>
  );
}

export default App;
