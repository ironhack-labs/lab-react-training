import React, { Component } from 'react';
import './App.css';

import IdCard from './components/IdCard';
import Greetings from './components/Greetings';
import Random from './components/Random';
import BoxColor from './components/BoxColor';
import CreditCard from './components/CreditCard'

class App extends Component {
  state = {
    userA: {
      firstName: 'Harper',
      lastName: 'Perez',
      gender: 'male',
      height: 178,
      birth: new Date('1992-07-14'),
      picture: 'https://randomuser.me/api/portraits/men/44.jpg',
    },
    userB: {
      firstName: 'Delores',
      lastName: 'Obrien',
      gender: 'female',
      height: 172,
      birth: new Date('1988-05-11'),
      picture: 'https://randomuser.me/api/portraits/women/44.jpg',
    },

    color: {
      randomR: Math.floor(Math.random() * 255),
      randomG: Math.floor(Math.random() * 255),
      randomB: Math.floor(Math.random() * 255),
    },
  };

  render() {
    return (
      <div className="App">
        <IdCard
          lastName={this.state.userA.lastName}
          firstName={this.state.userA.firstName}
          gender={this.state.userA.gender}
          height={this.state.userA.height}
          birth={this.state.userA.birth}
          picture={this.state.userA.picture}
        />
        <IdCard
          lastName={this.state.userB.lastName}
          firstName={this.state.userB.firstName}
          gender={this.state.userB.gender}
          height={this.state.userB.height}
          birth={this.state.userB.birth}
          picture={this.state.userB.picture}
        />

        <Greetings lang="de">Ludwig</Greetings>
        <Greetings lang="en">Charles</Greetings>
        <Greetings lang="es">Pablo</Greetings>
        <Greetings lang="fr">François</Greetings>

        <Random min={1} max={6} />
        <Random min={1} max={100} />

        <BoxColor r={255} g={0} b={0} />
        <BoxColor r={128} g={255} b={0} />

        <BoxColor
          r={this.state.color.randomR}
          g={this.state.color.randomG}
          b={this.state.color.randomB}
        />

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
