import React, { Component } from 'react';
import IdCardComponent from "./components/IdCardComponent";
import GreetingsComponent from "./components/GreetingsComponent";
import RandomComponent from "./components/RandomComponent";
import BoxColorComponent from "./components/BoxColorComponent";
import CreditCardComponent from "./components/CreditCardComponent";
import RatingComponent from './components/RatingComponent';
import DriverCardComponent from './components/DriverCardComponent';
import LikeButtonComponent from './components/LikeButtonComponent'
import ClickablePictureComponent from './components/ClickablePictureComponent';
import DiceComponent from './components/DiceComponent';


class App extends Component {

  render() {
    return (
      <div className="App">
        <h1>IdCARD</h1>

        <IdCardComponent
            lastName='Doe'
            firstName='John'
            gender='male'
            height={178}
            birth={new Date("1992-07-14")}
            picture="https://randomuser.me/api/portraits/men/44.jpg"
          />
        <IdCardComponent 
          lastName='Delores '
          firstName='Obrien'
          gender='female'
          height={172}
          birth={new Date("1988-05-11")}
          picture="https://randomuser.me/api/portraits/women/44.jpg"
          />
      <h1>Greetings</h1>
      <GreetingsComponent lang="es">Español</GreetingsComponent>
      <GreetingsComponent lang="fr">François</GreetingsComponent>
      <h1>Random</h1>
      <RandomComponent min={1} max={6}/>
      <RandomComponent min={1} max={100}/>
      <h1>BoxColor</h1>
      <BoxColorComponent r={255} g={0} b={0} />
      <BoxColorComponent r={128} g={255} b={0} />
      <h1>Credit Card</h1>
      <div className="tarjetas">
      <CreditCardComponent
        type="Visa"
        number="0123456789018845"
        expirationMonth={3}
        expirationYear={2021}
        bank="BNP"
        owner="Maxence Bouret"
        bgColor="#11aa99"
        color="white" />
      <CreditCardComponent
        type="Master Card"
        number="0123456789010995"
        expirationMonth={3}
        expirationYear={2021}
        bank="N26"
        owner="Maxence Bouret"
        bgColor="#eeeeee"
        color="#222222" />
      <CreditCardComponent
        type="Visa"
        number="0123456789016984"
        expirationMonth={12}
        expirationYear={2019}
        bank="Name of the Bank"
        owner="Firstname Lastname"
        bgColor="#ddbb55"
        color="white" />
      </div>


      <h1>Rating</h1>
      <RatingComponent>0</RatingComponent>
      <RatingComponent>1.49</RatingComponent>
      <RatingComponent>1.5</RatingComponent>
      <RatingComponent>3</RatingComponent>
      <RatingComponent>4</RatingComponent>
      <RatingComponent>5</RatingComponent>
        

      <h1>DriverCard</h1>
      <DriverCardComponent
        name="Travis Kalanick"
        rating={4.2}
        img="https://si.wsj.net/public/resources/images/BN-TY647_37gql_OR_20170621052140.jpg?width=620&height=428"
        car={{
          model: "Toyota Corolla Altis",
          licensePlate: "CO42DE"
        }} />
      <DriverCardComponent
        name="Dara Khosrowshahi"
        rating={4.9}
        img="https://ubernewsroomapi.10upcdn.com/wp-content/uploads/2017/09/Dara_ELT_Newsroom_1000px.jpg"
        car={{
          model: "Audi A3",
          licensePlate: "BE33ER"
        }} />
        <h1>LikeButton</h1>
        <LikeButtonComponent></LikeButtonComponent>
        <LikeButtonComponent></LikeButtonComponent>
        <ClickablePictureComponent
          img="/img/persons/maxence.png"
          imgClicked="/img/persons/maxence-glasses.png" />

          <h1>Dice</h1>
          <DiceComponent/>
      </div>
    );
  }
}

export default App;
