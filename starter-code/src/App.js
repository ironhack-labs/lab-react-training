import React, { Component } from "react";
import IDcard from "./Comps/IDcard";
import Greetings from "./Comps/Greetings";
import Random from "./Comps/Random";
import BoxColor from "./Comps/BoxColor";

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

        <h1>BoxColor Component:</h1>
        <BoxColor r={75} g={161} b={181} /><BoxColor r={97} g={183} b={203} /><BoxColor r={124} g={205} b={223} />
        <BoxColor r={161} g={224} b={238} /><BoxColor r={194} g={240} b={250} /><BoxColor r={228} g={246} b={250} />
      </div>
    );
  }
}
