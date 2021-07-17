import React from 'react';
import './App.css';
import Idcard from './Idcard/Idcard.js';
import Greeting from './greeting/Greeting';
import Random from './random/Random';
import BoxColor from './boxcolor/BoxColor';


function App(){
  return(
    <div className="App">
      <h3>Interation 1</h3>
      <div>
        <Idcard lastName='Doe'
        firstName='John'
        gender='male'
        height={178}
        birth={new Date("1992-07-14")}      
        picture="https://randomuser.me/api/portraits/men/44.jpg"
      />
      </div>
      <div>     
        <Idcard lastName='Delores '
        firstName='Obrien'
        gender='female'
        height={172}
        birth={new Date("1988-05-11")}
        picture="https://randomuser.me/api/portraits/women/44.jpg" >
        </Idcard>
      </div>
      <hr/>
      <h3>Interation 2</h3>
      <div>        
        <Greeting lang="de">Ludwig</Greeting>
        <Greeting lang="fr">François</Greeting>
      </div>
      <hr/>
      <h3>Interation 3</h3>
      <div>
        <Random min={1} max={6}/>
        <Random min={1} max={100}/>
      </div>
      <hr/>
      <h3>Interation 4</h3>
      <div>
        <BoxColor r={255} g={0} b={0} />
        <BoxColor r={128} g={255} b={0} />
      </div>
  </div>
  )
}



export default App;
