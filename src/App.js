import React from 'react';
import './App.css';
import ClickablePicture from './components/ClickablePicture';
import LikeButton from './components/LikeButton';
import Dice from './components/Dice';
import Carousel from './components/Carousel';

function App(props) {
  return (
      <div className="App">
        <header className="App-header">
        <LikeButton />
        <ClickablePicture />
        <Dice />
        <Carousel />
        </header>
      </div>
    );
  }
  
  export default App;
