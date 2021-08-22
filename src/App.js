import React from 'react';
import BoxColor from './components/box-color/BoxColor';
import Greetings from './components/greetings/Greetings';
import IdCard from './components/id-card/IdCard';
import Random from './components/random/Random';

function App() {
  return (
    <div className="App m-2">
      <section className="idCards m-3">
        <h2>IdCard</h2>
        <IdCard
          lastName="Doe"
          firstName="John"
          gender="male"
          height={(178 / 100).toFixed(2) + 'm'}
          birth={new Date('1992-07-14').toDateString()}
          picture="https://randomuser.me/api/portraits/men/44.jpg"
        />
        <IdCard
          lastName="Delores "
          firstName="Obrien"
          gender="female"
          height={(172 / 100).toFixed(2) + 'm'}
          birth={new Date('1988-05-11').toDateString()}
          picture="https://randomuser.me/api/portraits/women/44.jpg"
        />
      </section>

      <section className="greetings m-3">
        <h2>Greetings</h2>
        <Greetings lang="de">Ludwig</Greetings>
        <Greetings lang="fr">François</Greetings>
      </section>

      <section className="random m-3">
        <h2>Random</h2>
        <Random min={1} max={6} />
        <Random min={1} max={100} />
      </section>

      <section className="box-color m-3">
        <h2>Box Color</h2>
        <BoxColor r={255} g={0} b={0} />
        <BoxColor r={128} g={255} b={0} />
      </section>
    </div>
  );
}

export default App;
