import React, { Component } from "react";
import IdCard from "./components/Idcard";
import "./index.css";
import Greetings from "./components/Greetings";
import Random from "./components/Random";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1 id="blocktitles1">IdCard</h1>

        <IdCard
          lastName="Doe"
          firstName="John"
          gender="male"
          height={178}
          birth={new Date("1992-07-14")}
          picture="https://randomuser.me/api/portraits/men/44.jpg"
        />

        <IdCard
          lastName="Delores "
          firstName="Obrien"
          gender="female"
          height={172}
          birth={new Date("1988-05-11")}
          picture="https://randomuser.me/api/portraits/women/44.jpg"
        />

        <h1 id="blocktitles">Greetings</h1>
        {/* TODO: Use the Greetings component */}
        <div class="greetings">
          <Greetings lang="de">Ludwig</Greetings>
          <Greetings lang="fr">François</Greetings>
          <Greetings lang="en">Prince Harry</Greetings>
          <Greetings lang="es">Sergio Ramos</Greetings>
          {/* <Greetings lang="pt">Simao Meneses</Greetings> */}
        </div>

        <h1 id="blocktitles">Random</h1>

        <div class="random">
          <Random min={1} max={6} />
          <Random min={1} max={100} />
        </div>
      </div>
    );
  }
}

export default App;
