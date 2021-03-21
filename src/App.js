import React from 'react';
import './App.scss';
import IdCard from './components/IdCard'
import Greetings from './components/Greetings'
import Random from './components/Random'
import BoxColor from './components/BoxColor'

function App() {
  return (
    <div className="App">
      <h1>React Training</h1>

      <h2><i class="lab la-react"></i> Iteration 1</h2>
      <div className="It1__Cards">
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
      </div>

      <hr/>

      <h2><i class="lab la-react"></i> Iteration 2</h2>
      <ul>
        <li><Greetings lang="de">Ludwig</Greetings></li>
        <li><Greetings lang="en">English</Greetings></li>
        <li><Greetings lang="fr">François</Greetings></li>
        <li><Greetings lang="es">Español</Greetings></li>
      </ul>

      <hr/>

      <h2><i class="lab la-react"></i> Iteration 3</h2>
      <Random min={1} max={6}/>
      <Random min={1} max={100}/>

      <hr/>

      <h2><i class="lab la-react"></i> Iteration 4</h2>
      <BoxColor r={255} g={0} b={0} color="#fff"/>
      <BoxColor r={128} g={255} b={0} color="#000" />

    </div>
  );
}

export default App;
