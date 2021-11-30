import React from 'react';
import logo from './logo.svg';
import './App.css';
import LikeButton from './components/LikeButton';
import ClickablePicture from './components/ClickablePicture';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <LikeButton />
        <ClickablePicture />
      </header>
    </div>
  );
}

export default App;
