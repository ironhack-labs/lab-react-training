import React from 'react';
import './App.css';
import Greetings from './components/Greetings';
import IdCard from './components/IdCard';


function App() {
  return (
    <div className="App">
    <div>
    <h1>IdCard</h1>
    <IdCard
    lastName='Delores '
    firstName='Obrien'
    gender='female'
    height='172'
    birth="1988-05-11"
    picture="https://randomuser.me/api/portraits/women/44.jpg"/>
    <IdCard
    lastName='Doe'
    firstName='John'
    gender='male'
    height='178'
    birth="1992-07-14"
    picture="https://randomuser.me/api/portraits/men/44.jpg"/>
  
    </div>
    <div>
    <h1>Greetings</h1>
    <Greetings lang="de">Ludwig</Greetings>
    <Greetings lang="fr">François</Greetings>
    </div>
      
      
    </div>
  );
}

export default App;