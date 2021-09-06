import React from 'react';
import logo from './logo.svg';
import persons from './data/berlin.json'
import './App.css';
import IdCard from './components/IdCard/IdCard'
import Greetings from './components/greetings/Greetings';

function App() {
  return (
    <div className="App">
      {/* {persons.map((person) => (
        <IdCard lastName={person.lastName} firstName={person.firstName}
          gender={person.gender} height={person.height} birth={person.birth}
          picture={person.picture} key={persons.firstName}/>
      ))} */}
      <IdCard
        lastName='Doe'
        firstName='John'
        gender='male'
        height={178}
        birth={new Date("1992-07-14")}
        picture="https://randomuser.me/api/portraits/men/44.jpg"
      />
      <Greetings lang="de">Ludwig</Greetings>
      <Greetings lang="fr">François</Greetings>

      {/* <IdCard lastName={persons[0].lastName} firstName={persosn[0].firstName}
        gender={persons[0].gender} height={persons[0].height} birth={persons[0].birth} picture={persons[0].picture}
      /> */}
     
      {/* <IdCard gender={person[0].gender} />
      <IdCard height={person[0].height} />
      <IdCard birth={person[0].birth} />
      <IdCard picture={person[0].picture} /> */}
    </div>
  );
}

export default App;
