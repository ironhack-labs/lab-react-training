import React, { Component } from 'react';
import IdCard from './components/idcard/idcard';
import Greetings from './components/greetings';
import Random from './components/random';
import BoxColor from './components/boxcolor';
import CreditCard from './components/creditcard';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>IdCard</h1>
        <IdCard 
          lastName='Doe'
          firstName='John'
          gender='male'
          height={178}
          birth={new Date("1992-07-14")}
          picture="https://randomuser.me/api/portraits/men/44.jpg"
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
        <Greetings lang="de">Ludwig</Greetings>
        <Greetings lang="fr">François</Greetings>

        <h1>Random</h1>
        <Random min={1} max={6}/>
        <Random min={1} max={100}/>

        <h1>BoxColor</h1>
        <BoxColor r={255} g={0} b={0} />
        <BoxColor r={128} g={255} b={0} />

        <h1>CreditCard</h1>
        <CreditCard
        type="Visa"
        number="0123456789018845"
        expirationMonth={3}
        expirationYear={2021}
        bank="BNP"
        owner="Maxence Bouret"
        bgColor="#11aa99"
        color="white" />
        
        <h1>Rating</h1>
        <h1>DriverCard</h1>
        <h1>LikeButton</h1>
        <h1>ClickablePicture</h1>
        <h1>Dice</h1>
        <h1>Carousel</h1>
        <h1>NumbersTable</h1>
        <h1>FaceBook</h1>
        <h1>SignupPage</h1>
        <h1>RGBColorPicker</h1>
      </div>
    );
  }
}

export default App;
