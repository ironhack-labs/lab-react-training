import React from 'react';
import './App.css';

import IdCard from './components/IdCard';
import Greetings from './components/Greetings';
import Random from './components/Random';

function App() {
  const idCard = [
    {
      lastName: 'Doe',
      firstName: 'John',
      gender: 'male',
      height: 178 / 100 + ' m',
      birth: new Date('1992-07-14').toISOString().slice(0, 10),
      picture: 'https://randomuser.me/api/portraits/men/44.jpg',
    },
    {
      lastName: 'Delores',
      firstName: 'Obrien',
      gender: 'female',
      height: 172 / 100 + ' m',
      birth: new Date('1988-05-11').toISOString().slice(0, 10),
      picture: 'https://randomuser.me/api/portraits/women/44.jpg',
    },
  ];

  const idCardMap = idCard.map((card) => (
    <IdCard
      picture={card.picture}
      firstName={card.firstName}
      lastName={card.lastName}
      gender={card.gender}
      height={card.height}
      birth={card.birth}
    />
  ));

  return (
    <div className="App">
      <h1>IdCard</h1>
      {idCardMap}

      <h1>Greetings</h1>
      <Greetings lang="de">Ludwig</Greetings>
      <Greetings lang="fr">François</Greetings>

      <h1>Random</h1>
      <Random min={1} max={6} />
      <Random min={1} max={100} />

      <h1>BoxColor</h1>
    </div>
  );
}

export default App;
