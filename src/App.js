import React, { Component } from 'react';
import './App.css'
import Card from './components/card/Card'
import Greeting from './components/greeting/Greeting'
import Random from './components/random/Random'
import BoxColor from './components/boxcolor/BoxColor'
import CreditCard from './components/creditcard/CreditCard'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h2>IdCard</h2>
        <Card
          lastName='Doe'
          firstName='John'
          gender='male'
          height={178}
          birth={new Date("1992-07-14")}
          picture="https://randomuser.me/api/portraits/men/44.jpg"
        />
        <Card
          lastName='Delores '
          firstName='Obrien'
          gender='female'
          height={172}
          birth={new Date("1988-05-11")}
          picture="https://randomuser.me/api/portraits/women/44.jpg"
        />
        <h2>Greetings</h2>
        <Greeting lang="de">Ludwig</Greeting>
        <Greeting lang="fr">François</Greeting>
        <h2>Random</h2>
        <Random min={1} max={6}/>
        <Random min={1} max={100}/>
        <h2>BoxColor</h2>
        <BoxColor r={256} g={0} b={0} fontColor="white"/>
        <BoxColor r={128} g={255} b={0} fontColor="black"/>
        <h2>CreditCard</h2>
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
      </div>
    );
  }
}

export default App;
