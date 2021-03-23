import React from 'react';
import logo from './logo.svg';
import './App.css';

import IdCard from './components/IdCard'
import Greetings from './components/Greetings'
import Random from './components/Random'
import BoxColor from './components/BoxColor'



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <h1>First Iteration </h1>
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
      <h1>Second Iteration</h1>
      <Greetings lang="de">Lissa</Greetings>
      <Greetings lang="fr">Anne</Greetings>
      <Greetings lang="es">María</Greetings>
      <Greetings lang="en">John</Greetings>

      <h1>Third Iteration</h1>
      <Random min={1} max={6}/>
      <Random min={1} max={100}/>

      <h1>Fourth Iteration</h1>
      <BoxColor r={255} g={0} b={0} />
      <BoxColor r={128} g={255} b={0} />
</div>
  );
}

export default App;
