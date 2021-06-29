import React from 'react';
import logo from './logo.svg';
import './App.css';
import IdCard from './IdCard';
import berlin from './data/berlin.json';
import Greetings from './Greetings';
import Random from './Random';
import BoxColor from './BoxColor';
import CreditCard from './CreditCard';
import Rating from './Rating';

function App() {
  return (
    <div className="App">
      <div>
        {/* <IdCard data={berlin[2]}/>
        <IdCard data={berlin[1]}/> */}
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
      </div>
      <div>
        <Greetings lang="de">Ludwig</Greetings>
        <Greetings lang="en">John</Greetings>
        <Greetings lang="es">Jose</Greetings>
        <Greetings lang="fr">Remi</Greetings>
      </div>
      <div>
        <Random min={1} max={6} />
        <Random min={1} max={100} /> 
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
          color="white"
        />
      </div>
      <div>
        <Rating>0</Rating>
        <Rating>1.49</Rating>
        <Rating>1.5</Rating>
        <Rating>3</Rating>
        <Rating>4</Rating>
        <Rating>5</Rating>
      </div>
    </div>
  );
}

export default App;