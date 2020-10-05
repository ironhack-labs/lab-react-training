import React from 'react';
import logo from './logo.svg';
import './App.css';
import IdCard from "./component/IdCard";
import Greetings from "./component/Greetings";
import Random from "./component/Random";
import BoxColor from "./component/BoxColor";


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

      <Random min={1} max={6}/>
      <Random min={1} max={100}/>

      <BoxColor r={255} g={0} b={0} />
      <BoxColor r={128} g={255} b={0} />


  </div>);
}


export default App;

