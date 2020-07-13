import React from 'react';
import './App.css';
import Greetings from './components/Greetings'
import Card from './components/Card'
import Random from './components/Random'
import Color from './components/Color'

function App() {
  return (
    <div className="App">
      <Card pic="img/persons/maxence.png" firstName="Max" lastName="Doe" gender="N/A" height="1.60m" birthdate="June 11, 1983"/>
      <Greetings lang="cat">Alba</Greetings>
      <Random min={1} max={3}/>
      <Color red={0} green={255} blue={0}/>
    </div>
  );
}

export default App;
