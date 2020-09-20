import React from 'react';
import './App.css';
import IdCard from './components/IdCard.js';
import Greetings from './components/Greetings.js';
import Random from './components/Random.js';
import BoxColor from './components/BoxColor.js';
import CreditCard from './components/CreditCard.js';
class App extends React.Component {
  state = {
    IdCardA: {
      firstName: 'John',
      lastName: 'Doe',
      gender: 'male',
      height: 1.78,
      birth: new Date('1992-07-14'),
      picture: 'https://randomuser.me/api/portraits/men/44.jpg',
    },
    IdCardB: {
      firstName: 'Obrien',
      lastName: 'Delores',
      gender: 'female',
      height: 1.72,
      birth: new Date('1988-05-11'),
      picture: 'https://randomuser.me/api/portraits/women/44.jpg',
    },
  };
  render() {
    return (
      <div className="App">
        <div>
          <h1>IdCard</h1>
          <IdCard
            firstName={this.state.IdCardA.firstName}
            lastName={this.state.IdCardA.lastName}
            gender={this.state.IdCardA.gender}
            height={this.state.IdCardA.height}
            birth={this.state.IdCardA.birth}
            picture={this.state.IdCardA.picture}
          />
          <IdCard
            firstName={this.state.IdCardB.firstName}
            lastName={this.state.IdCardB.lastName}
            gender={this.state.IdCardB.gender}
            height={this.state.IdCardB.height}
            birth={this.state.IdCardB.birth}
            picture={this.state.IdCardB.picture}
          />
        </div>
        <div>
          <h1>Greetings</h1>
          <Greetings lang="de">Ludwig</Greetings>
          <Greetings lang="fr">François</Greetings>
        </div>
        <div>
          <h1>Random</h1>
          <Random min={1} max={6} />
          <Random min={1} max={100} />
        </div>
        <div>
          <h1>BoxColor</h1>
          <BoxColor r={255} g={0} b={0} />
          <BoxColor r={128} g={255} b={0} />
        </div>
        <div>
          <h1>Credit Card</h1>
          <span className="container">
            <CreditCard
              type="Visa"
              number="0123456789018845"
              expirationMonth={3}
              expirationYear={2021}
              bank="BNP"
              owner="Maxence Bouret"
              bgColor="#11aa99"
              color="white"
            />
            <CreditCard
              type="Master Card"
              number="0123456789010995"
              expirationMonth={3}
              expirationYear={2021}
              bank="N26"
              owner="Maxence Bouret"
              bgColor="#eeeeee"
              color="#222222"
            />
            <CreditCard
              type="Visa"
              number="0123456789016984"
              expirationMonth={12}
              expirationYear={2019}
              bank="Name of the Bank"
              owner="Firstname Lastname"
              bgColor="#ddbb55"
              color="white"
            />
          </span>
        </div>
      </div>
    );
  }
}

export default App;
