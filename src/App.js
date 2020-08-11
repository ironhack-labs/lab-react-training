import React from 'react'
import IdCard from './components/Idcard/IdCard'
import Greetings from './components/Greetings/Greetings'
import Random from './components/RandomNum/RandomNum'
import BoxColor from './components/Boxcolor/BoxColor'

function App() {
  return (
    <div className="App">
      <IdCard
        lastName='Doe'
        firstName='John'
        gender='male'
        height={178}
        birth='1992'
        img="https://randomuser.me/api/portraits/men/44.jpg"/>
      
      <IdCard
        lastName='Delores '
        firstName='Obrien'
        gender='female'
        height={172}
        birth="1988-05-11"
        img="https://randomuser.me/api/portraits/women/44.jpg"/>

      <Greetings lang="de">Ludwig</Greetings>
      <Greetings lang="es">Carlos</Greetings>
      <Greetings lang="en">Peter</Greetings>
      <Greetings lang="fr">JB</Greetings>

      <Random min={1} max={6}/>
      <Random min={1} max={100}/>

      <BoxColor r={255} g={0} b={0} />
      <BoxColor r={128} g={255} b={0} />

    </div>
  );
}

export default App;
