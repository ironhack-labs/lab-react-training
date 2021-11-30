import React from 'react';
import logo from './logo.svg';
import './App.css';
import LikeButton from './components/LikeButton';
import ClickablePicture from './components/ClickablePicture';
import Dice from './components/Dice';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <LikeButton />
        <ClickablePicture />
        <Dice />
      </header>
    </div>
  );
}

export default App;
