import React from 'react';
import './App.css';
import IdCard from './Components/IdCard';
import Greetings from './Components/Greetings';

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
     
    </div>
  );
}

export default App;
