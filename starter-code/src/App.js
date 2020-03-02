import React, { Component } from 'react';

import IdCard from './components/IdCard';
import Greetings from './components/Greetings';
// import Random from './components/Random';

const people = [
  {
    lastName: 'Doe',
    firstName: 'John',
    gender: 'male',
    height: 178,
    birth: new Date(1992, 6, 14),
    picture: 'https://randomuser.me/api/portraits/men/44.jpg'
  },
  {
    lastName: 'Delores',
    firstName: 'Obrien',
    gender: 'female',
    height: 172,
    birth: new Date(1993, 4, 11),
    picture: 'https://randomuser.me/api/portraits/women/44.jpg'
  }
];

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>IdCard</h1>
        {people.map(person => (
          <IdCard
            key={person.firstName}
            firstName={person.firstName}
            lastName={person.lastName}
            gender={person.gender}
            height={person.height}
            birth={person.birth}
            picture={person.picture}
          />
        ))}

        <h1>Greetings</h1>
        <Greetings lang="de">Ludwig</Greetings>
        <br />
        <Greetings lang="fr">François</Greetings>
      </div>
    );
  }
}

export default App;
