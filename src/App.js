import React, { Fragment } from 'react';
import './App.css';
import IdCard from './components/IdCard'
import Greetings from './components/Greetings'
import Random from './components/Random'



function App() {
  return (
    <Fragment>
    <h1>Id Card</h1>
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
      
      <h1>Greetings</h1>
      <Greetings lang="de">Ludwig</Greetings>
      <Greetings lang="es">Javier</Greetings>
      <Greetings lang="fr">François</Greetings>
      <Greetings lang="en">Danny</Greetings>

      <h1>Random</h1>
      <Random min={1} max={10}/>
      <Random min={20} max={100}/>
  </Fragment>
  );
}

export default App;
