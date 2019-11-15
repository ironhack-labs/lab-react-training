import React, { Component } from "react";
import list from "./data/berlin.json";
import IdCard from "./components/IdCard";
import GreetingCard from "./components/GreetingCard";
import Random from "./components/Random";
import BoxColor from "./components/BoxColor";
import CreditCard from "./components/CreditCard.jsx";
import Rating from "./components/Rating.jsx";
import DrivingCard from "./components/DrivingCard";

const randomNums = {
  min: 1,
  max: Math.floor(Math.random() * 100)
};

const boxColors = {
  red: Math.floor(Math.random() * 255),
  green: Math.floor(Math.random() * 255),
  blue: Math.floor(Math.random() * 255)
};
const drivingCard = {
  name: "Travis Kalanick",
  rating: 4.2,
  img:
    "https://si.wsj.net/public/resources/images/BN-TY647_37gql_OR_20170621052140.jpg?width=620&height=428",
  car: {
    model: "Toyota Corolla Altis",
    licensePlate: "CO42DE"
  }
};
const ratingNum = Math.floor(Math.random() * 6);

const creditCards = [
  {
    image: "http://pngimg.com/uploads/visa/visa_PNG4.png",
    number: 123456789018845,
    expirationMonth: 3,
    expirationYear: 2021,
    bank: "BNP",
    owner: "Some Name",
    bgColor: "#11aa99",
    color: "white"
  },
  {
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/MasterCard_Logo.svg/1280px-MasterCard_Logo.svg.png",
    number: 123456789010995,
    expirationMonth: 3,
    expirationYear: 2021,
    bank: "N26",
    owner: "Maxence Bouret",
    bgColor: "#eeeeee",
    color: "#222222"
  },
  {
    image: "http://pngimg.com/uploads/visa/visa_PNG4.png",
    number: 123456789016984,
    expirationMonth: 12,
    expirationYear: 2019,
    bank: "Chase",
    owner: "Random Person",
    bgColor: "#ddbb55",
    color: "white"
  }
];

class App extends Component {
  render() {
    return (
      <div className="App">
        <div>
          <h1>IdCard</h1>
          {list.map(eachPerson => (
            <IdCard
              lastName={eachPerson.lastName}
              firstName={eachPerson.firstName}
              country={eachPerson.country}
              img={eachPerson.img}
              isStudent={eachPerson.isStudent}
            />
          ))}

          <h1>Greetings</h1>
          {list.map(eachPerson => (
            <GreetingCard
              language={eachPerson.language}
              greeting={eachPerson.greeting}
              firstName={eachPerson.firstName}
            />
          ))}
        </div>
        <div>
          <div>
            <h1>Random Numbers</h1>
            <Random minNumber={randomNums.min} maxNumber={randomNums.max} />
          </div>
          <BoxColor
            redColor={boxColors.red}
            greenColor={boxColors.green}
            blueColor={boxColors.blue}
          />
          <DrivingCard
            name={drivingCard.name}
            numberOfStars={drivingCard.rating}
            driverPic={drivingCard.img}
            carModel={drivingCard.car.model}
            carlicense={drivingCard.car.licensePlate}
            driverRating={drivingCard.rating}
          />
        </div>
        <div>
          {creditCards.map(eachCard => (
            <CreditCard
              creditType={eachCard.image}
              creditNumber={eachCard.number}
              creditExpirationMonth={eachCard.expirationMonth}
              creditExpirationYear={eachCard.expirationYear}
              creditBank={eachCard.bank}
              creditOwner={eachCard.owner}
              creditBgColor={eachCard.bgColor}
              creditColor={eachCard.color}
            />
          ))}
          <Rating numberOfStars={ratingNum} />
        </div>
      </div>
    );
  }
}

export default App;
