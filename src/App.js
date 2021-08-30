import React from 'react';
import './App.css';
import IdCard from './components/idCard/IdCard';
import Greetings from './components/greetings/Greetings';
import Random from './components/random/Random.jsx';
import BoxColor from './components/boxColor/BoxColor';

function App() {
  return (
    <div className="App">
      <h1>IdCard</h1>
      <IdCard
        lastName="Doe"
        firstName="John"
        gender="male"
        height={178}
        birth={new Date('1992-07-14').toDateString()}
        picture="https://randomuser.me/api/portraits/men/44.jpg"
      />
      <IdCard
        lastName="Delores"
        firstName="Obrien"
        gender="female"
        height={172}
        birth={new Date('1988-05-11').toDateString()}
        picture="https://randomuser.me/api/portraits/women/44.jpg"
      />
      <h1>Greetings</h1>
      <Greetings lang="de" children="Ludwig"></Greetings>
      <Greetings lang="fr" children="François"></Greetings>
      <h1>Random</h1>
      <Random min={1} max={6} />
      <Random min={1} max={100} />
      <h1>BoxColor</h1>
      <BoxColor r={255} g={0} b={0} />
      <BoxColor r={128} g={255} b={0} />
    </div>
  );
}

export default App;
