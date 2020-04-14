import React, { Component } from 'react';
import IdCard from './components/idcard';
import Greetings from './components/greetings';
import Random from './components/random';
import Box from './components/box';
import CreditCard from './components/CreditCard'
import Ratings from './components/Ratings'
import DriverCard from './components/Driver'
import LikeButton from './components/Like'
import ClickablePicture from './components/Picture'
import Dice from './components/Dice'
import Carousel from "./components/Carousel";
import Tables from './components/NumbersTabl';
class App extends Component {

  random() {

    let ale = Math.random(Math.round(0)) * 255



    return ale

  }

  render() {
    this.random()


    return (
      <div className="App">
        <h1>IdCard</h1>
        <IdCard img="https://randomuser.me/api/portraits/men/44.jpg" name="John" last="Doe" genbder="Male" height="1.78" birth="Tue 14 1992 Jul" />
        <IdCard img="https://randomuser.me/api/portraits/women/44.jpg" name="Obrien" last="Dolores" genbder="Female" height="1.72" birth="Tue May 11 1993" />


        <h1>Greetings</h1>
        <Greetings lang="Hallo Ludwig" />
        <Greetings lang="Bonjour François" />


        <Random rnd="Random value between 1 and 6 => " />
        <Random rnd="Random value between 1 and 100 => " />

        <Box r={this.random()} g={this.random()} b={this.random()} />
        <Box r={this.random()} g={this.random()} b={this.random()} />
        < CreditCard
          type="Visa"
          number="0123456789018845"
          expirationMonth={3}
          expirationYear={21}
          bank="BNP"
          owner="Maxence Bouret"
          bg="#11aa99"
          color="white" />
        <CreditCard
          type="Master Card"
          number="0123456789010995"
          expirationMonth={3}
          expirationYear={21}
          bank="N26"
          owner="Maxence Bouret"
          bg="#eeeeee"
          color="#222222" />
        <CreditCard
          type="Visa"
          number="0123456789016984"
          expirationMonth={12}
          expirationYear={19}
          bank="Name of the Bank"
          owner="Firstname Lastname"
          bg="#ddbb55"
          color="white" />

        <Ratings children="0" />
        <Ratings children="1.49" />
        <Ratings children="1.5" />
        <Ratings children="3" />
        <Ratings children="4" />
        <Ratings children="5" />
        <Ratings children="11" />
        <Ratings children="12.34" />
        <Ratings children="10.300" />

        <DriverCard
          name="Travis Kalanick"
          rating={4.2}
          img="https://ubernewsroomapi.10upcdn.com/wp-content/uploads/2017/09/Dara_ELT_Newsroom_1000px.jpg"
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
        <LikeButton />
        <LikeButton />
        <ClickablePicture img='/img/persons/maxence.png' imgClicked='/img/persons/maxence-glasses.png' />
        <Dice />
        <Carousel
          imgs={[
            'https://randomuser.me/api/portraits/women/1.jpg',
            'https://randomuser.me/api/portraits/men/1.jpg',
            'https://randomuser.me/api/portraits/women/2.jpg',
            'https://randomuser.me/api/portraits/men/2.jpg'
          ]}
        />

        <Tables limit={12} />
      </div>


    );
  }
}



export default App;
