import React from 'react';
import logo from './logo.svg';
import './App.css';
import IdCard from './Components/IdCard';
import Greetings from './Components/Greetings';
import LikeButton from './Components/LikeButton';
import ClickablePicture from './Components/ClickablePicture';
import NumbersTable from './Components/NumbersTable';

function App() {
  return (
    <>
      <h1>Id Card</h1>
      <IdCard
        lastName="Doe"
        firstName="John"
        gender="male"
        height={178}
        birth={new Date('1992-07-14')}
        picture="https://randomuser.me/api/portraits/men/44.jpg"
      />
      <IdCard
        lastName="Delores "
        firstName="Obrien"
        gender="female"
        height={172}
        birth={new Date('1988-05-11')}
        picture="https://randomuser.me/api/portraits/women/44.jpg"
      />
      <h1>Greetings</h1>
      <Greetings lang="de">Ludwig</Greetings>
      <Greetings lang="mx">Pancho</Greetings>
      {/* <h1>Random</h1>
      <Random min={1} max={6} />
      <Random min={1} max={100} /> */}
      <h1>Like Button</h1>
      <LikeButton /> <LikeButton />
      {/* <h1>Clickable Picture</h1>
      <ClickablePicture
        img="/img/persons/maxence.png"
        imgClicked="/img/persons/maxence-glasses.png"/> */}
      <h1>NumbersTable</h1>
      <NumbersTable limit={12} />
    </>
  );
}

export default App;
