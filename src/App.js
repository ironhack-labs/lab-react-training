import React from 'react';
import CardList from "./components/IdCards/CardList";
import Greetings from "./components/Greetings/Greetings";
import Random from "./components/Random/Random";
import BoxColor from "./components/BoxColor/BoxColor";
import CreditCardList from "./components/CreditCard/CreditCardList";
import DriverCardList from "./components/DriverCard/DriverCardList";
import Rating from "./components/Rating/Rating";
import './App.css';

const nestedIdCards = [{
  lastName: 'Doe',
  firstName: 'John',
  gender: 'male',
  height: 178,
  birth: new Date("1992-07-14").toDateString,
  picture: "https://randomuser.me/api/portraits/men/44.jpg"
}, 
{
  lastName: 'Delores',
  firstName: 'Obrien',
  gender: 'female',
  height: 172,
  birth: new Date("1988-05-11").toDateString,
  picture: "https://randomuser.me/api/portraits/women/44.jpg"
},
]

const nestedCreditCards = [{
  type: "Visa",
  picture: "/img/visa.png",
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
  picture: "/img/master-card.svg",
  number: "0123456789010995",
  expirationMonth: 3,
  expirationYear: 2021,
  bank: "N26",
  owner: "Maxee Bouret",
  bgColor: "#eeeeee",
  color: "white"
},
{
  type: "Visa",
  picture: "/img/visa.png",
  number: "0123456789016984",
  expirationMonth: 3,
  expirationYear: 2021,
  bank: "Bunq",
  owner: "Johnny Bravo",
  bgColor: "#ddbb55",
  color: "white"
},]

const nestedDriverCards = [{
  name: "Travis Kalanick",
  rating: 4.2,
  img: "https://si.wsj.net/public/resources/images/BN-TY647_37gql_OR_20170621052140.jpg?width=620&height=428",
  car: {
    model: "Toyota Corolla Altis",
    licensePlate:"CO42DE"
  }}, {
    name: "Dara Khosrowshahi",
    rating: 4.9,
    img: "https://ubernewsroomapi.10upcdn.com/wp-content/uploads/2017/09/Dara_ELT_Newsroom_1000px.jpg",
    car: {
      model: "Audi A3",
      licensePlate:"BE33ER"
    }}
]

function App() {
  return (
    <section>
    <h1>IdCard</h1>
      <div>
        <CardList
          cardList={nestedIdCards}
          />
      </div>
    <h1>Greetings</h1>
    <div>
      <Greetings lang="de">Ludwig</Greetings>
      <Greetings lang="fr">François</Greetings>
    </div>
    <h1>Random</h1>
    <div>
      <Random min={1} max={6}/>
      <Random min={1} max={100}/>
    </div>
    <h1>BoxColor</h1>
    <div>
    <BoxColor r={255} g={0} b={0} />
    <BoxColor r={128} g={255} b={0} />
    </div>
    <h1>CreditCard</h1>
      <div>
        <CreditCardList
          creditCardList={nestedCreditCards}
          />
      </div>
      <h1>Rating</h1>
      <div>
        <Rating>0</Rating>
        <Rating>1.49</Rating>
        <Rating>1.5</Rating>
        <Rating>3</Rating>
        <Rating>4</Rating>
        <Rating>5</Rating>
      </div>
      <h1>Driver Card</h1>
      <div>
        <DriverCardList
            driverCardList={nestedDriverCards}
            />
      </div>
    </section>
  );
}

export default App;
