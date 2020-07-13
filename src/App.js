import React from 'react';
import './App.css';
import Greetings from './components/Greetings';
import IdCard from './components/IdCard';

function App() {
  const getBirthDate = (date) => {
    const rawDate = new Date(date);
    return rawDate.toDateString();
  };
  const dotHeight = (height) => {
    let cleanHeight = height.toString().split('');
    cleanHeight.splice(cleanHeight.length - 2, 0, '.').join('');
    return cleanHeight.join('');
  };
  const cards = [
    {
      lastName: 'Doe',
      firstName: 'John',
      gender: 'male',
      height: dotHeight(178),
      birth: getBirthDate('1992-07-14'),
      picture: 'https://randomuser.me/api/portraits/men/44.jpg',
    },
    {
      lastName: 'Delores',
      firstName: 'Obrien',
      gender: 'female',
      height: dotHeight(172),
      birth: getBirthDate('1988-05-11'),
      picture: 'https://randomuser.me/api/portraits/women/44.jpg',
    },
  ];
  const cardsList = cards.map((el) => (
    <IdCard
      key={el.lastName}
      lastName={el.lastName}
      firstName={el.firstName}
      gender={el.gender}
      height={el.height}
      birth={el.birth}
      picture={el.picture}
    />
  ));

  return (
    <div className="App">
      <div id="IdCard">{cardsList}</div>
      <Greetings lang="pt">Lourenço</Greetings>
      <Greetings lang="es">Marcos</Greetings>
      <Greetings>John</Greetings>
    </div>
  );
}

export default App;
