import React, { Component } from 'react';
import IdCard from './IdCard';
import Greetings from './components/Greetings';
import Random from './components/Random'

const cards = [
  {
    lastName: 'Doe',
    firstName: 'John',
    gender: 'male',
    height: 178,
    birth: new Date('1992-07-14'),
    picture: 'https://randomuser.me/api/portraits/men/44.jpg'
  },
  {
    lastName: 'Delores ',
    firstName: 'Obrien',
    gender: 'female',
    height: 172,
    birth: new Date('1988-05-11'),
    picture: 'https://randomuser.me/api/portraits/women/44.jpg'
  }
];

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>IdCard</h1>
        {cards.map(card => (
          <IdCard
            key={card.firstName}
            picture={card.picture}
            firstName={card.firstName}
            lastName={card.lastName}
            gender={card.gender}
            height={card.height}
            birth={card.birth}
          />
        ))}

        <h1>Greetings</h1>
        <Greetings lang="de"> Ludwig</Greetings>
        <Greetings lang="fr"> François</Greetings>

<h1>Random Numbers</h1>
<Random min={1} max={6}/>
<Random min={1} max={100}/>

      </div>
    );
  }
}

export default App;
