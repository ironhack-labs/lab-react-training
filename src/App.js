import './App.css';
import React from 'react';
import IdCard from './components/IdCard.js';
import Greetings from './components/Greetings.js';
import Random from './components/Random.js';

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
        <Random min={1} max={6}></Random>
        <Random min={1} max={100}></Random>
      </div>

    </div>
  );
}

export default App;
