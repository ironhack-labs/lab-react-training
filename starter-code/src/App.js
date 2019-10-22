import React, { Component } from "react";
import IdCard from "./components/IdCard";
import Data from "./data/berlin.json";

class App extends Component {
  render() {
    console.log("Data", Data);
    return (
      <div className="App">
        <h1>IdCard</h1>
        {Data.map(e => {
          return <IdCard birthDay={new Date("1992-07-14")} data={e} />;
        })}
        <h1>Greetings</h1>

        {/* TODO: Use the Greetings component */}
      </div>
    );
  }
}

export default App;
