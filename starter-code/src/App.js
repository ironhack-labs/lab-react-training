import React, { Component } from 'react';
import berlin from "./data/berlin.json";
import Card from "./Components/IdCard/idCard"
import Greeting from "./Components/Greeting/greeting"
import Random from "./Components/Random/index"
import BoxColor from "./Components/BoxColor/index"
import CreditCard from "./Components/CreditCard/index"
import Rating from "./Components/Rating/index"
import DriverCard from "./Components/Driver"
import LikeButton from "./Components/LikeButton"


class App extends Component {
  constructor(){
    super();
    this.state = {
      berlin: berlin.splice(0,2)
    };
  }

  render() {
    const data = {...this.state.berlin}
    return (
      <div className="App">
        <h1>IdCard</h1>
        {this.state.berlin.map(value => {
          return <Card data={ value } />
        })}

        <h1>Greetings</h1>
        <Greeting lang="de">Ludwig</Greeting>
        <Greeting lang="fr">François</Greeting>

        <h1>Random</h1>
        <Random min={1} max={6}/>
        <Random min={1} max={100}/>

        <h1>Box Colour</h1>
        <BoxColor r={255} g={0} b={0} />
        <BoxColor r={128} g={255} b={0} />
        <BoxColor r={0} g={255} b={255} />

        <h1>Credit Card</h1>
        <CreditCard 
        type="Visa"
        number="0123456789018845"
        expirationMonth={3}
        expirationYear={2021}
        bank="BNP"
        owner="Maxence Bouret"
        bgColor="#11aa99"
        color="white" />
        <CreditCard 
        type="Master Card"
        number="0123456789010995"
        expirationMonth={3}
        expirationYear={2021}
        bank="N26"
        owner="Maxence Bouret"
        bgColor="#eeeeee"
        color="#222222" />
        <CreditCard 
        type="Visa"
        number="0123456789016984"
        expirationMonth={12}
        expirationYear={2019}
        bank="Name of the Bank"
        owner="Firstname Lastname"
        bgColor="#ddbb55"
        color="white" />

      <h1>Rating</h1>
      <Rating>0</Rating>
      <Rating>1.49</Rating>
      <Rating>1.5</Rating>
      <Rating>3</Rating>
      <Rating>4</Rating>
      <Rating>5</Rating>

      <h1>DriverCard</h1>
      <DriverCard 
      name="Travis Kalanick"
      rating={4.2}
      img="https://si.wsj.net/public/resources/images/BN-TY647_37gql_OR_20170621052140.jpg?width=620&height=428"
      car={{
        model: "Toyota Corolla Altis",
        licensePlate: "CO42DE"
      }} />
      <DriverCard 
      name="Dara Khosrowshahi"
      rating={4.9}
      img="https://ubernewsroomapi.10upcdn.com/wp-content/uploads/2017/09/Dara_ELT_Newsroom_1000px.jpg"
      car={{
        model: "Audi A3",
        licensePlate: "BE33ER"
      }} />

      <h1>Like buttom</h1>
      <LikeButton /> <LikeButton />


      </div>
    );
  }
}

export default App;
