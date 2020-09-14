import React from 'react';
import logo from './logo.svg';
import './App.css';
import IdCard from './Components/IdCard'
import Greetings from './Components/Greetings'
import Random from './Components/Random'

function App() {
  return (<div className="App" >
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

    {/* <IdCard lastName="Doe"
      firstName="John"
      gender="male"
      height={
        180
      }
      birth={
        Date("1992-07-14")
      }
      picture="https://randomuser.me/api/portraits/men/44.jpg" /> */}

    {/* <Greetings lang="fr">François</Greetings> */}

    {/* <Random min={1} max={3} /> */}

  </div>
  );
}

export default App;