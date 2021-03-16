import IdCard from './components/IdCard';
import Greetings from './components/Greetings';
import Random from './components/Random';
import LikeButton from './components/LikeButton';
import ClickablePicture from './components/ClickablePicture';
import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div>
        <h1>Id Cards</h1>
        <IdCard
          lastName='Doe'
          firstName='John'
          gender='male'
          height={178}
          birth={new Date("1992-07-14").toString()}
          picture="https://randomuser.me/api/portraits/men/44.jpg"
        />
        <IdCard
          lastName='Obrien'
          firstName='Delores'
          gender='female'
          height={172}
          birth={new Date("1988-05-11").toString()}
          picture="https://randomuser.me/api/portraits/women/44.jpg"
        />
      </div>
      <div>
        <h1>Greetings</h1>
        <Greetings
          lang='de'
          children='Ludwig'
        />
        <Greetings
          lang='fr'
          children='François'
        />
      </div>
      <div>
        <h1>Randoms</h1>
        {/* <Random
        min={1}
        max={10}
        /> */}
      </div>
      <div>
        <h1>BoxColor</h1>
      </div>
      <div>
        <h1>Like Button</h1>
        <LikeButton/>
      </div>
      <div>
      <h1>Clickable Picture</h1>
        <ClickablePicture img='/img/persons/maxence.png' imgClicked='/img/persons/maxence-glasses.png'/>
      </div>
    </div>
  );
}

export default App;
