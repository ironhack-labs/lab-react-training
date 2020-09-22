import React from 'react';
import logo from './logo.svg';
import IdCard from './idcard/IdCard';
import Greetings from './greetings/Greetings';
import Random from './random/Random';
import BoxColor from './boxcolor/BoxColor';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>hello world</h1>
      <IdCard
        imgId="../img/persons/maxence.png"
        firstName="John"
        lastName="Doe"
        gender="male"
        height="1.80cm"
        birth="10 Jun 1989"
      />
      <br />
      <Greetings lang="es" name="Rachel" />
      <br />
      <Random min={5} max={8} />
      <br />
      <BoxColor r={58} g={123} b={50} color="white" />
    </div>
  );
}

export default App;
