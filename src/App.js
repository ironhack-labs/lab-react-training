import React from 'react';
import IdCard from './components/IdCard'
import Greeting from './components/Greeting'
import logo from './logo.svg';
import './App.css';

function App() {
  return (
  <React.Fragment>
    <div className="App">
      <IdCard
        lastName='Doe'
        firstName='John'
        gender='male'
        height={178}
        birth={new Date("1992-07-14").toDateString()}
        picture="https://randomuser.me/api/portraits/men/44.jpg"
      />
    </div>

    <div className="App">
      <IdCard
        lastName='Delores '
        firstName='Obrien'
        gender='female'
        height={172}
        birth={new Date("1988-05-11").toDateString()}
        picture="https://randomuser.me/api/portraits/women/44.jpg"
        />
    </div>

    <Greeting lang="de">Ludwig</Greeting>
    <Greeting lang="fr">François</Greeting>
    <Greeting lang="es">Bella</Greeting>
    <Greeting lang="en">Adam</Greeting>

  </React.Fragment>
  );
}

export default App;
