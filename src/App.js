import React from 'react';
import logo from './logo.svg';
import './App.css';
import IdCard from './components/idCard/idCard';
import Greetings from './components/greetings/Greetings';
import Random from './components/random/Random';
import BoxColor from './components/BoxColor/BoxColor';
import CreditCard from './components/CreditCard/CreditCard';

function App() {
  return (
    <div>
      <h1>IdCard</h1>
      <h2>Iteration 1</h2>
      <IdCard
        lastName="Delores "
        firstName="Obrien"
        gender="female"
        height={172}
        birth={new Date('1988-05-11')}
        picture="https://randomuser.me/api/portraits/women/44.jpg"
      />
      <IdCard
        lastName="Doe"
        firstName="John"
        gender="male"
        height={178}
        birth={new Date('1992-07-14')}
        picture="https://randomuser.me/api/portraits/men/44.jpg"
      />
      <br />
      <hr />
      <br />
      <h2>Iteration 2</h2>
      <Greetings lang="en">Ludwig</Greetings>
      <Greetings lang="fr">François</Greetings>
      <Greetings lang="es">Jaime</Greetings>
      <Greetings lang="de">Gustaf</Greetings>
      <br />
      <hr />
      <br />
      <h2>Iteration 3</h2>
      <Random min={1} max={6} />
      <Random min={1} max={100} />
      <br />
      <hr />
      <br />
      <h2>Iteration 4</h2>
      <BoxColor r={255} g={0} b={0} color="white" />
      <BoxColor r={128} g={255} b={0} />
      <br />
      <hr />
      <br />
      <h2>Iteration 5</h2>
    </div>
  );
}

export default App;
