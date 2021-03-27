import React from 'react';
import Iteration from './components/0.Iteration/Iteration'
import ListCard from './components/1.IDcards/ListCard'
import Greetings from './components/2.Greets/Greetings'
import Random from './components/3.Random/Random'
import Boxes from './components/4.ColorBoxes/Boxes'
import CardContainer from './components/5.CreditCard/CardContainer';
import RatingsContainer from './components/6.RatingStar/RatingsContainer';
import DriverContainer from './components/7.DriverCard/DriverContainer';
import LikeContainer from './components/8.LikeBtn/LikeContainer';
import ClickablePicture from './components/9.ClickablePicture/ClickablePicture';
import Dice from './components/10.Dice/Dice';
import Carousel from './components/11.Carousel/Carousel';
import NumbersTable from './components/12.NumbersTable/NumbersTable';
import FacebookContainer from './components/13.14.Fb/FacebookContainer';
import './App.scss';

function App() {
  return (
    <div className="App">
     <Iteration num={1}/>
     <ListCard />
     <Iteration num={2}/>
     <Greetings />
     <Iteration num={3}/>
     <Random min={25} max={50} />
     <Random min={75} max={100} />
     <Iteration num={4}/>
     <Boxes />
     <Iteration num={5}/>
     <CardContainer />
     <Iteration num={6}/>
     <RatingsContainer />
     <Iteration num={7}/>
     <DriverContainer />
     <Iteration num={8}/>
     <LikeContainer />
     <Iteration num={9}/>
     <ClickablePicture />
     <Iteration num={10}/>
     <Dice />
     <Iteration num={11}/>
     <Carousel />
     <Iteration num={12}/>
     <NumbersTable limit={16}/>
     <Iteration num={13.14}/>
     <FacebookContainer />
    </div>
  );
}

export default App;
