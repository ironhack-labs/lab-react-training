import React from 'react';
import logo from './logo.svg';
import './App.css';
import Greetings from './components/Greetings';
import IdCard from './components/IdCard';
import Random from './components/Random';

const idCards = [
  {
    lastName:'Doe',
    firstName:'John',
    gender:'male',
    height:178,
    birth:"1992-07-14",
    picture:"https://randomuser.me/api/portraits/men/44.jpg"
  },
  {  
    lastName:'Delores',
    firstName:'Obrien',
    gender:'female',
    height:172,
    birth:"1988-05-11",
    picture:"https://randomuser.me/api/portraits/women/44.jpg"
  }
]

const idCardsCollection = idCards.map(card => 
  <IdCard 
    lastName = {card.lastName}
    firstName = {card.firstName}
    gender = {card.gender}
    height = {card.height}
    birth = {card.birth}
    picture = {card.picture}
  />
)

function App() {
  return (
    <div className="App">
      <div className="Greetings">
        <Greetings lang="pt">
          Lourenço
        </Greetings>
        <Greetings lang="fr">
          Antoine
        </Greetings>
        <Greetings lang="">
          John
        </Greetings>
      </div>
      {idCardsCollection}
      <Random 
        min='1'
        max='10'
      />
    </div>
  );
}

export default App;
