import React, { Component } from 'react';
import IdCardInfo from './components/IdCardInfo';
import Greetings from './components/GreetingsInfo';
const IdCards = [
  {
    id: 'id1',
    lastName:'Doe',
    firstName:'John',
    gender:'male',
    height: 178,
    birth: new Date(1992, 7, 14),
    photo: 'https://randomuser.me/api/portraits/men/44.jpg'  
  },
  {
    id: 'id2',
    lastName:'Delores',
    firstName:'Obrien',
    gender:'female',
    height: 172,
    birth: new Date(1988, 5, 11),
    photo: 'https://randomuser.me/api/portraits/women/44.jpg'
  }
];


class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>IdCard</h1>
        {/* TODO: Use the IdCard component */}
        {IdCards.map(IdCard => (
        <IdCardInfo 
          key={IdCard.id} 
          lastName={IdCard.lastName} 
          firstName={IdCard.firstName} 
          gender={IdCard.gender} 
          height={IdCard.height} 
          birth={IdCard.birth} 
          photo={IdCard.photo}
          />
      ))}
        <h1>Greetings</h1>
          <div className="box">
            <Greetings lang="de">Ludwig</Greetings>
            <Greetings lang="fr">François</Greetings>
          </div>
      </div>
    );
  }
}

export default App;
