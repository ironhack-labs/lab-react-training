import React from 'react';
import './App.css';
import Greetings from './components/Greetings'
import Card from './components/Card'

function App() {
  return (
    <div className="App">
      <Card pic="img/persons/maxence.png" firstName="Max" lastName="Doe" gender="N/A" height="1.60m" birthdate="June 11, 1983"/>
      <Greetings lang="cat">Alba</Greetings>
    </div>
  );
}

export default App;
