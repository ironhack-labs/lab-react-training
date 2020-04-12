import React, { Component } from "react";
import IdCard from "./IdCard";

const idCards = [
  {
    lastName: "Doe",
    firstName: "John",
    gender: "male",
    height: 1.78,
    birth: `${new Date("1992-07-14")}`,
    picture: "https://randomuser.me/api/portraits/men/44.jpg",
  },
  {
    lastName: "Delores",
    firstName: "Obrien",
    gender: "female",
    height: 1.72,
    birth: `${new Date("1988-05-11")}`,
    picture: "https://randomuser.me/api/portraits/women/44.jpg",
  },
];
class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="cards">
          <h1>IdCard</h1>
          {
            /* TODO: Use the IdCard component */
            idCards.map((idProps) => (
              <IdCard {...idProps} />
            ))
          }
        </div>

        <h1>Greetings</h1>
        {/* TODO: Use the Greetings component */}
      </div>
    );
  }
}

export default App;
