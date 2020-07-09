import React from 'react';
import IdCard from './components/IdCard';
import Greetings from './components/Greetings';
import RandomNumber from './components/RandomNumber';
import BoxColor from './components/BoxColor';

function App() {

  const cardData = [
    {
      lastName: "Doe",
      firstName: "John",
      gender: "male",
      height: 178,
      date: (new Date('1992-07-14')),
      picture: "https://randomuser.me/api/portraits/men/44.jpg"
    },
    {
      lastName: "Dolores",
      firstName: "Obrien",
      gender: "female",
      height: 170,
      date: (new Date('1990-07-14')),
      picture: "https://randomuser.me/api/portraits/women/44.jpg"
    }
  ]

  const renderIdCard = cardData.map(user => (
    <IdCard 
      lastName={user.lastName} 
      firstName={user.firstName} 
      gender={user.gender}
      height={user.height}
      birth={user.date}  
      picture={user.picture}
      />
  ))

  return (
    <div className="App">
        {renderIdCard}
        <Greetings lang="en" />
        <Greetings lang="de" />
        <RandomNumber min="1" max="6" />
        <RandomNumber min="1" max="5000" />
        <BoxColor r="255" g="0" b="0" />
        <BoxColor r="122" g="100" b="0" />
        <BoxColor r="128" g="255" b="0" />
        <BoxColor r="0" g="0" b="255" />
    </div>
  );
}

export default App;
