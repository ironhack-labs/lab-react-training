import React from 'react';
import './App.css';

import BoxColor from './components/box-color/BoxColor';
import Random from './components/random/Random';
import Greeting from './components/greeting/Greeting';
import IdCard from './components/id-card/IdCard';

function App() {
  return (
    <div className="App container row">

      <div className="mx-4 my-4">
        <IdCard lastName="Doe" firstName="John" gender="Male" height={`${1.78}m`} birth={new Date("1992-07-14")} picture="https://randomuser.me/api/portraits/men/44.jpg" />
        <IdCard lastName="Delores" firstName="Obrien" gender="Female" height={`${1.72}m`} birth={new Date("1988-05-11")} picture="https://randomuser.me/api/portraits/women/44.jpg" />
      </div>

      <div className="row m-4 text-start">
        <Greeting className="col-12" lang="de">Ludvig</Greeting>
        <Greeting className="col-12" lang="fr">Pierre</Greeting>
        <Greeting className="col-12" lang="es">Kiko</Greeting>
      </div>

      <div className="row m-4 text-start">
        <Random min={1} max={6} />
        <Random min={0} max={100} />
        <Random min={25} max={50} />
      </div>

      <BoxColor r="255" g="0" b="0" />



    </div>
  );
}

export default App;
