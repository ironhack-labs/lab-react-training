import React from 'react';
import logo from './logo.svg';
import IdCard from './idcard/IdCard';
import Greetings from './greetings/Greetings';
import Random from './random/Random';
import BoxColor from './boxcolor/BoxColor';
import CreditCard from './creditcard/CreditCard';
import Rating from './rating/Rating';
import DriverCard from './drivercard/DriverCard';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>ID Card</h1>
      <IdCard
        imgId="../img/persons/maxence.png"
        firstName="John"
        lastName="Doe"
        gender="male"
        height="1.80cm"
        birth="10 Jun 1989"
      />
      <br />
      <h1>Greetings</h1>
      <Greetings lang="es" name="Rachel" />
      <br />
      <h1>Random Number</h1>
      <Random min={5} max={8} />
      <br />
      <h1>Box Color</h1>
      <BoxColor r={58} g={123} b={50} color="white" />
      <br />
      <h1>Credit Cards</h1>
      <div class="credit-cards">
        <CreditCard
          number="0123456789018845"
          year="2021"
          expirationMonth={3}
          type="master-card"
          bank="CGD"
          owner="John Doe"
          backColor="#eeeeee"
          color="black"
        />
        <CreditCard
          number="0123456789018845"
          year="2021"
          expirationMonth={3}
          type="master-card"
          bank="CGD"
          owner="John Doe"
          backColor="#11aa99"
          color="white"
        />
        <CreditCard
          number="0123456789018845"
          year="2021"
          expirationMonth={3}
          type="visa"
          bank="CGD"
          owner="John Doe"
          backColor="#ddbb55"
          color="white"
        />
      </div>
      <h1>Rating</h1>
      <Rating children={3} />
      <Rating children={4} />
      <Rating children={4.7} />
      <h1>Drivers cards</h1>
      <DriverCard
        name="Travis Kalanick"
        children={2}
        image="https://images.unsplash.com/photo-1556157382-97eda2d62296?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
        car={{
          model: 'Toyota Corolla Altis',
          licensePlate: 'CO42DE',
        }}
      />
      <br />
      <DriverCard
        name="Anna Gomez"
        children={4.7}
        image="https://images.unsplash.com/photo-1563228813-6c2e2a4b3951?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80"
        car={{
          model: 'Toyota Corolla Altis',
          licensePlate: 'CO42DE',
        }}
      />
    </div>
  );
}
export default App;