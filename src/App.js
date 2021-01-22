import React from 'react';
import './App.css';
import IdCard from './idcard/IdCard';
import Greetings from './greetings/Greetings';

function App() {
  return (
    <div className="App">
      <h1>IdCard</h1>
        <IdCard picture="https://randomuser.me/api/portraits/men/44.jpg" firstName="John" lastName="Doe" gender="male" height={178} birth={new Date("1992-7-14")} />
        <IdCard picture="https://randomuser.me/api/portraits/women/44.jpg" firstName="Deloris" lastName="Obrien" gender="female" height={172} birth={new Date("1988-5-11")} />

        <h1>Greetings</h1>
        <Greetings lang="de">Ludwig</Greetings>
        <Greetings lang="fr">François</Greetings>
    </div>
  );
}

export default App;
