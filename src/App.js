import React from 'react';
import ListIdCards from './ListIdCards'
import ListColorCards from './ListColorCards';
import ListCreditCards from './ListCreditCards';
import ListRatings from './ListRatings';
import LikeButton from './LikeButton';
import ClickablePicture from './ClickablePicture';
import RollDice from './RollDice';
import Carousel from './Carousel';
import NumbersTable from './NumbersTable';
import ListFbCards from './ListFbCards';
import ListDriversLicense from './ListDriversLicense';

import './App.css';

function App() {
   
  return (
    <main className="App">
      <div className="App_h1__wrapper">
        <h1 className="App_h1">This Was a Strange Lab</h1>
      </div>
      <ListFbCards title="Facebook Cards" />
      <NumbersTable title="Number Table" />
      <Carousel title="Look Pictures"
        images={[
          'https://randomuser.me/api/portraits/women/1.jpg',
          'https://randomuser.me/api/portraits/men/1.jpg',
          'https://randomuser.me/api/portraits/women/2.jpg',
          'https://randomuser.me/api/portraits/men/2.jpg',
        ]}
      />
      <RollDice title="Roll Some Dice" />
      <ClickablePicture title="Click Me!"/>
      <LikeButton title="Click Us Too Please"/>
      <ListDriversLicense title="Drivers" />
      <ListRatings title="Ratings" />
      <ListCreditCards title="Credit Cards" />
      <ListColorCards title="Colors" />
      <ListIdCards title="Students" />
    </main>
  );
}

export default App;
