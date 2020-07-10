import React from 'react';
import logo from './logo.svg';
import './App.css';
import Greetings from './components/Greetings';

function App() {
  return (
    <div className="App">
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
  );
}

export default App;
