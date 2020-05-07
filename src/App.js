import React, { Component } from 'react';
import IdCard from './components/IdCard';
import Greeting from './components/Greeting';
import Random from './components/Random';
import BoxColor from './components/BoxColor';
import CreditCard from './components/CreditCard';
import Rating from './components/Rating';
import Driver from './components/DriverCard';
import LikeButton from './components/LikeButton';
import ClickablePicture from './components/ClickablePicture';
import Dice from './components/Dice';
class App extends Component {
  state = {
    counter: 0,
    diceState: '/img/dice-empty.png'
  };

  increment = () => {
    const { counter } = this.state;
    this.setState({ counter: counter + 1 });
  };

  changeDice = () => {
    const random = Math.floor(Math.random() * (6 - 1 +1) ) + 1
    const imageUrl = `/img/dice${random}.png`

    this.setState({ diceState: imageUrl })
  }
  render() {
    return (
      <div className="App">
        <h1>IdCard</h1>
        <IdCard
          lastName="Doe"
          firstName="John"
          gender="male"
          height={178}
          birth={new Date('1992-07-14')}
          picture="https://randomuser.me/api/portraits/men/44.jpg"
        />

        <IdCard
          lastName="Delores "
          firstName="Obrien"
          gender="female"
          height={172}
          birth={new Date('1988-05-11')}
          picture="https://randomuser.me/api/portraits/women/44.jpg"
        />

        <h1>Greetings</h1>
        <Greeting lang="de" texto="Hallo" />
        <Greeting lang="en" texto="Hello" />
        <Greeting lang="esp" texto="Hola" />

        <h1>Random</h1>
        <Random min={1} max={6} />
        <Random min={1} max={100} />

        <h1>Box Color</h1>
        <div className="BoxColors">
          <BoxColor r={255} g={100} b={0} />
          <BoxColor r={128} g={255} b={0} />
        </div>

        <h1>Credit Card</h1>
        <CreditCard
          type="/img/visa.png"
          number="0123456789018845"
          expirationMonth={3}
          expirationYear={2021}
          bank="BNP"
          owner="Maxence Bouret"
          bgColor="#11aa99"
          color="white"
        />
        <CreditCard
          type="/img/master-card.svg"
          number="0123456789010995"
          expirationMonth={3}
          expirationYear={2021}
          bank="N26"
          owner="Maxence Bouret"
          bgColor="#eeeeee"
          color="#222222"
        />
        <CreditCard
          type="/img/visa.png"
          number="0123456789016984"
          expirationMonth={12}
          expirationYear={2019}
          bank="Name of the Bank"
          owner="Firstname Lastname"
          bgColor="#ddbb55"
          color="white"
        />

        <h1>Rating</h1>
        <Rating number="0" />
        <Rating number="1.49" />
        <Rating number="1.5" />
        <Rating number="3" />
        <Rating number="4" />
        <Rating number="5" />

        <h1>Driver Card</h1>
        <div className="DriverCards">
          <Driver
            name="Travis Kalanick"
            rating={4.2}
            img="https://si.wsj.net/public/resources/images/BN-TY647_37gql_OR_20170621052140.jpg?width=620&height=428"
            car={{
              model: 'Toyota Corolla Altis',
              licensePlate: 'CO42DE',
            }}
          />
          <Driver
            name="Dara Khosrowshahi"
            rating={4.9}
            img="https://ubernewsroomapi.10upcdn.com/wp-content/uploads/2017/09/Dara_ELT_Newsroom_1000px.jpg"
            car={{
              model: 'Audi A3',
              licensePlate: 'BE33ER',
            }}
          />
        </div>

        <h1>Likes</h1>
        <LikeButton increment={this.increment} counter={this.state.counter} />

        <h1>ClickablePicture</h1>
        <ClickablePicture
          img="/img/persons/maxence.png"
          imgClicked="/img/persons/maxence-glasses.png"
        />

        <h1>Dice</h1>
        <Dice diceState={this.state.diceState} changeDice={this.changeDice} />
      </div>
    );
  }
}

export default App;
