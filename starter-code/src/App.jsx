import React, { Component } from 'react';

import IdCard from './components/IdCard';
import Greetings from './components/greetings';

const studentsData = [
  {
    id: 123456,
    lastName: 'Doe',
    firstName: 'John',
    gender: 'male',
    height: 178,
    birth: new Date('1992-07-14'),
    picture: 'https://randomuser.me/api/portraits/men/44.jpg'
  },
  {
    id: 234567,
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
        {studentsData.map(idCard => (
          <IdCard
            key={idCard.id}
            lastName={idCard.lastName}
            firstName={idCard.firstName}
            picture={idCard.picture}
            gender={idCard.gender}
            height={idCard.height}
            birth={idCard.height}
          />
        ))}

        <h1>Greetings</h1>
        <Greetings lang="de">Ludwig</Greetings>
        <Greetings lang="fr">François</Greetings>
        {/* {<Greetings lang={greetingsTranslation.de}>Ludwig</Greetings>} */}
      </div>
    );
  }
}

export default App;
