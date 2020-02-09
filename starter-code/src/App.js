import React, { Component } from "react";
import IdCard from "./Components/IdCard";
import Greetings from "./Components/Greetings";
import Random from "./Components/Random";
import "./Components/Style.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>IdCard</h1>
        <section className="idCard">
          <IdCard
            firstName="John"
            lastName="Doe"
            gender="Male"
            height="178"
            birth="Tue 1992-07-14"
            img="https://randomuser.me/api/portraits/men/44.jpg"
          />
          <IdCard
            firstName="Obrien"
            lastName="Delores"
            gender="Female"
            height="172"
            birth="Tue 1988-05-11"
            img="https://randomuser.me/api/portraits/women/44.jpg"
          />
        </section>

        <h1>Greetings</h1>
        <Greetings className="idcard" lang="en">
          {" "}
          Daniela
        </Greetings>
        <br></br>
        <Greetings lang="fr" className="idcard">
          {" "}
          Daniela
        </Greetings>

        <h1>Random</h1>
        <Random min={1} max={6}/>
        <Random min={1} max={100}/>

        <h1>BoxColor</h1>
        
      </div>
    );
  }
}

export default App;
