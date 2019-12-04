import React, { Component } from "react";
import IdCard from "./components/Id";
import Great from "./components/Greetings";
import Random from "./components/Random";
import BoxColor from "./components/BoxColor";
import CreditCard from "./components/CreditCards";
import Rating from "./components/Rating";
import DriverCard from "./components/DriverCard";
import LikeButton from "./components/LikeButton";
import Clickable from "./components/ClickablePic";
import Dice from "./components/Dice";
import data from "./data/berlin.json";

class App extends Component {
  state = {
    contactData: data
  };
  render() {
    console.log(this.state.contactData);
    return (
      <div>
        <div>
          <IdCard
            lastName="Delores"
            firstName="Obrien"
            gender="female"
            height={172}
            birth="1988-05-11"
            picture="https://randomuser.me/api/portraits/women/44.jpg"
          />
          <IdCard
            lastName="Doe"
            firstName="John"
            gender="male"
            height={178}
            birth="1992-07-14"
            picture="https://randomuser.me/api/portraits/men/44.jpg"
          />
        </div>
        <Great lang="fr" children="François" />
        <Random min={1} max={2} />
        <BoxColor r={255} g={12} b={0} />
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
        <Rating child={1.49} />
        <DriverCard
          name="Travis Kalanick"
          rating={4.2}
          img="https://si.wsj.net/public/resources/images/BN-TY647_37gql_OR_20170621052140.jpg?width=620&height=428"
          car={{ model: "Toyota Corolla Altis", licensePlate: "CO42DE" }}
        />
        <LikeButton />
        <Clickable
          img="/img/persons/maxence.png"
          imgClicked="/img/persons/maxence-glasses.png"
        />
        <Dice />
      </div>
    );
  }
}

export default App;
