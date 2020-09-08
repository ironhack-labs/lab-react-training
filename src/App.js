import React from 'react';
import './App.css';
import IdCard from './Components/IdCard';
import Greetings from './Components/Greetings';
import Random from './Components/Random';
import BoxColor from './Components/BoxColor';

function App() {
  return (
    <div className="App">
      
        
        <p>
         <IdCard  
          lastName='Anthopoulos'
          firstName='Alexandros'
          gender='male'
          height={185}
          birth={new Date("1987-01-25")}
          picture="https://randomuser.me/api/portraits/men/44.jpg" />

        </p>
        <h1>Greetings</h1>
        <Greetings lang="en">Alex</Greetings>
        <Greetings lang="fr">Jacques</Greetings>
        <h1>Random</h1>
        <Random min={1} max={20}/>
        <h1>BoxColor</h1>
        <BoxColor r={255} g={0} b={0} />
    </div>
  );
}

export default App;
