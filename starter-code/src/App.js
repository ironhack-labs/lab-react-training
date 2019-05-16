import React, { Component } from "react";
import IdCard from "./components/IdCard";
import IdCardData from "./data/IdCardData.json";
import Greetings from "./components/Greetings";
import Random from "./components/Random";
import BoxColor from "./components/BoxColor";
import CreditCard from "./components/CreditCard";
import Rating from "./components/Rating";
import DriverCard from "./components/DriverCard";
import LikeButton from "./components/Likebutton";
import ClickablePicture from "./components/ClickablePicture";
import Dice from "./components/Dice";
import Carousel from "./components/Carousel";
import NumbersTable from "./components/NumbersTable";

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* IdCard Component */}
        <h1 className="title">IdCard</h1>
        {IdCardData.map((person, index) => (
          <IdCard key={index} {...person} />
        ))}
        {/* Greetings Component */}
        <h1 className="title">Greetings</h1>
        <Greetings lang="de">Ludwig</Greetings>
        <Greetings lang="fr">François</Greetings>

        {/* Random Component */}
        <h1 className="title">Random</h1>
        <Random min={1} max={6} />
        <Random min={1} max={100} />

        {/* BoxColor Component */}
        <h1 className="title">BoxColor</h1>
        <BoxColor r={255} g={0} b={0} />
        <BoxColor r={128} g={255} b={0} />

        {/* CreditCard Component */}
        <h1 className="title">CreditCard</h1>
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

        {/* Rating Component */}
        <h1 className="title">Rating</h1>
        <Rating>0</Rating>
        <Rating>1.49</Rating>
        <Rating>1.5</Rating>
        <Rating>3</Rating>
        <Rating>4</Rating>
        <Rating>5</Rating>

        {/* DriverCard Component */}
        <h1 className="title">Rating</h1>
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
        {/* Like Button Component */}
        <h1 className="title">Like Button</h1>
        <div className="columns">
          <div className="column is-1">
            <LikeButton />
          </div>
          <div className="column is-1">
            <LikeButton />
          </div>
        </div>

        {/* ClickablePicture Component */}
        <h1 className="title">Clickable Picture</h1>
        <ClickablePicture
          img="/img/persons/maxence.png"
          imgClicked="/img/persons/maxence-glasses.png"
        />

        {/* Dice  Component */}
        <h1 className="title">Dice</h1>
        <Dice />

        {/* Carousel  Component */}
        <h1 className="title">Carousel</h1>
        <Carousel
          imgs={[
            "https://randomuser.me/api/portraits/women/1.jpg",
            "https://randomuser.me/api/portraits/men/1.jpg",
            "https://randomuser.me/api/portraits/women/2.jpg",
            "https://randomuser.me/api/portraits/men/2.jpg"
          ]}
        />

        {/* NumbersTable Component */}
        <h1 className="title">NumbersTable</h1>
        <NumbersTable limit={12}/>
      </div>
    );
  }
}

export default App;
