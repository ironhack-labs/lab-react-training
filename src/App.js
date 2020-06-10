import React, {Component} from 'react';
// import logo from './logo.svg';
import './App.css';
import IdCard from './components/IdCard';
import Greetings from './components/Greetings';
import Random from './components/Random';
import BoxColor from './components/BoxColor';
import CreditCard from './components/CreditCard';

class App extends Component {
  state = {
    userA: {
      lastName: "Doe",
      firstName: "John",
      gender: "male",
      height: 178,
      birth:"1992-07-14",
      picture:"https://randomuser.me/api/portraits/men/44.jpg"
    },
    userB: {
      lastName:"Delores",
      firstName:"Obrien",
      gender:"female",
      height: 172,
      birth: "1988-05-11",
      picture:"https://randomuser.me/api/portraits/women/44.jpg"   
    },
  };
  

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h2>Id Card</h2>
          <IdCard
            firstName={this.state.userA.firstName}
            lastName={this.state.userA.lastName}
            gender={this.state.userA.gender}
            height={this.state.userA.height}
            birth={this.state.userA.birth}
            picture={this.state.userA.picture}
          />
          <br />
          <IdCard
            firstName={this.state.userB.firstName}
            lastName={this.state.userB.lastName}
            gender={this.state.userB.gender}
            height={this.state.userB.height}
            birth={this.state.userB.birth}
            picture={this.state.userB.picture}
          />

          <h2>Greetings</h2>
          <Greetings lang="de">Ludwig</Greetings>
          <Greetings lang="fr">François</Greetings>

          <h2>Random</h2>
          <Random min={1} max={6} />
          <Random min={1} max={100} />

          <h2>BoxColor</h2>
          <BoxColor r={255} g={0} b={0} />
          <BoxColor r={128} g={255} b={0} />

          <h2>Credit Card</h2>
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
        </header>
      </div>
    );
  }
}

export default App;
