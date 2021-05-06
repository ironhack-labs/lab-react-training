import React from 'react';
import './App.css';

import IdCard from './components/idCard/IdCard';
import Greetings from './components/greetings/Greetings';
import Random from './components/random/Random';

function App() {
  return (
    <div className="App">
        <IdCard
          lastName='Doe'
          firstName='John'
          gender='male'
          height={178}
          birth={new Date("1992-07-14")}
          picture="https://randomuser.me/api/portraits/men/44.jpg"
        />
        <br />
        <Greetings lang="de">Ludwig</Greetings>
        <Greetings lang="fr">François</Greetings>
        <br />
        <Random min="5" max="8"/>
    </div>
  );
}

export default App;
