import React from 'react';
import logo from './logo.svg';
import './App.css';
import IdCard from "./components/IdCard/IdCard"
import Gretings from "./components/Greetings/Greetings"
import Random from "./components/Random/Random"
import BoxColor from './components/BoxColor/BoxColor';

function App() {
  const dateToArr = (date) => {
    let birthArr = date.toString().split(" ");
    let birthStr = "";
    for (let i=0; i < 4; i++) {
      birthStr += birthArr[i];
      birthStr += " ";
    }
    return birthStr
  }
  
  return (
    <div className="App">
      <IdCard
         lastName='Doe'
         firstName='John'
         gender='male'
         height={178}
         birth={dateToArr(new Date("1992-07-14"))}
         picture="https://randomuser.me/api/portraits/men/44.jpg"
      />
      <Gretings lang="es">Marcos</Gretings>
      <Random min="15" max="25"/>
      <BoxColor r={206} g={218} b={255}/>
    </div>
  );
}

export default App;
