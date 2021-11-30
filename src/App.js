import React from 'react';
import logo from './logo.svg';
import './App.css';
import { LikeButton } from './components/LikeButton';
import { ClickablePicture } from './components/ClickablePicture';
import maxence from './assets/images/maxence.png';
import maxenceGlasses from './assets/images/maxence-glasses.png';
import { Dice } from './components/Dice';
import { Carousel } from './components/Carousel';
import IdCard from './components/IdCard'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <IdCard
          lastName="Doe"
          firstName="John"
          gender="male"
          height={178}
          birth={new Date('1992-07-14')}
          picture="https://randomuser.me/api/portraits/men/44.jpg"
        />

        <IdCard
          lastName="Delores "
          firstName="Obrien"
          gender="female"
          height={172}
          birth={new Date('1988-05-11')}
          picture="https://randomuser.me/api/portraits/women/44.jpg"
        />
        <LikeButton />
        <LikeButton />
        <Carousel
          imgs={[
            'https://randomuser.me/api/portraits/women/1.jpg',
            'https://randomuser.me/api/portraits/men/1.jpg',
            'https://randomuser.me/api/portraits/women/2.jpg',
            'https://randomuser.me/api/portraits/men/2.jpg',
          ]}
        />
        <ClickablePicture img={maxence} imgClicked={maxenceGlasses} />
        <Dice />
      </header>
    </div>
  );
}

export default App;
