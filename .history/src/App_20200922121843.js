import React from 'react';
import './App.css';
import IdCard from './IdCard.js';
import Greetings from './Greetings.js';

function App() {
  return (
    <div className="App">
      <div className="IdCard">
        <h1>Id Card</h1>
        <IdCard
          lastName={'Doe'}
          firstName={'John'}
          gender={'male'}
          height={'178'}
          birth={new Date('1992-07-14')}
          picture="https://randomuser.me/api/portraits/men/44.jpg"
        />
        <IdCard
          lastName={'Delores'}
          firstName={'Obrien'}
          gender={'female'}
          height={172}
          birth={new Date('1988-05-11')}
          picture="https://randomuser.me/api/portraits/women/44.jpg"
        />
        <IdCard
          lastName={'Super'}
          firstName={'Mario'}
          gender={'female'}
          height={172}
          birth={new Date('1988-05-11')}
          picture="https://randomuser.me/api/portraits/women/44.jpg"
        />
      </div>
      <div classname="Greetings">
        <Greetings lang="de">Ludwig</Greetings>
        <Greetings lang="fr">François</Greetings>
        <Greetings lang="es">Antonio</Greetings>
        <Greetings lang="en">Timmy</Greetings>
      </div>
    </div>
  );
}

export default App;
