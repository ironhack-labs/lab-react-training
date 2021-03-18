import React from 'react';
import logo from './logo.svg';
import './App.css';
import IdCard from './components/IdCard';
import Greeting from './components/Greeting';
import Random from './components/Random';
import BoxColor from './components/BoxColor';

function App() {
  return (
    <div className="App">
      <h1>It.1 - Id Cards</h1>
      <IdCard
        firstName='Javier'
        lastName='Repilado'
        gender='male'
        height={173}
        birth={new Date('1990-03-16')}
        picture={{src: 'https://media-exp1.licdn.com/dms/image/C4D03AQE0hSqrZcgBRw/profile-displayphoto-shrink_200_200/0/1583432189215?e=1621468800&v=beta&t=yhxhudaYfGQqW_U1AoxPHPplwGTYHhko2s5uQMU1Bmg', alt: 'Profile Picture'}}
      />

      <hr/>

      <h1>It.2 - Greetings</h1>
      <Greeting lang='de' />
      <Greeting lang='fr' />

      <hr/>

      <h1>It.3 - Random</h1>
      <Random min={1} max={6} />
      <Random min={1} max={100} />

      <hr/>

      <h1>It.4 - Box Color</h1>
      <BoxColor r={200} g={238} b={217} />
      <BoxColor r={137} g={120} b={84} />

    </div>
  );
}

export default App;
