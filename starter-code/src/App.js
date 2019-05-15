import React, { Component } from "react";
import IdCard from "./components/IdCard";
import IdCardData from "./data/IdCardData.json";
import Greetings from "./components/Greetings";
import Random from "./components/Random";
import BoxColor from "./components/BoxColor";

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* IdCard Component */}
        <h1 className="title">IdCard</h1>
        {IdCardData.map((person, index) => (
          <IdCard key={index} {...person} />
        ))}
        {/* Greetings Component */}
        <h1 className="title">Greetings</h1>
        <Greetings lang="de">Ludwig</Greetings>
        <Greetings lang="fr">François</Greetings>

        {/* Random Component */}
        <h1 className="title">Random</h1>
        <Random min={1} max={6} />
        <Random min={1} max={100} />

        {/* BoxColor Component */}
        <h1 className="title">BoxColor</h1>
        <BoxColor r={255} g={0} b={0} />
        <BoxColor r={128} g={255} b={0} />
      </div>
    );
  }
}

export default App;
