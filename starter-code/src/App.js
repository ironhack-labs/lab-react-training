import React, { Component } from "react";
import IdCard from "./components/IdCard";
import Data from "./data/berlin.json";
import LikeButton from "./components/LikeButton";
import { listItems } from "./components/ListItems";
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
        <LikeButton count={15} />
        {/* TODO: Use the Greetings component */}
        <ul>{listItems}</ul>
      </div>
    );
  }
}

export default App;
