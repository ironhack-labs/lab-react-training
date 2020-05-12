import React, { Component } from "react";
import IdCard from "./components/IdCard";
import Greetings from "./components/Greetings";
import Random from "./components/Random";
import BoxColor from "./components/BoxColor";
import CreditCard from "./components/CreditCard";
import Rating from "./components/Rating"
import DriveCard from "./components/DriveCard";
import LikeButton from "./components/LikeButton";
import ClickablePicture from "./components/ClickablePicture";
import Dice from "./components/Dice";
import Carousel from "./components/Carousel";
import NumbersTable from "./components/NumbersTable";
import Facebook from "./components/Facebook";


class App extends Component {
  render() {

    const johnId = {
      image: "https://randomuser.me/api/portraits/men/44.jpg",
      firstName: "John",
      lastName: "Doe",
      gender: "male",
      heigth: 1.78,
      birth: "Tue Jul 14 1992"
    }

    const obrienId = {
      image: "https://randomuser.me/api/portraits/women/44.jpg",
      firstName: "Obrien",
      lastName: "Delores",
      gender: "female",
      heigth: 1.72,
      birth: "Tue May 11 1993"
    }

    const creditCards = [
      {
        type: "Visa",
        number: "0123456789018845",
        expirationMonth: 3,
        expirationYear: 2021,
        bank: "BNP",
        owner: "Maxence Bouret",
        bgColor: "#11aa99",
        color: "white",
      },
      {
        type: "MasterCard",
        number: "0123456789010995",
        expirationMonth: 3,
        expirationYear: 2021,
        bank: "N26",
        owner: "Maxence Bouret",
        bgColor: "#eeeeee",
        color: "#222222",
      },
      {
        type: "Visa",
        number: "0123456789016984",
        expirationMonth: 12,
        expirationYear: 2019,
        bank: "Name of the Bank",
        owner: "Firstname Lastname",
        bgColor: "#ddbb55",
        color: "white"
      }
    ]

    const driveCards = [
      {
        name: "Travis Kalanick",
        rating: 4.2,
        img: "https://si.wsj.net/public/resources/images/BN-TY647_37gql_OR_20170621052140.jpg?width=620&height=428",
        car: {
          model: "Toyota Corolla Altis",
          licensePlate: "CO42DE"
        }
      },
      {
        name: "Dara Khosrowshahi",
        rating: 4.9,
        img: "https://ubernewsroomapi.10upcdn.com/wp-content/uploads/2017/09/Dara_ELT_Newsroom_1000px.jpg",
        car: {
          model: "Audi A3",
          licensePlate: "BE33ER"
        }
      }
    ]

    return (
      <div className="App" >

        <h1>IdCard</h1>
        {/* TODO: Use the IdCard component */}
        <IdCard {...johnId} />
        <IdCard {...obrienId} />

        < h1 > Greetings</h1 >
        {/* TODO: Use the Greetings component */}
        < Greetings lang="de" name="Ludwig" />
        <Greetings lang="fr" name="François" />

        <h1>Random</h1>
        {/* TODO: Use the Random component */}
        <Random min={1} max={6} />
        <Random min={1} max={100} />

        <h1>Box Color</h1>
        {/* TODO: Use the BoxColor component */}
        <BoxColor r={255} g={0} b={0} />
        <BoxColor r={128} g={225} b={0} />

        <h1>Credit Card</h1>
        {/* TODO: Use the CreditCard component */}
        <div className="credit-card-container">
          {creditCards.map((cardProps, index) => (
            <CreditCard key={index} {...cardProps} />
          ))}
        </div>

        <h1>Rating</h1>
        {/* TODO: Use the Rating component */}
        <Rating>0</Rating>
        <Rating>1.49</Rating>
        <Rating>1.5</Rating>
        <Rating>3</Rating>
        <Rating>4</Rating>
        <Rating>5</Rating>

        <h1>DriveCard</h1>
        {/* TODO: Use the DriveCard component */}
        {driveCards.map((cardProps, index) => (
          <DriveCard key={index} {...cardProps} />
        ))}

        <h1>Like Button</h1>
        {/* TODO: Use the LikeButton component */}
        <LikeButton />

        <h1>Clickable Picture</h1>
        {/* TODO: Use the ClickablePicture component */}
        <ClickablePicture />

        <h1>Dice</h1>
        {/* TODO: Use the Dice component */}
        <Dice />

        <h1>Carousel</h1>
        {/* TODO: Use the Carousel component */}
        <Carousel />

        <h1>Numbers Table</h1>
        {/* TODO: Use the NumbersTable component */}
        <NumbersTable limit={12}/>

        <h1>Facebook</h1>
        {/* TODO: Use the NumbersTable component */}
        <Facebook />


      </div >
    );
  }
}

export default App;
