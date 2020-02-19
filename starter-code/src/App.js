import React, { Component } from 'react';
import IdCard from './components/IdCard';
import Greeeting from './components/Greeting'
import RandmonComp from './components/Random'
import BoxcolorComp from './components/Boxcolor';
import CreditCard from './components/CreditCard';
import {CreditStyles} from './styles/styles'
import Rating from './components/Rating';
import DriverCard from './components/DriverCard';
import Likebutton from './components/Likebutton';
import ClickableImage from './components/ClickableImage';


class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>IdCard</h1>
      <IdCard
        firstName={'John'}
        lastName={'Doe'}
        gender={'male'}
        height={178}
        birth={new Date("1992-07-14")}
        picture={"https://randomuser.me/api/portraits/men/44.jpg"}
      />
      <IdCard
        lastName='Delores '
        firstName='Obrien'
        gender='female'
        height={172}
        birth={new Date("1988-05-11")}
        picture="https://randomuser.me/api/portraits/women/44.jpg"
      />
        <h1>Greetings</h1>
      <Greeeting lang="de">Ludwig</Greeeting>
      <Greeeting lang="en">BICHO</Greeeting>
        <h1>Random</h1>
      <RandmonComp min={1} max={6}></RandmonComp>
      <RandmonComp min={1} max={100}></RandmonComp>
        <h1>Box Color</h1>
      <BoxcolorComp r={255} g={0} b={0} ></BoxcolorComp>
      <BoxcolorComp r={128} g={255} b={0} ></BoxcolorComp>
        <h1>Credit cards</h1>
    <CreditStyles>
      <CreditCard type="Visa"
           number="0123456789016984"
           expirationMonth={12}
           expirationYear={2019}
           bank="Name of the Bank"
           owner="Firstname Lastname"
           bgColor="#ddbb55"
           color="white"/>
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
    </CreditStyles>
    <h2>Rating</h2>
    <Rating>0</Rating>
    <Rating>1.49</Rating>
    <Rating>1.5</Rating>
    <Rating>3</Rating>
    <Rating>4</Rating>
    <Rating>5</Rating>
    <h2>Driver</h2>
    <DriverCard name="Travis Kalanick"
      rating={4.2}
      img="https://si.wsj.net/public/resources/images/BN-TY647_37gql_OR_20170621052140.jpg?width=620&height=428"
      car={{
        model: "Toyota Corolla Altis",
        licensePlate: "CO42DE"}}
      />
      <DriverCard name="Dara Khosrowshahi"
        rating={4.9}
        img="https://ubernewsroomapi.10upcdn.com/wp-content/uploads/2017/09/Dara_ELT_Newsroom_1000px.jpg"
        car={{
          model: "Audi A3",
         licensePlate: "BE33ER"}}
      />
      <h2>Like Button</h2>
      <Likebutton />
      <h2>Clickable picture</h2>
      <ClickableImage img="/img/persons/maxence.png"
        imgClicked="/img/persons/maxence-glasses.png"/>
      </div>
    );
  }
}

export default App;
