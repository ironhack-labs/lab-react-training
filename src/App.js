import React from 'react';
//import logo from './logo.svg';
import './App.css';
import IdCard from './components/IdCard'
import Greetings from './components/Greetings'
import Random from './components/Random'

function App() {
  return (
    <div className="App">
      <h1>Iteration 1</h1>
      <IdCard
        lastName='Doe'
        firstName='John'
        gender='male'
        height={178}
        birth={new Date("1992-07-14").toDateString()}
        picture="https://randomuser.me/api/portraits/men/44.jpg"
      />
      <IdCard
        lastName='Delores '
        firstName='Obrien'
        gender='female'
        height={172}
        birth={new Date("1988-05-11").toDateString()}
        picture="https://randomuser.me/api/portraits/women/44.jpg"
      />
      <h1>Iteration 2</h1>
      <Greetings lang="de">Ludwig</Greetings>
      <Greetings lang="fr">François</Greetings>
      <Greetings lang="es">Alicia</Greetings>
      <Greetings lang="en">William</Greetings>

      <h1>Iteration 3</h1>
      <Random min={1} max={6}/>
      <Random min={1} max={100}/>

      <h1>Iteration 4</h1>

      
    </div>
  );
}

export default App;
