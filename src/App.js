import React from 'react';
import './App.css';
import IdCard from './components/IdCard'

function App() {
  return (
    <div className="App">

    <h1 className='title'>IdCard</h1>

<IdCard
  lastName='Doe'
  firstName='John'
  gender='male'
  height='178'
  birth="1992-07-14"
  picture= 'src=/img/persons/maxence.png'
/>

<IdCard
  lastName='Delores '
  firstName='Obrien'
  gender='female'
  height='172'
  birth="1988-05-11"
  picture="https://randomuser.me/api/portraits/women/44.jpg"
/>
      
    </div>
  );
}

export default App;
