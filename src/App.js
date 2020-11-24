import React from 'react';
//import logo from './logo.svg';
import './App.css';
import Greetings from './components/Greetings';
import Random from './components/Random';
import BoxColor from './components/BoxColor';

const IdCard = (props) => <div className="div-card">
  <img src={props.picture} alt="imagen"/>
  FirstName: {props.firstName}<br/> LastName: {props.lastName}<br/> Gender: {props.gender}<br/> Height: {props.height}<br/>  Birth{props.birth}<br/>
</div>



function App() {
  return (
    <div className="App">
      <IdCard firstName="John" lastName="Doe" gender="male" birth="1992-07-14" height="1.78m" picture="https://randomuser.me/api/portraits/men/44.jpg"/>
      <IdCard firstName="Obrien" lastName="Delores" gender="female" height="1.72m" birth="1992-07-14" picture="https://randomuser.me/api/portraits/women/44.jpg"/>
      <Greetings lang="de">Ludwig</Greetings>
      <Greetings lang="fr">François</Greetings>
      <Random min={1} max={6}/>
      <Random min={1} max={100}/>
      <BoxColor r={255} g={0} b={0} />
      <BoxColor r={128} g={255} b={0} />
    </div>
  );
}

export default App;
