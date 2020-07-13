import React from 'react';
import './App.css';
import Greetings from './components/Greetings';
import IdCard from './components/IdCard';
import Random from './components/Random';
import BoxColor from './components/BoxColor';

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
      <div id="IdCard">
        <h3>Iteration 1</h3>
        {cardsList}
      </div>
      <div id="Greetings">
        <h3>Iteration 2</h3>
        <Greetings lang="de">Ludwig</Greetings>
        <Greetings lang="">John</Greetings>
        <Greetings lang="es">Julio</Greetings>
        <Greetings lang="fr">François</Greetings>
      </div>
      <div id="Random">
        <h3>Iteration 3</h3>
        <Random min={1} max={6} />
        <Random min={1} max={100} />
      </div>
      <div id="BoxColor">
        <h3>Iteration 4</h3>
        <BoxColor r={255} g={0} b={0} />
        <BoxColor r={128} g={255} b={0} />
      </div>
    </div>
  );
}

export default App;
