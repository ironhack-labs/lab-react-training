import React from 'react';
import logo from './logo.svg';
import IdCard from './IdCard';
import BoxColor from './BoxColor';
import Greetings from './Greetings';
import CreditCard from './CreditCard';
import DriverCard from './DriverCard';
import Rating from './Rating';
import Random from './Random'

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

  </div>
  );
}

export default App;
