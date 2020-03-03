import React, { Component } from 'react';

import IdCards from './components/idCards';
import Greetings from './components/Greetings';
import Rating from './components/Rating';
import DriverCard from './components/DriverCard';




const idcard = [
  {
    id:'try',
    lastName:'Doe',
    firstName:'John ',
    gender:'male',
    height:178,
    birth: new Date(1992,6,14),
    picture:'https://randomuser.me/api/portraits/men/44.jpg'
  },
  {
    id:'cfh',
    lastName:'Delores ',
    firstName:'Obrien',
    gender:'female',
    height:172,
    birth: new Date(1993,4,11),
    picture:'https://randomuser.me/api/portraits/women/44.jpg'
  }
];


class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>IdCard</h1>
        {/* TODO: Use the IdCard component */}
        {idcard.map(people => (
          <IdCards 
            key={people.id}
            lastName={people.lastName}
            firstName={people.firstName}
            gender={people.gender}
            height={people.height}
            birth={people.birth}
            picture={people.picture}>

            </IdCards>
        ))}

        <h1>Greetings</h1>
        {/* TODO: Use the Greetings component */}

        <Greetings lang="de">Ludwig</Greetings><br></br>
        <Greetings lang="fr">François</Greetings><br></br>

      </div>
    );
  }
}

export default App;
