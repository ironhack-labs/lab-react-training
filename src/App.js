import React from 'react';
import logo from './logo.svg';
import './App.css';
import Dice from './components/Dice'
import LikeButton from './components/LikeButton'
import ClickablePicture from './components/ClickablePicture'


function App() {
  return (
    <div className="App">

    <LikeButton />
    <LikeButton />
    <ClickablePicture />
    <Dice />
    
      
    </div>
  );
}

export default App;
