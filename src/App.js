import React from 'react';
import './App.css';
import IdCard from './components/IdCard';
import Random from './components/Random';

import pic1 from './assets/images/dahlia.jpg';
import pic2 from './assets/images/flo.jpg';
import BoxColor from './components/BoxColor';

const people = [
  {
    id: "12345",
    lastName: "Jublot",
    firstName: "Dahlia",
    gender: "so far, undefined",
    height: "80",
    birth: "25.06.2020",
    picture: pic1,
    lang: "en"
  },
  {
    id: "67891",
    lastName: "Jublot",
    firstName: "Florian",
    gender: "male",
    height: "178",
    birth: "16.11.1990",
    picture: pic2,
    lang: "fr"
  }
]

function App() {
  return (
    <div>
      <header>
        <p>Hello! This is a small react app just for learning. </p>

        { people.map( (p) => 
            <IdCard key={p.id} person={p} />
        ) }           

        <p> Now some Random stuff....</p>
        <Random min={Math.random()} max={Math.floor(Math.random() * 100) + 1}/>

        <div className="boxes-color">
          <BoxColor r={'234'} g={'222'} b={'111'} />
          <BoxColor r={'207'} g={'222'} b={'111'} />
          <BoxColor r={'207'} g={'222'} b={'999'} />
          <BoxColor r={'333'} g={'222'} b={'333'} />
        </div>


      </header>
    </div>
  );
}

export default App;
