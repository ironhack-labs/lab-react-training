import React from 'react';
import './App.css';
import Boxcolor from './components/Boxcolor';
import Greetings from './components/Greetings/Greetings';
import IdCard from './components/IdCard/IdCard';
import Random from './components/Random/Random';

const idCard = {
  firstName: 'Doe',
  lastName: 'John',
  gender: 'male',
  height: 178,
  birth: '1992-07-14',
  picture: 'https://randomuser.me/api/portraits/men/44.jpg',
};

function App() {
  return (
    <div className="App">
      <IdCard
        firstName={idCard.firstName}
        lastName={idCard.lastName}
        gender={idCard.gender}
        height={idCard.height}
        birth={idCard.birth}
        picture={idCard.picture}
      />
      <Greetings lang="es">
      Paco
      </Greetings>
      <Random max={10} min={1}/> 
      <Boxcolor r={255} g={0} b={0} />
    
    </div>
  );
}

export default App;
