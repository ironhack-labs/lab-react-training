import React, { Component } from "react";
import IDcard from "./Comps/IDcard";
import Greetings from "./Comps/Greetings";
import Random from "./Comps/Random";
import BoxColor from "./Comps/BoxColor";
import CreditCard from "./Comps/CreditCard";

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>IDcard Component:</h1>
        <IDcard
          lastName="Williams"
          firstName="Laura"
          gender="female"
          height={165}
          birth={String(new Date("1992-03-10"))}
          picture="https://randomuser.me/api/portraits/women/29.jpg"
        />
        <IDcard
          lastName="Smith"
          firstName="Mike"
          gender="male"
          height={180}
          birth={String(new Date("1988-10-21"))}
          picture="https://randomuser.me/api/portraits/men/21.jpg"
        />
        <br />
        <br />
        <br /> <br />
        <br /> <br />
        <h1>Greetings Component:</h1>
        <Greetings lang="en">Good Morning</Greetings>
        <Greetings lang="es">Buenos días</Greetings>
        <Greetings lang="fr">Bonjour</Greetings>
        <br />
        <br />
        <br /> <br />
        <br /> <br />
        <h1>Random Component:</h1>
        <Random min={1} max={4} />
        <Random min={50} max={100} />
        <br />
        <br />
        <br /> <br />
        <br /> <br />
        <h1>BoxColor Component:</h1>
        <BoxColor r={75} g={161} b={181} />
        <BoxColor r={97} g={183} b={203} />
        <BoxColor r={124} g={205} b={223} />
        <BoxColor r={161} g={224} b={238} />
        <BoxColor r={194} g={240} b={250} />
        <BoxColor r={228} g={246} b={250} />
        <br />
        <br />
        <br /> <br />
        <br /> <br />
        <CreditCard
          type="visa"
          number="0123456789018845"
          expirationMonth={3}
          expirationYear={2021}
          bank="BNP"
          owner="Maxence Bouret"
          bgColor="#11aa99"
          color="white"
        />
        <CreditCard
          type="master card"
          number="0123456789010995"
          expirationMonth={3}
          expirationYear={2021}
          bank="N26"
          owner="Maxence Bouret"
          bgColor="#eeeeee"
          color="#222222"
        />
        <CreditCard
          type="master card"
          number="0123456789016984"
          expirationMonth={12}
          expirationYear={2019}
          bank="Name of the Bank"
          owner="Firstname Lastname"
          bgColor="#ddbb55"
          color="white"
        />
      </div>
    );
  }
}
