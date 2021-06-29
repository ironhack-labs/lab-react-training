import React from 'react';
import logo from './logo.svg';
import './App.css';
import IdCard from './IdCard'
import berlin from './data/berlin.json'
import Greetings from './Greetings'
import Random from './Random'
import BoxColor from './BoxColor'
import CreditCard from './CreditCard'
import Rating from './Rating'

function App() {
  console.log(berlin)
  console.log('anything')
  return (
    <div className="App">

      <div>
        <IdCard data={berlin[0]}/>
      </div>
<div>
  <Greetings lang='de'>Ludwig</Greetings>
  <Greetings lang='en'>John</Greetings>
  <Greetings lang='es'>Jose</Greetings>
  <Greetings lang='fr'>Remi</Greetings>
</div>
<div>
  <Random min={1} max={6}/><br></br>
  <Random min={1} max={100}/> <br></br>
</div>
<div>
  <BoxColor r={255} g={0} b={255} />
  <BoxColor r={128} g={255} b={0} />
</div>
<div>
  <CreditCard
    type="Visa"
    number="0123456789018845"
    expirationMonth={3}
    expirationYear={2021}
    bank="BNP"
    owner="Maxence Bouret"
    bgColor="#11aa99"
    color="white" />
</div>
<div>
  <Rating>0</Rating><br></br>
  <Rating>1.49</Rating><br></br>
  <Rating>1.5</Rating><br></br>
  <Rating>3</Rating><br></br>
  <Rating>4</Rating><br></br>
  <Rating>5</Rating><br></br>
</div>
    </div>
  );
}

export default App;

{/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}