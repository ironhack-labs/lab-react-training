import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import IdCard from './components/IdCard.js';
import Greetings from './components/Greetings.js';
import Random from './components/Random.js';
import BoxColor from './components/BoxColor.js'
import { directive } from '@babel/types';

function App() {
  return (
    <div className="App">
      <div className='id-card-div'>
        <h1>IdCard</h1>
        <IdCard
          lastName='Doe'
          firstName='John'
          gender='male'
          height={178}
          birth={new Date("1992-07-14")}
          picture="https://randomuser.me/api/portraits/men/44.jpg"
        />
        <IdCard
          lastName='Delores '
          firstName='Obrien'
          gender='female'
          height={172}
          birth={new Date("1988-05-11")}
          picture="https://randomuser.me/api/portraits/women/44.jpg"
        />
      </div>
      <div className='greetings-div'>
        <h1>Greetings</h1>
        <Greetings lang="de" name='Ludwig'/>
        <Greetings lang="fr" name='François'/>
      </div>
      
      <div className= 'random-div'>
        <h1>Random</h1>
        <Random min={1} max={6}/>
        <Random min={1} max={100}/>
      </div>

      <div className='box-color-div'>
        <h1>BoxColor</h1>
        <BoxColor r={255} g={0} b={0} />
        <BoxColor r={128} g={255} b={0} />
      </div>


  </div>
  );
}



export default App;
