import React from 'react';
import './App.css';
import IdCard from './components/IdCard';
import Greetings from './components/Greetings';
import Random from './components/Random';

function App() {
 
  return (
<div>
      <h1>IdCard First Iteration</h1>
    
      <IdCard 
        picture="https://randomuser.me/api/portraits/men/44.jpg"
        firstName="John"
        lastName="Doe"
        gender="male"
        height={1.78}
        birth={`${new Date("1992-07-14")}`}
      />
      <IdCard 
        picture="https://randomuser.me/api/portraits/women/8.jpg"
        firstName="Obrien"
        lastName="Delores"
        gender="female"
        height={1.72}
        birth={`${new Date("1988-05-11")}`} 
      />

    <h1>Greetings Second Iteration</h1>
    <Greetings name ="Ludwig"/>
    <Greetings name ="Francois"/>

    <h1>Random Iteration 3</h1>
    <Random min={1} max={6}/>
    <Random min={1} max={100}/>

</div>
  );
    
}

export default App;
