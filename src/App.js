import React from 'react';

import './App.css';

//components
import IdCard from './components/IdCard'
import Greetings from './components/Greetings'
import Random from './components/Random'

function App() {
  return (
    <div id="IdCard__container" className="App">
       <h1>Iteration-1</h1>
      <IdCard lastName='Doe' firstName='John' gender='male' height={178} birth={new Date("1992-07-14").toDateString()} picture="https://randomuser.me/api/portraits/men/44.jpg"/>
      <IdCard lastName='Delores ' firstName='Obrien' gender='female' height={172} birth={new Date("1988-05-11").toDateString()} picture="https://randomuser.me/api/portraits/women/44.jpg"/>
      <h1>Iteration-2</h1>
      <Greetings lang="de">Alicia</Greetings>
      <Greetings lang="fr">Feliciano</Greetings>
      <Greetings lang="es">Eugenio</Greetings>
      <Greetings lang="en">Donald</Greetings>
      <h1>Iteration-3</h1>
      <Random min={1} max={6}/>
      <Random min={1} max={100}/>
      <h1>Iteration-4</h1>

    </div>
  )
}

export default App;
