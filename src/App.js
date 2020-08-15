import React from 'react';
import './App.css';

import IdCard from './components/Idcard/IdCard';
import Greetings from './components/Greetings/Greetings';
import Random from './components/Random/Random';

function App() {
  return (
    <div className="App">
        <h3>The ID card</h3>

        <IdCard
          lastName='Doe'
          firstName='John'
          gender='male'
          height={178}
          birth={new Date("1992-07-14")}
          picture="https://randomuser.me/api/portraits/men/44.jpg"
        />

        <IdCard
          lastName='Delores '
          firstName='Obrien'
          gender='female'
          height={172}
          birth={new Date("1988-05-11")}
          picture="https://randomuser.me/api/portraits/women/44.jpg"
        />
      
        <h3>The greetings</h3>
        <Greetings lang="de">Ludwig</Greetings>
        <Greetings lang="fr">François</Greetings>

        <h3>The random number</h3>
        <Random min={1} max={6} />
        <Random min={1} max={100} />

      </div>
  );
}

export default App;
