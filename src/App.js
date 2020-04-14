import React, { Component } from "react";
import IdCard from "./IdCard";
import Greetings from "./Greetings";
import Random from "./Random";
import BoxColor from "./BoxColor";
import CreditCard from "./CreditCard"

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
          {idCards.map((idProps) => (
            <IdCard {...idProps} />
          ))}
        </div>

        <h1>Greetings</h1>
        {<Greetings lang="de">Ludwig</Greetings>}
        {<Greetings lang="fr">Francois</Greetings>}

        <h1>Random</h1>
        {<Random min={1} max={6} />}
        {<Random min={100} max={200} />}

        <h1>BoxColor</h1>
        {<BoxColor r={255} g={0} b={0} />}
        {<BoxColor r={128} g={255} b={0} />}

        <h1>CreditCard</h1>
        <div className="credit">
          {
            <CreditCard
              type="Visa"
              number="0123456789018845"
              expirationMonth={3}
              expirationYear={2021}
              bank="BNP"
              owner="Maxence Bouret"
              bgColor="#11aa99"
              color="white"
            />
          }
          {
            <CreditCard
              type="Master Card"
              number="0123456789010995"
              expirationMonth={3}
              expirationYear={2021}
              bank="N26"
              owner="Maxence Bouret"
              bgColor="#eeeeee"
              color="#222222"
            />
          }
          {
            <CreditCard
              type="Visa"
              number="0123456789016984"
              expirationMonth={12}
              expirationYear={2019}
              bank="Name of the Bank"
              owner="Firstname Lastname"
              bgColor="#ddbb55"
              color="white"
            />
          }
        </div>


      </div>
    );
  }
}

export default App;
