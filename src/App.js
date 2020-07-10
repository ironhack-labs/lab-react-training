import React from 'react';
import logo from './logo.svg';
import './App.css';
import Greetings from './components/Greetings';
import IdCard from './components/IdCard';

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
    console.log(thisCard.birth)
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
    <div>
      <h1>IdCards</h1>
      {cards}
      <h1>Greetings</h1>
      <Greetings lang="pt">Lourenço</Greetings>
      <Greetings lang="es">Juan</Greetings> 
      <Greetings>Jack</Greetings> 
    </div>
  );
}

export default App;

// lastName: A string
// firstName: A string
// gender: A string, 'male' or 'female'
// height: A number
// birth: A date
// picture: A string
