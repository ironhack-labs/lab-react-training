import React from 'react';
import logo from './logo.svg';
import './App.css';
import IdCard from './components/IdCard';
import Greetings from './components/Greetings';
import Random from './components/Random';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>ID Card</h1>
        <p className="idCard_container">
          <IdCard
            lastName="Doe"
            firstName="John"
            gender="male"
            height={178}
            birth={new Date('1992-07-14')}
            picture="https://randomuser.me/api/portraits/men/44.jpg"
          />
          <IdCard
            lastName="Delores "
            firstName="Obrien"
            gender="female"
            height={172}
            birth={new Date('1988-05-11')}
            picture="https://randomuser.me/api/portraits/women/44.jpg"
          />
        </p>
        <p>
          <Greetings lang="de">Ludwig</Greetings>
          <Greetings lang="fr">François</Greetings>
        </p>
        <p>
          <Random min={1} max={6} />
          <Random min={1} max={100} />
        </p>
      </header>
    </div>
  );
}

export default App;
