import React from 'react';
import './App.css';
import IdCard from './IdCard/IdCard'
import Greetings from './Greetings/Greetings'
import Random from './Random/Random'
import BoxColor from './BoxColor/BoxColor'

function App() {
  return (
    <div className="App">
    <h1>IdCard</h1>
       <IdCard image_url='https://randomuser.me/api/portraits/men/44.jpg' firstname='John' lastname='Doe' gender='Male' height='178' birth="1992-07-14" />
       <IdCard image_url='https://randomuser.me/api/portraits/women/44.jpg'  firstname='Obrien' lastname='Delores' gender='Female' height='178' birth="1988-05-11" />
    
    <h1>Greetings</h1>
      <Greetings lang="de">Ludwig</Greetings>
      <Greetings lang="fr">François</Greetings>

    <h1>Random</h1>
      <Random min={1} max={6}/>
      <Random min={1} max={100}/>

    <h1>Box Color</h1>
      <BoxColor r={255} g={0} b={0} />
      <BoxColor r={128} g={255} b={0} />

    <h1>Credit Card</h1>
    <h1>Rating</h1>
    <h1>Driver Card</h1>
    </div>
  );
}

export default App;
