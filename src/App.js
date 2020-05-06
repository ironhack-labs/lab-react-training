import React, { Component } from 'react';
import IdCard from './Component/IdCard';
import Greetings from './Component/Greetings';
import Random from './Component/Random';
import BoxColor from './Component/BoxColor';
import Rating from './Component/Rating';
import CreditCard from './Component/CreditCard';
import DriverCard from './Component/DriverCard';

class App extends Component {
  state = {
    counter: 0,
    colors: ['purple', 'blue', 'green', 'yellow', 'orange', 'red'],
    selectedColor: 'blue',
  };

  addOne = () => {
    this.setState({
      counter: this.state.counter + 1,
      selectedColor: this.state.colors[Math.floor(Math.random() * 7)],
    });
  };

  render() {
    return (
      <div className="App">
        <h1>IdCard</h1>
        <IdCard
          lastName="Delores "
          firstName="Obrien"
          gender="female"
          height={172}
          birth="1988-05-11"
          picture="https://randomuser.me/api/portraits/women/44.jpg"
        />
        <h1>Greetings</h1>
        <Greetings lang="es" children="Pakirri" />
        <Greetings lang="de" children="Zamirri" />
        <Greetings lang="en" children="Kevinirri" />
        <Greetings lang="fr" children="Vadalsirri" />
        <h1>Random</h1>
        <Random max={6} min={10} />
        <Random max={6} min={100} />
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
        <h1>Rating</h1>
        <Rating score={0} />
        <Rating score={1.49} />
        <Rating score={1.5} />
        <Rating score={3} />
        <Rating score={4} />
        <Rating score={5} />
        <h1>DriverCard</h1>
        <DriverCard
          name="Travis Kalanick"
          rating={4.2}
          img="https://si.wsj.net/public/resources/images/BN-TY647_37gql_OR_20170621052140.jpg?width=620&height=428"
          car={{
            model: 'Toyota Corolla Altis',
            licensePlate: 'CO42DE',
          }}
        />
        <DriverCard
          name="Dara Khosrowshahi"
          rating={4.9}
          img="https://ubernewsroomapi.10upcdn.com/wp-content/uploads/2017/09/Dara_ELT_Newsroom_1000px.jpg"
          car={{
            model: 'Audi A3',
            licensePlate: 'BE33ER',
          }}
        />
        <h1>LikeButton</h1>
        <button
          className="like-button"
          style={{ backgroundColor: `${this.state.selectedColor}` }}
          onClick={this.addOne}
        >
          {this.state.counter} ikes
        </button>
      </div>
    );
  }
}

export default App;
