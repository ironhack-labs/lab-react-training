import React from 'react';
import './App.css';
import IdCard from './components/IdCard';
import Greetings from './components/Greetings';
import Random from './components/Random';
import BoxColor from './components/BoxColor';

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

    <h1>Boxcolor Iteration 4</h1>
    <BoxColor r={255} g={0} b={0} />
    <BoxColor r={128} g={255} b={0} />

</div>
  );
    
}

export default App;
