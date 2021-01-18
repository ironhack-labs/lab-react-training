import React from 'react';
import './App.css';
import IdCard from './components/IdCard'
import Greetings from './components/Greetings'

function App() {

  return (
    <div className="App">
      <h1>IdCard</h1>
      <IdCard
        lastName='Delores'
        firstName='Obrien'
        gender='female'
        height={172}
        birth={new Date("1988-05-11").toDateString()}
        picture="https://randomuser.me/api/portraits/women/44.jpg"
      />
      <h1>Greetings</h1>
      <Greetings lang='es'>José</Greetings>
      <Greetings lang='de'>Andrea</Greetings>
      <Greetings lang='en'>Andrew</Greetings>
    </div>
  );
}

export default App;
