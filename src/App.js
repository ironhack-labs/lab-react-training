import React from 'react';
import './App.css';
import IdCardSection from './components/IdCardSection/IdCardSection';
import BoxColorSection from './components/BoxColorSection/BoxColorSection';
import GreetingsSection from './components/GreetingsSection/GreetingsSection';
import RandomSection from './components/RandomSection/RandomSection';
import CreditCardSection from './components/CreditCardSection/CreditCardSection';
import RatingSection from './components/RatingSection/RatingSection';
import DriverCardSection from './components/DriverCardSection/DriverCardSection';
import LikeButtonSection from './components/LikeButtonSection/LikeButtonSection';
import ClickablePictureSection from './components/ClickablePictureSection/ClickablePictureSection';
// import DiceSection from './components/DiceSection/DiceSection';
import CarouselSection from './components/CarouselSection/CarouselSection';
import NumbersTableSection from './components/NumbersTableSection/NumbersTableSection';
import ListAndKeysSection from './components/ListAndKeysSection/ListAndKeysSection';

function App() {
  return (
    <div className="App">
      <IdCardSection />
      <GreetingsSection />
      <RandomSection />
      <BoxColorSection />
      <CreditCardSection />
      <RatingSection />
      <DriverCardSection />
      <LikeButtonSection />
      <ClickablePictureSection />
      <CarouselSection />
      <NumbersTableSection />
      <ListAndKeysSection />
    </div>
  );
}

export default App;
