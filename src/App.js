import React from 'react';
import './App.css';
import IdCard from './components/IdCard'
import ClickablePicture from './components/ClickablePicture';
import Greetings from './components/Greetings';
import Random from './components/Random';
import BoxColor from './components/BoxColor'

function App (props) {
  return (

    <><h2>ITERATION 2 COMPLETE</h2><>
    <Greetings lang="de">Ludwig</Greetings><Greetings lang="fr">François</Greetings><><div className='container'>


    <Random min={1} max={6}/><Random min={1} max={100}/>

    <h2>Iteration 4: Boxcolor</h2><br />

<BoxColor r={255} g={0} b={0} />
<BoxColor r={128} g={255} b={0} />
<br />


      <IdCard

        lastName="Doe"
        firstName="John"
        gender="male"
        height={178}
        imgURL="https://randomuser.me/api/portraits/men/44.jpg" />

      <IdCard
        lastName="Delores "
        firstName="Obrien"
        gender="female"
        height={172}
        imgURL="https://randomuser.me/api/portraits/women/44.jpg" />

    </div>
    <div>

        <ClickablePicture
          img="/img/persons/maxence.png"
          imgClicked="/img/persons/maxence-glasses.png" />

      </div></></></>

      



  );
}

export default App;
