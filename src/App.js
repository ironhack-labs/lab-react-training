import React from 'react';
import logo from './logo.svg';
import './App.css';

import BoxColor from './components/BoxColor';
import Greetings from './components/Greetings';
import IdCard from './components/IdCard';
import Random from './components/Random';


function App() {
  return (
    <div className="App">
      <IdCard
  lastName='Doe'
  firstName='John'
  gender='male'
  height={178}
  birth={new Date("1992-07-14")}
  picture="https://randomuser.me/api/portraits/men/44.jpg"
/>

<IdCard
  lastName='Delores '
  firstName='Obrien'
  gender='female'
  height={172}
  birth={new Date("1988-05-11")}
  picture="https://randomuser.me/api/portraits/women/44.jpg"
/>

<hr/>

<Greetings lang="de">Ludwig</Greetings>
<Greetings lang="fr">François</Greetings>

<hr/>

<Random min={1} max={6}/>
<Random min={1} max={100}/>

<hr/>

<BoxColor r={255} g={0} b={0} />
<BoxColor r={128} g={255} b={0} />

    </div>
  );
}

export default App;
