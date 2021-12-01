import React from 'react';
import logo from './logo.svg';
import './App.css';
import Dice from './components/Dice';
import LikeButton from './components/LikeButton';
import ClickablePicture from './components/ClickablePicture';
import Carousel from './components/Carousel';

function App() {
  return (
    <div className="App">
      <LikeButton />
      <LikeButton />
      <ClickablePicture />
      <Dice />
      <Carousel
        imgs={[
          'https://randomuser.me/api/portraits/women/1.jpg',
          'https://randomuser.me/api/portraits/men/1.jpg',
          'https://randomuser.me/api/portraits/women/2.jpg',
          'https://randomuser.me/api/portraits/men/2.jpg',
        ]}
      />
    </div>
  );
}

export default App;
