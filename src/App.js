import React from "react";
import "./App.css";
import IdCard from "./components/IdCard";
import Greetings from "./components/Grettings";
import Random from "./components/Random";
import BoxColor from "./components/BoxColor";
import CreditCard from "./components/CreditCard";
import visa from "./images/visa.png"
import mastercard from "./images/master-card.svg"
import Rating from "./components/Rating";
import DriverCard from "./components/DriverCard";

function App() {
  const person = [
    {
      lastName: "Doe",
      firstName: "John",
      gender: "male",
      height: 178,
      birth: new Date("1992-07-14"),
      picture: "https://randomuser.me/api/portraits/men/44.jpg",
    },
    {
      lastName: "Delores ",
      firstName: "Obrien",
      gender: "female",
      height: 172,
      birth: new Date("1988-05-11"),
      picture: "https://randomuser.me/api/portraits/women/44.jpg",
    },
  ];

  const grettingsArr = ["es", "en", "fr", "de"];

  const creditCardArray = [
    {
      type: visa,
      number: "0123456789018845",
      expirationMonth: 3,
      expirationYear: 2021,
      bank: "BNP",
      owner: "Maxence Bouret",
      bgColor: "#11aa99",
      color: "white",
    },
    {
      type: mastercard,
      number: "0123456789010995",
      expirationMonth: 3,
      expirationYear: 2021,
      bank: "N26",
      owner: "Maxence Bouret",
      bgColor: "#eeeeee",
      color: "#222222",
    },
    {
      type: visa,
      number: "0123456789016984",
      expirationMonth: 12,
      expirationYear: 2019,
      bank: "Name of the Bank",
      owner: "Firstname Lastname",
      bgColor: "#ddbb55",
      color: "white",
    },
  ];

  const driverArray = [
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
  ];

  return (
    <>
      {person.map((e) => {
        return <IdCard card={e} />;
      })}

      {grettingsArr.map((e) => {
        {
          /* Dentro del componente el props es un children */
        }
        return <Greetings lang={e}>Erick</Greetings>;
      })}

      <Random min={1} max={6} />
      <Random min={1} max={100} />

      <BoxColor r={255} g={0} b={0} />
      <BoxColor r={128} g={255} b={0} />

      <div>
        {creditCardArray.map((e) => {
          {/* console.log(e); */ }
          return (
            <CreditCard type={e.type} number={e.number} expirationMonth={e.expirationMonth} expirationYear={e.expirationYear} bank={e.bank} owner={e.owner} bgColor={e.bgColor} color={e.color} />
          )
        })}
      </div>

      <Rating>0</Rating>
      <Rating>1.49</Rating>
      <Rating>1.5</Rating>
      <Rating>3</Rating>
      <Rating>4</Rating>
      <Rating>5</Rating>

      {driverArray.map((e) => {
        return (
          <DriverCard driver={e} />
        )
      })}
    </>
  );
}

export default App;
