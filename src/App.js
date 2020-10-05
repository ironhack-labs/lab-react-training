import React from 'react';
import logo from './logo.svg';
import './App.css';
import IdCard from "./component/IdCard";
import Greetings from "./component/Greetings";


function App() {
  return (
  <div>
      <IdCard
      lastName='Doe'
      firstName='John'
      gender='male'
      height={178}
      birth={new Date("1992-07-14")}
      picture="https://randomuser.me/api/portraits/men/44.jpg"
      />

      <IdCard
      lastName='Obrien'
      firstName='Delores'
      gender='female'
      height={172}
      birth={new Date("1993-05-11")}
      picture="https://randomuser.me/api/portraits/women/44.jpg"
      />

      <Greetings lang="de">Ludwig</Greetings>
      <Greetings lang="fr">François</Greetings>

  </div>);
}


export default App;

