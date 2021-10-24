import React from 'react';
import logo from './logo.svg';
import './App.css';
import IdCard from './idCard/IdCard';
import Greetings from './greetings/Greetings';
import Random from './random/Random';
import BoxColor from './boxcolor/BoxColor';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>
          <div className="component">
            <IdCard
              lastName="Doe"
              firstName="John"
              gender="male"
              height={178}
              birth={new Date('1992-07-14')}
              picture="https://randomuser.me/api/portraits/men/44.jpg"
            />
          </div>
          <div className="component">
            <IdCard
              lastName="Delores "
              firstName="Obrien"
              gender="female"
              height={172}
              birth={new Date('1988-05-11')}
              picture="https://randomuser.me/api/portraits/women/44.jpg"
            />
          </div>
        </div>

        <div>
          <div className="component">
            <Greetings lang="de">Ludwig</Greetings>
          </div>
          <div className="component">
            <Greetings lang="fr">François</Greetings>
          </div>
          <div className="component">
            <Greetings lang="es">Anna</Greetings>
          </div>
        </div>

        <div>
          <div className="component">
            <Random min={1} max={6} />
          </div>
          <div className="component">
            <Random min={1} max={100} />
          </div>
        </div>

        <div>
          <div>
            <BoxColor r={255} g={0} b={0} />
          </div>
          <div>
            <BoxColor r={128} g={255} b={0} />
          </div>
        </div>

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
