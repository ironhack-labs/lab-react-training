import React from 'react';
import logo from './logo.svg';
import './App.css';
import Greetings from './components/Greetings';
import IdCard from './components/IdCard';
import Random from './components/Random';
import BoxColor from './components/BoxColor';

function App() {
  return (
    <div className="App">
      <h3>IdCards</h3>
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
    <h3>Greetings</h3>
    <Greetings lang="pt">Lourenço</Greetings>
     <Greetings lang="es">Guillem</Greetings>
    <h3>Random</h3>
     <Random min={1} max={6}/>
     <Random min={1} max={100}/>
        <h3>BoxColor</h3>
        <BoxColor r={255} g={0} b={0} />
        <BoxColor r={128} g={255} b={0} />        
        <h3>CreditCard</h3>
        <h3>Rating</h3>
        <h3>DriverCard</h3>
        <h3>LikeButton</h3>
        <h3>ClickablePicture</h3>
        <h3>Dice</h3>
        <h3>NumbersTable</h3>
        <h3>FaceBook</h3>
        <h3>FaceBook (Advanced)</h3>
        <h3>SignupPage</h3>

    </div>
  );
}

export default App;
