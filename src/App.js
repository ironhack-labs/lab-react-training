import React from 'react';
import './App.css';
import IdCard from './components/IdCard/IdCard';

const idCardsArray = [
  {
    firstName: 'Doe',
    lastName: 'John',
    gender: 'male',
    height: 178,
    birth: '1992-07-14',
    picture: 'https://randomuser.me/api/portraits/men/44.jpg',
  }
];

function App() {
  return (
    <div className="App">
      {idCardsArray.map((card, i) => (
        <IdCard
          firstName={card.firstName}
          lastName={card.lastName}
          gender={card.gender}
          height={card.height}
          birth={card.birth}
          picture={card.picture}
          key={i}
        />
      ))}
    </div>
  );
}

export default App;
