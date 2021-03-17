import React from 'react';
import logo from './logo.svg';
import './App.css';
import IdCard from './components/IdCard';
import Greeting from './components/Greeting'

function App() {
  return (
    <div className="App">
      <h1>Id Cards</h1>
      <IdCard
        firstName='Javier'
        lastName='Repilado'
        gender='male'
        height={173}
        // birth={new Date('1990-03-16')}
        picture='https://media-exp1.licdn.com/dms/image/C4D03AQE0hSqrZcgBRw/profile-displayphoto-shrink_200_200/0/1583432189215?e=1621468800&v=beta&t=yhxhudaYfGQqW_U1AoxPHPplwGTYHhko2s5uQMU1Bmg'
      />
      <hr/>
      <h1>Greetings</h1>
      <Greeting lang='de' />
      <Greeting lang='fr' />
    </div>
  );
}

export default App;
