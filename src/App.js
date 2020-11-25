import React from 'react';
import logo from './logo.svg';
import './App.css';
import IdCard from './components/IdCard';
import Greetings from './components/Greetings';
import Random from '../components/Random';

function App() {
  return ( <
    div className = "App" >
    <
    header className = "App-header" >
    <
    img src = {
      logo
    }
    className = "App-logo"
    alt = "logo" / >
    <
    p >
    Edit < code > src / App.js < /code> and save to reload. < /
    p > <
    a className = "App-link"
    href = "https://reactjs.org"
    target = "_blank"
    rel = "noopener noreferrer" >
    Learn React <
    /a> < /
    header >



    <
    h1 > IdCard < /h1>  <
    IdCard lastName = 'Dora '
    firstName = 'the Explorer'
    gender = 'female'
    height = {
      105
    }
    birth = {
      new Date("2000-01-01")
    }
    picture = "https://i.pinimg.com/564x/dd/6f/2b/dd6f2b3892598fb24eec695a39720de2.jpg" / >

    <
    IdCard lastName = 'SpongeBob'
    firstName = 'SquarePants'
    gender = 'male'
    height = {
      10
    }
    birth = {
      new Date("1999-01-01")
    }
    picture = "https://upload.wikimedia.org/wikipedia/en/thumb/3/3b/SpongeBob_SquarePants_character.svg/1200px-SpongeBob_SquarePants_character.svg.png" / >


    <
    h1 > Greetings < /h1> <
    Greetings lang = "es" > Lola < /Greetings> <
    Greetings lang = "gal" > Maruxa < /Greetings>


    <
    h1 > Random < /h1> <
    Random min = {
      1
    }
    max = {
      6
    }
    /> <
    Random min = {
      1
    }
    max = {
      100
    }
    />


    <
    /div>
  );
}




export default App;