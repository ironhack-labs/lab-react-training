import React, { Component } from "react";
import IDcard from "./Comps/IDcard";
import Greetings from "./Comps/Greetings";
import Random from "./Comps/Random";

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>IDcard Component:</h1>
        <IDcard
          lastName="Williams"
          firstName="Laura"
          gender="female"
          height={165}
          birth={String(new Date("1992-03-10"))}
          picture="https://randomuser.me/api/portraits/women/29.jpg"
        />
        <IDcard
          lastName="Smith"
          firstName="Mike"
          gender="male"
          height={180}
          birth={String(new Date("1988-10-21"))}
          picture="https://randomuser.me/api/portraits/men/21.jpg"
        />

        <h1>Greetings Component:</h1>
        <Greetings lang="en">Good Morning</Greetings>
        <Greetings lang="es">Buenos días</Greetings>
        <Greetings lang="fr">Bonjour</Greetings>

        <h1>Random Component:</h1>
        <Random min={1} max={4} />
        <Random min={50} max={100} />
      </div>
    );
  }
}
