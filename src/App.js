import React from 'react';
import logo from './logo.svg';
import './App.css';
import IdCard from './components/IdCard';
import Greeting from './components/Greeting';
import Random from './components/Random';

function App() {
  return (
    <div className="App">
      <h1>IdCard</h1>
      <IdCard
        lastName="Janssens"
        firstName="Luca"
        gender="male"
        height={177}
        // birth={new Date('1989-06-13')}
        picture="https://timesofindia.indiatimes.com/photo/67586673.cms"
      />
      <Greeting language="de">John</Greeting>
      <Greeting language="es">Luca</Greeting>
      <Random min={3} max={7} />
    </div>
  );
}

export default App;
