import React from 'react';

import './App.css';
import IdCard from './components/idcard/IdCard.jsx';
import Greetings from './components/greetings/Greetings.jsx';

function App() {
  return (
    <div className="App">
      <IdCard
        picture="https://randomuser.me/api/portraits/men/44.jpg"
        firstName="John"
        lastName="Doe"
        gender="male"
        height="178"
        birth=" 1992-07-14"
      />
      <IdCard
        picture="https://randomuser.me/api/portraits/women/44.jpg"
        lastName="Delores"
        firstName="Obrien"
        gender="female"
        height="172"
        birth="1988-05-11"
      />
      <Greetings lang="de">Hallo Ludwig</Greetings>
      <Greetings lang="fr">Bonjour François</Greetings>
    </div>
  );
}

export default App;
