import React from 'react';
import './App.css';
import IdCard from './components/IdCard'
import Greetings from './components/Greetings'
import Title from './components/Title'
import Random from './components/Random'
import BoxColor from './components/BoxColor'

function App() {
  return (
    <div className="App">

<div>
  <Title edit='IdCard'/>
</div>

<IdCard
  lastName='Doe'
  firstName='John'
  gender='male'
  height='178'
  birth="1992-07-14"
  picture="https://randomuser.me/api/portraits/men/44.jpg"
/>

<IdCard
  lastName='Delores '
  firstName='Obrien'
  gender='female'
  height='172'
  birth="1988-05-11"
  picture="https://randomuser.me/api/portraits/women/44.jpg"
/>
      

  <Title edit='Greetings'/>


  
  <div>

  <Greetings lang='de' children='Ludwig'/>
  <Greetings lang="fr" children = 'François'/>

  </div>

  <Title edit='Random'/>

  <div>

  <Random min={1} max={6}/>
  <Random min={1} max={100}/>
  </div>

  <Title edit='BoxColor'/>


    <div>
  <BoxColor r={255} g={0} b={0} />
  <BoxColor r={128} g={255} b={0} />
  </div>
  




</div>
  );
}

export default App;
