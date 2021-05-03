import React from 'react';
import './App.css';

import IdCard from './components/IdCard';
import Greetings from './components/Greetings'

const App = () => {
  return (
    <div className="App">
      <h1 className="m-5">React training💪</h1>
      <h2 className="m-5">Iteration 1️⃣</h2>
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

      <h2> Iteation 2️⃣</h2>
      <Greetings lang="de">Ludwig</Greetings>
      <Greetings lang="fr">François</Greetings>
      <Greetings lang="es">Raquel</Greetings>
      <Greetings lang="en">Peter</Greetings>


    </div>
  );
}

export default App;
