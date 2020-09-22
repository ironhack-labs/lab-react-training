import React from 'react';
import './App.css';
import IdCard from './components/IdCard'
import Greetings from './components/Greetings'
import Random from './components/Random'
import BoxColor from './components/BoxColor'

function App() {
  return (
    <div>
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
            lastName='Delores '
            firstName='Obrien'
            gender='female'
            height={172}
            birth={new Date("1988-05-11")}
            picture="https://randomuser.me/api/portraits/women/44.jpg"
          />
      </div> 
      <hr/>
      <div>
        <Greetings lang="de">Ludwig</Greetings>
        <Greetings lang="fr">François</Greetings>
        <Greetings lang="es">Antonio</Greetings>
        <Greetings lang="it">Nicoleto</Greetings>
        <Greetings lang="en">Peter</Greetings>
      </div>
      <hr/>
      <div>
        <Random min={1} max={6}/>
        <Random min={1} max={100}/>
      </div>
      <hr/>
      <div>
        <BoxColor r={255} g={0} b={0} />
        <BoxColor r={128} g={255} b={0} />
      </div>    
    </div>
          
    
  );
}

export default App;
