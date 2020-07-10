import React from 'react';
import './App.css';
import Greetings from './components/Greetings'
import IdCard from './components/IdCard';

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

      <Greetings lang="fr">Marcela</Greetings>
      <Greetings lang="es">Roger</Greetings>
      <Greetings lang="de">Paio</Greetings>
      <Greetings lang="en">Lua</Greetings>

    </div>
  );
}

export default App;
