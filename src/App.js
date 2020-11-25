import React from 'react';
import logo from './logo.svg';
import IdCard from './IdCard';
import BoxColor from './BoxColor';
import Greetings from './Greetings';
import CreditCard from './CreditCard';
import DriverCard from './DriverCard';
import Rating from './Rating';
import Random from './Random'
import LikeButton from './LikeButton'
import ClickablePicture from './ClickablePicture'
import Dice from './Dice'
import Carousel from './Carousel'
import NumbersTable from './NumbersTable'
import Facebook from './Facebook'
import SignupPage from './SignupPage'
import './App.css';

function App() {
  return (<div>
<IdCard/>
<Greetings/>
<Random/>
<BoxColor/>
<CreditCard/>
<Rating/>
<DriverCard/>
<LikeButton/> 
<ClickablePicture/>
<Dice />
<Carousel/>
<NumbersTable/>
<Facebook/>
<SignupPage />
  </div>
  );
}

export default App;
