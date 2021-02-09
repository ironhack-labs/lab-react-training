import React from 'react';
import './App.css';
import IdCard from './components/IdCard/IdCard';
import './App.css';	
import Greetings from './components/Greetings/Greetings';

function App() {
  return (
    <main>
      <h1>Iteration 1 IDCard</h1>
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
      <h1>Iteration 2 Greetings</h1>
      <Greetings lang="de">Ludwig</Greetings>
      <Greetings lang="fr">François</Greetings>

    </main>
  );
}

export default App;


