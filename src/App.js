import React from 'react';
import './App.css';
import Greetings from './components/Greetings';
import IdCard from './components/IdCard';
import Random from './components/Random';
import BoxColor from './components/BoxColor';


function App() {

  const card = [
    {
      lastName: 'Doe',
      firstName: 'John',
      gender: 'male',
      height: 178,
      birth: new Date("1992-07-14"),
      picture: "https://randomuser.me/api/portraits/men/44.jpg"
    },
    {
      lastName: 'Delores ',
      firstName: 'Obrien',
      gender: 'female',
      height: 172,
      birth: new Date("1988-05-11"),
      picture: "https://randomuser.me/api/portraits/women/44.jpg"
    }
  ]

  const cards = card.map(thisCard => {
    return (
      <IdCard lastname={thisCard.lastName}
              firstName={thisCard.firstName} 
              gender={thisCard.gender} 
              height={thisCard.height} 
              birth={thisCard.birth.toLocaleDateString()}
              picture={thisCard.picture}
       />
    )
  })

  return (
    <div className="app">
      <h1>IdCards</h1>
      {cards}
      <h1>Greetings</h1>
      <Greetings lang="pt">Lourenço</Greetings>
      <Greetings lang="es">Juan</Greetings> 
      <Greetings>Jack</Greetings> 
      <h1>Random</h1>
      <Random min={1} max={6}/>
      <Random min={1} max={100}/>
      <h1>BoxColor</h1>
      <BoxColor r={255} g={0} b={0} />
      <BoxColor r={128} g={255} b={0} />
    </div>
  );
}

export default App;