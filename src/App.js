/* import React from 'react'; */
import './App.css';
import It1 from './components/Main/It1'
import Greetings from './components/Main/Greetings';
import Random from './components/Main/Random';
import BoxColor from './components/Main/BoxColor';

function App() {
  return (
    <>
     <div><h1 style={{textAlign:"left", marginLeft:"5px"}}>IdCard</h1></div>     
     <It1 />
     <div><h1 style={{textAlign:"left", marginLeft:"5px"}}>Greetings</h1></div>
     <Greetings lang="de"><p>Ludwig</p></Greetings>
     <Greetings lang="fr">François</Greetings>
     <div><h1 style={{textAlign:"left", marginLeft:"5px"}}>Random</h1></div>
     <Random></Random>
     <div><h1 style={{textAlign:"left", marginLeft:"5px"}}>Box Color</h1></div>
     {/* <BoxColor r={255} g={0} b={0} />
     <BoxColor r={128} g={255} b={0} /> */}

    </>
  );
}

export default App;