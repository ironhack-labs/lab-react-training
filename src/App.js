import React from 'react';
import './App.css';
import Boxcolor from './components/BoxColor';
import CreditCard from './components/CreditCard';
import Greetings from './components/Greetings';
import IdCard from './components/IdCard/IdCard';
import Random from './components/Random';
import Rating from './components/Rating';

const idCard = {
  firstName: 'Doe',
  lastName: 'John',
  gender: 'male',
  height: 178,
  birth: '1992-07-14',
  picture: 'https://randomuser.me/api/portraits/men/44.jpg',
};

function App() {
  return (
    <div className="App">
      <IdCard
        firstName={idCard.firstName}
        lastName={idCard.lastName}
        gender={idCard.gender}
        height={idCard.height}
        birth={idCard.birth}
        picture={idCard.picture}
      />
      <Greetings lang="es">Paco</Greetings>
      <Random max={10} min={1} />
      <Boxcolor r={255} g={0} b={0} />
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
