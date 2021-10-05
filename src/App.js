import React from 'react';
import './App.css';
import IdCard from './components/IdCard';
import Greetings from './components/Greeting';
import Random from './components/Random'
import BoxColor from './components/BoxColor';
function App() {
  const persons = [
    {
      lastName:"Doe",
  firstName:"John",
  gender:"male",
  height:178,
  birth: new Date("1992-07-14"),
  picture:"https://randomuser.me/api/portraits/men/44.jpg"
    },
    {
      lastName:"Delores",
  firstName:"Obrien",
  gender:"female",
  height:172,
  birth:new Date("1988-05-11"),
  picture:"https://randomuser.me/api/portraits/women/44.jpg"
    }
  ]
  return (
    <div className="App">
      <body>
      {persons.map((person)=>{
        return <IdCard
         firstName={person.firstName}
         lastName={person.lastName}
         gender={person.gender}
         birth={person.birth}
         height={person.height}
         picture={person.picture}
        
        />
      })}
           <Greetings lang="es">Fabian</Greetings>
            <Greetings lang="en">Fabian</Greetings>
            <Greetings lang="fr">Fabian</Greetings>
            <Greetings lang="de">Fabian</Greetings>

            <Random min={1} max={6}/>
            <Random min={1} max={100}/>


            <BoxColor r={255} g={0} b={0} />
            <BoxColor r={128} g={255} b={0} />

      </body>
    </div>
  );
}

export default App;
