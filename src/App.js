import React from 'react';
import './App.css';
import IdCard from "./components/IdCard"
import Greetings from "./components/Greetings"
import Random from "./components/Random"
import BoxColor from "./components/BoxColor"
import CreditCard from "./components/CreditCard"
import Rating from "./components/Rating"
import DriverCard from "./components/DriverCard"

function App() {
  const persons = [
    {
      firstName: "Doe",
      lastName: "John",
      gender: "male",
      height: 178,
      birth: new Date("1992-07-14"),
      picture: "https://randomuser.me/api/portraits/men/44.jpg"
    },
    {
      firstName: "Delores",
      lastName: "Obrien",
      gender: "female",
      height: 172,
      birth: new Date("1988-05-11"),
      picture: "https://randomuser.me/api/portraits/women/44.jpg"
    }
  ]
  const cards = [
    {
      type: "Visa",
      number: "0123456789018845",
      expirationMonth: 3,
      expirationYear: 2021,
      bank: "BNP",
      owner: "Maxence Bouret",
      bgColor: "#11aa99",
      color: "white"
    },
    {
      type: "MasterCard",
      number: "0123456789010995",
      expirationMonth: 3,
      expirationYear: 2021,
      bank: "N26",
      owner: "Maxence Bouret",
      bgColor: "#eeeeee",
      color: "#222222"
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
  const drivers = [
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
    },
  ]

  return (
    <div className="App">
      <body>
        {persons.map((person) => {
          return <IdCard
            firstName={person.firstName}
            lastName={person.lastName}
            gender={person.gender}
            height={person.height}
            birth={person.birth}
            picture={person.picture}
          />
        }
        )}
        <br />
        <Greetings lang="de">Ludwig</Greetings>
        <Greetings lang="fr">François</Greetings>
        <Random min={1} max={6} />
        <Random min={1} max={100} />

        <BoxColor r={255} g={0} b={0} />
        <BoxColor r={128} g={255} b={0} />

        {cards.map((card) => {
          return <CreditCard
            type={card.type}
            number={card.number}
            expirationMonth={card.expirationMonth}
            expirationYear={card.expirationYear}
            bank={card.bank}
            owner={card.owner}
            bgColor={card.bgColor}
            color={card.color}
          />
        }
        )}

        <Rating>0</Rating>
        <Rating>1.49</Rating>
        <Rating>1.5</Rating>
        <Rating>3</Rating>
        <Rating>4</Rating>
        <Rating>5</Rating>

        {drivers.map((driver) => {
          return <DriverCard
            name={driver.name}
            rating={driver.rating}
            img={driver.img}
            model={driver.car.model}
            licensePlate={driver.car.licensePlate}
          />
        }
        )}


      </body>
    </div>
  );
}

export default App;
