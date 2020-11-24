import React from 'react';
import IdCard from './components/IdCard';
import Greetings from './components/Greetings';
import Random from './components/Random';
import BoxColor from './components/BoxColor';

function App() {
  return (
    <div className="App">

      {/* Iteration 1 */}
      <h1>IdCard</h1>
      <IdCard
          lastName='Bieber'
          firstName='Justin'
          gender='male'
          height={175}
          birth={new Date("1994-03-01")}
          picture="https://yt3.ggpht.com/ytc/AAUvwnjpa2md8Bfk-LdYllfDdWWdF6CpKebvAlI5NifS6Q=s900-c-k-c0x00ffffff-no-rj"
      />
       <IdCard
          lastName='Mendes'
          firstName='Shawn'
          gender='male'
          height={188}
          birth={new Date("1998-08-08")}
          picture="https://pm1.narvii.com/6578/55d6845b617937714369a4f26d04d7858bd6f8a4_00.jpg"
      />
      

      {/* Iteration 2 */}
       <h1>Greetings</h1>
       <Greetings lang="de">Ludwig</Greetings>
       <Greetings lang="fr">François</Greetings> 

      {/* Iteration 3 */}
      <h1>Random</h1>
       <Random min={1} max={6}/>
       <Random min={1} max={100} />

      {/* Iteration 4 */}
      <h1>BoxColor</h1>
      <BoxColor r={255} g={0} b={0} color="rgb(255,0,0)" />
      <BoxColor r={128} g={255} b={0} color="rgb(128,255,0)"/>

    </div>
  );
}

export default App;
