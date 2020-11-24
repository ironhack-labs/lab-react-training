import React from 'react';
// import logo from './logo.svg';
import IdCard from './components/IdCard';
import Greetings from './components/Greetings';
import Random from './components/Random';
import BoxColor from './components/BoxColor';


import './App.css';

function App() {
  return (
    <div className="App">
 
 {/* -----iteration 1----- */}
 <h1>IdCard</h1>
      <IdCard
          lastName='Cocker'
          firstName='Joe'
          gender='male'
          height={170}
          birth={new Date("1944-05-20")}
          picture="https://www.rollingstone.com/wp-content/uploads/2018/06/rs-134967-joe-cocker.jpg?w=306"
      />
       <IdCard
          lastName='Carey'
          firstName='Mariah'
          gender='female'
          height={165}
          birth={new Date("1970-03-27")}
          picture="https://www.rollingstone.com/wp-content/uploads/2018/06/rs-134949-mariah-carey.jpg?w=306"
      />

<hr></hr>
 {/* -----iteration 2----- */}
<h1>Greetings</h1>
       <Greetings lang="de">Ludwig</Greetings>
       <Greetings lang="fr">François</Greetings> 
    
<hr></hr>
  {/* Iteration 3 */}
  <h1>Random</h1>
  <Random min={1} max={6}/>
  <Random min={1} max={100} />

  {/* Iteration 4 */}    
<hr></hr>    
  <h1>BoxColor</h1>
      <BoxColor r={255} g={0} b={0} color="rgb(255,0,0)" />
      <BoxColor r={128} g={255} b={0} color="rgb(128,255,0)"/>


    </div>
  );
}

export default App;
