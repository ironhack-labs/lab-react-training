import React from 'react';
import IdCard from './components/IdCard';
import Greetings from './components/Greetings';
import RandomNumber from './components/RandomNumber';
import BoxColor from './components/BoxColor';
import CreditCard from './components/CreditCard';
import Rating from './components/Rating';
import './App.css'
import DriverCard from './components/DriverCard';
import LikeButton from './components/LikeButton';
import ClickedImg from './components/ClickedImg';
import Dice from './components/Dice';
import Caroussel from './components/Caroussel';
import NumbersTable from './components/NumbersTable';
import {iDCardsData, drivers, creditCardData, carouselImgs} from './data/someData'
import random from './awesome-tools/random'
import hideNumbers from "./awesome-tools/replaceNums";
import SignupPage from './components/SignupPage';
import Facebook from './components/Facebook';


function App() {
  
  const renderIdCard = iDCardsData.map(user => (
    <IdCard 
      lastName={user.lastName} 
      firstName={user.firstName} 
      gender={user.gender}
      height={user.height}
      birth={user.date}  
      picture={user.picture}
      key={user.lastName}
      />
  ));

  const renderDrivers = drivers.map(driver => (
    <DriverCard
      imgUrl={driver.img}
      name={driver.name}
      driverRating={driver.rating}
      model={driver.car.model}
      licensePlate={driver.car.licensePlate}
      key={driver.name}
    />
  ))

  const renderCCard = creditCardData.map(elem => (
    <CreditCard 
      type={elem.type}
      number={hideNumbers(elem.number)}
      expirationMonth={elem.expirationMonth}
      expirationYear={elem.expirationYear}
      bank={elem.bank}
      owner={elem.owner}
      bgColor={elem.bgColor}
      color={elem.color}
      className="c-card"
      key={elem.owner}
    />
  ))

  return (
    <div className="App">
        {/* {renderIdCard}
        <Greetings lang={random.lang()} />
        <RandomNumber min={random.num(10)} max={random.num(5000)} />
        <BoxColor r={random.color()} g={random.color()} b={random.color()} />
        <div className="c-card-container" >
        {renderCCard}
        </div>
        <Rating value={2}/>
        {renderDrivers}
        <LikeButton />
        <ClickedImg />
        <Dice />
        <Caroussel images={carouselImgs}/>
        <NumbersTable limit={15}/>
        <SignupPage /> */}
        <Facebook />
    </div>
  );
}

export default App;
