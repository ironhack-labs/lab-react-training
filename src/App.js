import React from 'react';
import logo from './logo.svg';
import './App.css';

import Greetings from "./components/Greetings";

function IdCard(props) {
  return (
    <div className="Card">
      <img src={props.picture} alt="picture" />
      <p>First name: {props.firstName}</p>
      <p>Last name: {props.lastName}</p>
      <p>Gender: {props.gender}</p>
      <p>Height: {props.height}</p>
      <p>Birth: {props.birth}</p>
    </div>
  );
}


const people = [
  {
    firstName: 'John',
    lastName: 'Doe',
    gender: 'male',
    height: 1.78,
    birth: new Date('1992-07-14').toString(),
    picture: 'https://randomuser.me/api/portraits/men/44.jpg',
  },
  {
    firstName: 'Obrien',
    lastName: 'Delores',
    gender: 'female',
    height: 1.72,
    birth: new Date('1993-05-11').toString(),
    picture: 'https://randomuser.me/api/portraits/women/8.jpg',
  },
];

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>IdCard</h2>
        {people.map((person) => (
          <IdCard
            picture={person.picture}
            firstName={person.firstName}
            lastName={person.lastName}
            gender={person.gender}
            height={person.height}
            birth={person.birth}
          />
        ))}

        <h2>Greetings</h2>
        <Greetings lang="de">Ludwig</Greetings>
        <Greetings lang="fr">François</Greetings>
      </header>
    </div>
  );
}

export default App;
