import React from 'react';
import './App.css';
import IdCard from './components/IdCard/IdCard';
import Greetings from './components/Greetings/Greetings';
import Random from './components/Random/Random';
import BoxColor from './components/BoxColor/BoxColor';

function App() {
  return (
    <div className="App">
<IdCard
  lastName='Doe'
  firstName='John'
  gender='male'
  height='178'
  picture="https://randomuser.me/api/portraits/men/44.jpg"
  birth="1992-07-14"
/>
<IdCard
  lastName='Delores '
  firstName='Obrien'
  gender='female'
  height='172'
  birth="1988-05-11"
  picture="https://randomuser.me/api/portraits/women/44.jpg"
/>
<Greetings lang="es">Spain</Greetings>
<Greetings lang="en">California</Greetings>
<Random min={1} max={6}/>
<Random min={1} max={100}/>
<BoxColor r={255} g={0} b={0} />
<BoxColor r={128} g={255} b={0} />
</div>
  );
}

export default App;
