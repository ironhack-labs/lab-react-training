import React, { Component } from 'react';
import IdCard from './IdCard.js'
import Greetings from './Greetings.js'
import Random from './Random.js'
import LikeButton from './LikeButton.js'


class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>IdCard</h1>
        <div>
          <IdCard
            lastName='Doe'
            firstName='John'
            gender='male'
            height={178}
            birth={new Date("1992-07-14")}
            picture="https://randomuser.me/api/portraits/men/44.jpg" />

          <IdCard
            lastName='Obrien '
            firstName='Delores'
            gender='female'
            height={172}
            birth={new Date("1988-05-11")}
            picture="https://randomuser.me/api/portraits/women/44.jpg" />

        </div>
        <h1>Greetings</h1>
        <div>
          <Greetings lang="de">Ludwig</Greetings>
          <Greetings lang="fr">François</Greetings>
          <Greetings lang="en">Charles</Greetings>
          <Greetings lang="es">Dolores</Greetings>
          <Random min={1} max={6} ></Random>
          <Random min={1} max={100}></Random>

          <LikeButton />

        </div>
      </div >



    );
  }
}

export default App;
