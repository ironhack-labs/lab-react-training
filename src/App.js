import React from 'react';
import './App.css';
import IdCard from './id';
import Greeting from './greeting';

function App() {
  return (
    <div className="App">
      <IdCard
        lastName="Doe"
        firstName="John"
        gender="male"
        height={178}
        date="1992-07-14"
        picture="https://randomuser.me/api/portraits/men/44.jpg"
      />
      <IdCard
        lastName="Delores"
        firstName="Obrien"
        gender="female"
        height={172}
        date="1988-05-11"
        picture="https://randomuser.me/api/portraits/women/44.jpg"
      />
      <Greeting lang="de">Ludwig</Greeting>
      <Greeting lang="fr">François</Greeting>
    </div>
  );
}

export default App;
