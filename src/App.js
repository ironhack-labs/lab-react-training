import React from 'react';
import './App.css';
import ClickablePicture from './components/ClickablePicture';
import LikeButton from './components/LikeButton';

function App(props) {
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
