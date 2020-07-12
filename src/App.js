import React from 'react';
import './App.css';
import Greetings from './components/Greetings';
import IdCard from './components/IdCard';
import Random from './components/Random';
import BoxColor from './components/BoxColor';


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
    key = {card.lastName}
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
        min='0'
        max='255'
      />
      <BoxColor r={255} g={0} b={0}>#ff0000</BoxColor>;
      <BoxColor r={128} g={255} b={0}>#80ff00</BoxColor>;
    </div>
  );
}

export default App;
