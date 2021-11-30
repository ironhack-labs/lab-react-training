import React from 'react';
import { useState } from 'react';
import './App.css';
import LikeButton from './components/LikeButton';

function App(props) {
  return (
      <div className="App">
        <header className="App-header">
        <LikeButton />
        </header>
      </div>
    );
  }
  
  export default App;
