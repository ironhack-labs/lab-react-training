import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import IdCard from './components/IdCard/IdCard';
import Greetings from './components/Greetings/Greetings';
import Random from "./components/Random/Random"
import BoxColor from "./components/Boxcolor/Boxcolor"

class App extends Component {
  state = {
    IdCard: {
      lastName: 'Doe',
      firstName: 'John',
      gender: 'male',
      height: 178,
      birth: new Date('1992-07-14'),
      picture: 'https://randomuser.me/api/portraits/men/44.jpg',
    },
    IdCard2: {
      lastName: 'Delores ',
      firstName: 'Obrien',
      gender: 'female',
      height: 172,
      birth: new Date('1988-05-11'),
      picture: 'https://randomuser.me/api/portraits/women/44.jpg',
    },
    greetings: {
      lang: {
        de: 'Hallo',
        fr: 'Bonjour',
        es: 'Hola',
        en: 'Hello',
      },
    },
  };
  render() {
    return (
      <div>
        <section>
          <h1>IdCard</h1>
          <IdCard
            firstName={this.state.IdCard.firstName}
            lastName={this.state.IdCard.lastName}
            gender={this.state.IdCard.gender}
            height={this.state.IdCard.height}
            birth={this.state.IdCard.birth}
            picture={this.state.IdCard.picture}
          />
          <IdCard
            firstName={this.state.IdCard2.firstName}
            lastName={this.state.IdCard2.lastName}
            gender={this.state.IdCard2.gender}
            height={this.state.IdCard2.height}
            birth={this.state.IdCard2.birth}
            picture={this.state.IdCard2.picture}
          />
        </section>
        <section>
          <h1>Greetings</h1>
          <Greetings lang="de">Ludwig</Greetings>
          <Greetings lang="fr">François</Greetings>
        </section>
        <section>
          <Random min={1} max={6} />
          <Random min={1} max={100} />
        </section>
        <section >
          <BoxColor r={255} g={0} b={0} />
          <BoxColor r={128} g={255} b={0} />
        </section>
      </div>
    );
  }
}

export default App;
