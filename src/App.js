import React from 'react';
import './App.css';
import Greetings from './components/Greetings'
import IdCard from './components/IdCard';
import Random from './components/Random';
import BoxColor from './components/BoxColor';

function App() {

  const persons = [
    {
      img: "/img/persons/maxence-glasses.png",
      firstName: "OBrien",
      lastName: "Doe",
      genger: "male",
      height: "1.78m",
      birth: "Tue Jul 14 1992"
    },
    {
      img: "/img/persons/maxence.png",
      firstName: "Paul",
      lastName: "Doe",
      genger: "male",
      height: "1.73m",
      birth: "Tue May 11 1993"
    }
  ];

  const personsCollection = persons.map(persons => (
    <IdCard
      img={persons.img}
      firstName={persons.firstName}
      lastName={persons.lastName}
      gender={persons.gender}
      height={persons.height}
      birth={persons.birth}
    />)
  )

  return (
    <div className="App">
      <h1>IdCard</h1>
      <div>
        {personsCollection}
      </div>
      <h1>Greetings</h1>
      <div>
        <Greetings lang="fr">Marcela</Greetings>
        <Greetings lang="es">Roger</Greetings>
      </div>
      <h1>Random</h1>
      <div>
        <Random
          min={2}
          max={6}
        />
        <Random
          min={1}
          max={100}
        />

      </div>
        <BoxColor
          r="255"
          g="0"
          b="0"
          color="white"
          hex="#ff0000"
        />
        <BoxColor
          r="128"
          g="255"
          b="0"
          color="black"
          hex="#80ff00"
        />
    </div>
  );
}

export default App;
