import React from 'react';
//import logo from './logo.svg';
import './App.css';
import IdList from './components/IdList';
import Greetings from './components/Greetings';

import Random from "./components/Random";





function App() {
  return (
    <div className="App">
      
      
      <h1>IdCard</h1>
        
        <div className="idcard">
          <IdList /> 
        </div>

      <h1>Greetings </h1>
      <Greetings lang="de">Ludwig</Greetings>
      <br></br>
      <Greetings lang="fr">François</Greetings>
      
      <h1>Random</h1>
      <Random min={1} max={6}/>
      <br></br>
      <Random min={1} max={100}/>

    </div>
  );
}

export default App;
