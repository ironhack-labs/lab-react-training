import React from 'react';
import './App.css';
import IdCard from './components/IdCard/IdCard';
import Greetings from './components/Greetings/Greetings';

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
</div>
  );
}

export default App;
