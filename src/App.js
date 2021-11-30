import React from 'react';
import './App.css';
import { LikeButton } from './components/LikeButton';
import { ClickablePicture } from './components/ClickablePicture';
import img from './assets/images/maxence.png'
import imgClicked from './assets/images/maxence-glasses.png'

function App() {
  return (
    <>
      <ClickablePicture
        img= {img}
        imgClicked={imgClicked}
      />
      <LikeButton />
    </>
  );
}

export default App;
