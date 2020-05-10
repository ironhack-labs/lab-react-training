import React, { Component } from "react";
import IdCard from "./IdCard.js";
import Greetings from "./Greetings.js";
import Random from "./Random";

class App extends Component {
  render() {
    const idCards = [
      {
        lastName: "Doe",
        firstName: "John",
        gender: "male",
        height: 178,
        birth: "1992-07-14",
        picture: "https://randomuser.me/api/portraits/men/44.jpg",
      },
      {
        lastName: "Delores",
        firstName: "Obrien",
        gender: "female",
        height: 172,
        birth: "1988-05-11",
        picture: "https://randomuser.me/api/portraits/women/44.jpg",
      },
    ];
    return (
      <div className="App">
        {/* TODO: Use the IdCard component */}
        <h1>IdCard </h1>
        <div>
          {idCards.map((idProps) => (
            <IdCard {...idProps} />
          ))}
        </div>

        {/* TODO: Use the Greetings component */}
        <h1>Greetings</h1>
        <Greetings lang="de">Ludwig</Greetings>
        <Greetings lang="fr">François</Greetings>

        {/* TODO: Use Random component*/}
        <h1>Random</h1>
        <Random min={1} max={6} />
        <Random min={1} max={100} />

        {/* TODO: Use BoxColor component*/}
        <h1>BoxColor</h1>

        {/* TODO: Use CreditCard component*/}
        <h1>CreditCard</h1>

        {/* TODO: Use Rating component*/}
        <h1>Rating</h1>

        {/* TODO: Use DriverCard component*/}
        <h1>DriverCard</h1>

        {/* TODO: Use ClickablePicture component*/}
        <h1>ClickablePicture</h1>

        {/* TODO: Use Dice component*/}
        <h1>Dice</h1>

        {/* TODO: Use Carousel component*/}
        <h1>Carousel</h1>

        {/* TODO: Use NumbersTable component*/}
        <h1>NumbersTable</h1>
      </div>
    );
  }
}

export default App;
