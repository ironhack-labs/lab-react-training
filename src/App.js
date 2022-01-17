import React from 'react';
import IdCard from './components/idCard/IdCard.js';
import Greetings from './components/greetings/Greetings.js';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* ID Card */}
      <h1>IdCard</h1>
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
      {/* Greetings */}
      <Greetings lang="de">Ludwig</Greetings>
      <Greetings lang="fr">François</Greetings>
      <Greetings lang="au">Jason</Greetings>
    </div>
  );
}

export default App;
