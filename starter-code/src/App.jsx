import React, { Component } from "react";
import IdCards from "./Components/IdCards";
import Greetings from "./Components/Greetings";
import Random from "./Components/Random";
import BoxColor from "./Components/BoxColor";
import CreditCard from "./Components/CreditCard";
import Rating from "./Components/Rating";
import DriverCard from "./Components/DriverCard";
import LikeButton from "./Components/LikeButton";
import ClickeablePicture from "./Components/ClickeablePicture";

class App extends Component {
  constructor() {
    super();
    this.state = {
      count: 0
    };
    this.increaseLikes = this.increaseLikes.bind(this);
  }

  increaseLikes() {
    // console.log("Im being called!");
    let count = this.state.count + 1;
    this.setState({
      count
    });
  }

  render() {
    return (
      <div className="App">
        <h1>ID Card</h1>
        <IdCards
          lastName="Doe"
          firstName="John"
          gender="male"
          height={178}
          birth={new Date("1992-07-14")}
          picture="https://randomuser.me/api/portraits/men/44.jpg"
        />
        <IdCards />
        <h1>Greetings</h1>
        {/* need to see how to add to the value */}
        <Greetings lang="es">Santiago</Greetings>
        <h1>Random</h1>
        <Random min={1} max={6} />
        <Random min={1} max={100} />
        <h1>Box Color</h1>
        <BoxColor r={255} g={0} b={0} />
        <BoxColor r={128} g={255} b={0} />
        <BoxColor r={0} g={0} b={255} />
        <h1>Credit Card</h1>
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
        <h1>Star Rating</h1>
        <Rating>0</Rating>
        <Rating>1.49</Rating>
        <Rating>1.5</Rating>
        <Rating>3</Rating>
        <Rating>4</Rating>
        <Rating>5</Rating>
        <h1>Driver Card</h1>
        <DriverCard
          name="Travis Kalanick"
          rating={4.2}
          img="https://si.wsj.net/public/resources/images/BN-TY647_37gql_OR_20170621052140.jpg?width=620&height=428"
          car={{
            model: "Toyota Corolla Altis",
            licensePlate: "CO42DE"
          }}
        />
        <DriverCard
          name="Dara Khosrowshahi"
          rating={4.9}
          img="https://ubernewsroomapi.10upcdn.com/wp-content/uploads/2017/09/Dara_ELT_Newsroom_1000px.jpg"
          car={{
            model: "Audi A3",
            licensePlate: "BE33ER"
          }}
        />
        <h1>Like Button</h1>
        <LikeButton />
        <LikeButton />
        <h1>Clickeable Picture</h1>
        <ClickeablePicture
        img="/img/persons/maxence.png"
        imgClicked="/img/persons/maxence-glasses.png" />
      </div>
    );
  }
}

export default App;
