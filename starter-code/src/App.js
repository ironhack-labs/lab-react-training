import React, { Component } from "react";
import IDcard from "./Comps/IDcard";

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>IdCard</h1>
        <IDcard
          lastName="Williams"
          firstName="Laura"
          gender="female"
          height={165}
          birth={String(new Date("1992-03-10"))}
          picture="https://randomuser.me/api/portraits/women/29.jpg"
        />
        <IDcard
          lastName="Mike"
          firstName="Smith"
          gender="male"
          height={180}
          birth={String(new Date("1988-10-21"))}
          picture="https://randomuser.me/api/portraits/men/21.jpg"
        />
        <h1>Greetings</h1>
        {/* TODO: Use the Greetings component */}
      </div>
    );
  }
}
