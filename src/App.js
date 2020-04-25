import React, { Component } from "react";
import IdCard from "./components/IdCard";
import Greetings from "./components/Greetings";
import Random from "./components/Random";
import BoxColor from "./components/BoxColor";
import "./App.css";
class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>IdCard</h1>
        {/* TODO: Use the IdCard component */}
        <div className="id-card">
          <IdCard
            lastName="Doe"
            firstName="John"
            gender="male"
            height={178}
            birth={new Date("1992-07-14").toDateString()}
            picture="https://randomuser.me/api/portraits/men/44.jpg"
          />
        </div>
        <div className="id-card">
          <IdCard
            lastName="Delores "
            firstName="Obrien"
            gender="female"
            height={172}
            birth={new Date("1988-05-11").toDateString()}
            picture="https://randomuser.me/api/portraits/women/44.jpg"
          />
        </div>

        <h1>Greetings</h1>
        <div className="greetings">
          <Greetings lang="de">Ludwig</Greetings>
        </div>
        <div className="greetings">
          <Greetings lang="fr">François</Greetings>
        </div>

        <h1>Random</h1>
        <div>
          <Random min={1} max={6} />
          <Random min={1} max={100} />
        </div>

        <h1>Box Color</h1>
        <div>
          <BoxColor r={210} g={50} b={0} />
          <BoxColor r={0} g={180} b={0} />
        </div>
      </div>
    );
  }
}

export default App;
