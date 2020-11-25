
import React from 'react';
import './App.css';
import ClickablePic from './ClickablePicture';
import LikeBtn from "./LikeBtn"
import DiceRoll from './Dice';
import carousel from "./carousel"


function App() {
  return (
    <div className="App">
      <LikeBtn /> <LikeBtn />
      <ClickablePic />
      <DiceRoll />
      <carousel />
    </div>
  );
}

export default App;
