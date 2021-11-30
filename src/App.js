import React from 'react';
import logo from './logo.svg';
import './App.css';
import LikeButton from './components/LikeButton';
import ClickablePicture from './components/ClickablePicture';

function App() {
  return (
    <div className="App">
    
      <LikeButton/>
      <ClickablePicture img='../assets/images/maxence.png' imgClicked='../assets/images/maxence-glasses.png'/>

    </div>
  );
}

export default App;
