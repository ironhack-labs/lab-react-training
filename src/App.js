import React from 'react';
import IdCard from './components/IdCard';
import Greetings from './components/Greetings';
import Random from './components/Random';
import './App.css';


function App() {
  return (
    <div className="App">
      <div>
      <h1>IdCard</h1>
      
      
     <IdCard
  lastName='Doe'
  firstName='John'
  gender='male'
  height={178}
  birth={`${new Date("1992-07-14")}`}
  picture="https://randomuser.me/api/portraits/men/44.jpg"
/>

<IdCard
  lastName='Delores '
  firstName='Obrien'
  gender='female'
  height={172}
  birth={`${new Date("1988-05-11")}`}
  picture="https://randomuser.me/api/portraits/women/44.jpg"
/>
</div>
<div>
<h1>Greetings</h1>
<Greetings lang="de">Ludwig</Greetings>
<Greetings lang="en">Charles</Greetings>
<Greetings lang="es">Benancio</Greetings>
<Greetings lang="fr">François</Greetings>

</div>
<div>
<h1>Random</h1>
<Random min={1} max={6}/>
<Random min={1} max={100}/>

</div>
    </div>
  );
}

export default App;
