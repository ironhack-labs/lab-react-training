import React from 'react';
import logo from './logo.svg';
import './App.css';
import IdCard from './Components/IdCard';
import Greetings from './Components/Greetings';
import Random from './Components/Random';
import LikeButton from './Components/LikeButton';
import ClickablePicture from './Components/ClickablePicture';
function App() {

  return (
<>
    <h1>IdCard</h1>
    <IdCard
      lastName='Prieto'
      firstName='Josue'
      gender='Male'
      height={172}
      birth={new Date("1998-07-14")}
      picture="https://randomuser.me/api/portraits/men/44.jpg"
    />

    <IdCard
      lastName='Sanchez'
      firstName='Alan'
      gender='Male'
      height={167}
      birth={new Date("1999-06-11")}
      picture="https://randomuser.me/api/portraits/women/44.jpg"
    />

    <h1>Greetings</h1>
    <Greetings lang="de">Ludwig</Greetings>
    <Greetings lang="fr">François</Greetings>

    <h1>Random</h1>
    <Random min={1} max={6}/>
    <Random min={1} max={100}/>

    <h1>BoxColor</h1>

    <h1>CreditCard</h1>

    <h1>Rating</h1>

    <h1>DriverCard</h1>

    
    
    <h1>LikeButton</h1>


    <LikeButton/> <LikeButton />


    <h1>ClickablePicture</h1>

    <ClickablePicture />

    <h1>Dice</h1>

    <h1>Carousel</h1>

    <h1>NumbersTable</h1>



</>

  );
}

export default App;
