import React, { Component } from "react";
import IdCard from "./components/cards/IdCard.js";
import Greetings from "./components/greetings/Greetings.js";
import Random from "./components//random/Random.js";
import BoxColor from "./components/boxColor/BoxColor.js";
import CreditCar from "./components/creditCard/CreditCard.js";
import Rating from "./components/rating/Rating.js";
import DriverCard from "./components/driverCard/DriverCard.js";
import LikeButton from "./components/likeButton/LikeButton.js";
import ClickablePicture from "./components/clickablePicture/ClickablePicture.js";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>IdCard</h1>
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
        <h1>Greetings</h1>
        <Greetings lang="de">Ludwig</Greetings>
        <Greetings lang="fr">François</Greetings>
        <h1>Random</h1>
        <Random min={1} max={6} />
        <Random min={1} max={100} />
        <h1>BoxColor</h1>
        <BoxColor color="#ff0000" />
        <BoxColor color="#80ff00" />
        <h1>CreditCard</h1>
        <CreditCar
          backgroundColor="rgb(17, 170, 153)"
          colorVal="white"
          image="/img/visa.png"
          number="•••• •••• •••• 8845"
          expireNum="Expires 03/21"
          bank="N26"
          owner="Maxence Bouret"
        />
        <CreditCar
          backgroundColor="rgb(238, 238, 238)"
          colorVal="rgb(34, 34, 34)"
          image="/img/master-card.svg"
          number="•••• •••• •••• 0995"
          expireNum="Expires 03/21"
          bank="BNP"
          owner="Maxence Bouret"
        />
        <CreditCar
          backgroundColor="rgb(221, 187, 85)"
          colorVal="white"
          image="/img/visa.png"
          number="•••• •••• •••• 6984"
          expireNum="Expires 03/21"
          bank="Name of the Bank"
          owner="Maxence Bouret"
        />
        <h1>Rating</h1>
        <Rating start="☆☆☆☆☆" />
        <Rating start="☆☆☆☆☆" />
        <Rating start="★☆☆☆☆" />
        <Rating start="★★☆☆☆" />
        <Rating start="★★★☆☆" />
        <Rating start="★★★★☆" />
        <Rating start="★★★★★" />
        <h1>DriverCard</h1>
        <DriverCard
          imageDriver="https://si.wsj.net/public/resources/images/BN-TY647_37gql_OR_20170621052140.jpg?width=620&height=428"
          title="Travis Kalanick"
          rating="★★★★☆"
          car="Toyota Corolla Altis - CO42DE"
        />
        <DriverCard
          imageDriver="https://ubernewsroomapi.10upcdn.com/wp-content/uploads/2017/09/Dara_ELT_Newsroom_1000px.jpg"
          title="Travis Kalanick"
          rating="★★★★★"
          car="Audi A3 - BE33ER"
        />
        <h1>LikeButton</h1>
        <LikeButton /> <LikeButton />
        <h1>ClickablePicture</h1>
        <ClickablePicture image="/img/persons/maxence.png" />
      </div>
    );
  }
}

export default App;
