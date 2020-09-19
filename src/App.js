import React from 'react';
import logo from './logo.svg';
import './App.css';
import IdCard from './components/IdCard';
import Greetings from './components/Greetings';
import Random from './components/Random';
import BoxColor from './components/BoxColor';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <IdCard
          lastName='Doe'
          firstName='John'
          gender='male'
          height={178}
          picture='http://randomuser.me/api/portraits/men/44.jpg'
          birth={new Date("1992-07-14")}
        />
        <IdCard
          lastName='Delores '
          firstName='Obrien'
          gender='female'
          height={172}
          picture='http://randomuser.me/api/portraits/women/44.jpg'
          birth={new Date("1988-05-11")}
        />

        <Greetings lang="en">Ludwig</Greetings>
        <Greetings lang="fr">François</Greetings>

        <Random min={1} max={6} />
        <Random min={1} max={100} />

        <BoxColor r={255} g={0} b={0} color='white' />
        <BoxColor r={128} g={255} b={0} color='black' />

        
      </header>
    </div>
  );
}

export default App;
