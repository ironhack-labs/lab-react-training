import React from 'react';
import './App.css';
import IdCard from './components/IdCard';
import Greetings from './components/Greetings'
import Random from './components/Random'

function App() {
  return (
    <div className="App" >
      <IdCard
      lastName='Doe'
      firstName='John'
      gender='male'
      height={178}
      birth="Tue Jul 14 1992" //I had problems with the other birth date: '' birth={new Date("1988-05-11")}'' doesn't works
      picture="https://randomuser.me/api/portraits/men/44.jpg"
    />

    <IdCard
      lastName='Delores '
      firstName='Obrien'
      gender='female'
      height={172}
      birth="Tue May 11 1993"
      picture="https://randomuser.me/api/portraits/women/44.jpg"
    />
    <Greetings  lang="sw" children="Lars" />
    <Greetings lang="es" children="Anton" />
    <Random min={1} max={6}/>
    <Random min={1} max={100}/>
    </div>
  );
}

export default App;
