import React from 'react';
import logo from './logo.svg';
import './App.css';
import IdCard from './components/IdCard'
import Greetings from './components/Greetings'
import Random from './components/Random'

function App() {
  return (
    <div className="App">
      <div className="container text-left my-4 pb-1">
        <h1>IdCard</h1>
        <IdCard
          lastName='Doe'
          firstName='John'
          gender='male'
          height='178'
          birth='1992-07-14'
          picture="https://randomuser.me/api/portraits/men/44.jpg"
        />
        <IdCard
          lastName='Delores'
          firstName='Obrien'
          gender='female'
          height='172'
          birth='1988-05-11'
          picture="https://randomuser.me/api/portraits/women/44.jpg"
        />
      </div>
      <div className="container text-left my-4 pb-1">
        <h1>Greetings</h1>
        <Greetings
          lang='de'
          children='Ludwig'
        />
        <Greetings
          lang='fr'
          children='François'
        />
      </div>
      <div className="container text-left my-4 pb-1">
        <h1>Random</h1>
        <Random min={1} max={6}/>
        <Random min={1} max={100}/>
      </div>
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
    </div>
  );
}

export default App;
