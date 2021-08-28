import React from 'react';
import './App.css';
import IdCard from "./components/idcard/IdCard";
import Greetings from "./components/greetings/Greetings";

const doe = {
  lastName: 'Doe',
  firstName: 'John',
  gender: 'male',
  height: 178,
  birth: new Date("1992-07-14"),
  picture: "https://randomuser.me/api/portraits/men/44.jpg"
}

const delores = {
  lastName: 'Delores ',
  firstName: 'Obrien',
  gender: 'female',
  height: 172,
  birth: new Date("1988-05-11"),
  picture: "https://randomuser.me/api/portraits/women/44.jpg"
}

export default function App() {
  return (
    <div className="App">
      <h1>Id Card</h1>
        <IdCard {...doe} />
        <IdCard {...delores} />
      <h1>Greetings, summoner</h1>
        <Greetings lang="de">Ludwig</Greetings>
        <Greetings lang="fr">François</Greetings>
    </div>
  );
}