import React, { Component } from 'react';
import './App.css';

import IdCard from './components/IdCard';
import Greetings from './components/Greetings';
import Random from './components/Random';
import BoxColor from './components/BoxColor';
import CreditCard from './components/CreditCard';
import Rating from './components/Rating';
import DriverCard from './components/DriverCard';
import LikeButton from './components/LikeButton';
import ClickablePicture from './components/ClickablePicture';
import Dice from './components/Dice';
import Carousel from './components/Carousel'

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
        <h5>1. IdCard</h5>
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
        <h5>2. Greetings</h5>
        <Greetings lang="de">Ludwig</Greetings>
        <Greetings lang="en">Charles</Greetings>
        <Greetings lang="es">Pablo</Greetings>
        <Greetings lang="fr">François</Greetings>
        <h5>3. Random</h5>
        <Random min={1} max={6} />
        <Random min={1} max={100} />
        <h5>4. BoxColor</h5>
        <BoxColor r={255} g={0} b={0} />
        <BoxColor r={128} g={255} b={0} />
        <BoxColor
          r={this.state.color.randomR}
          g={this.state.color.randomG}
          b={this.state.color.randomB}
        />
        <h5>5. CreditCard</h5>
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
        <h5>6. Rating</h5>
        <Rating>0</Rating>
        <Rating>1.49</Rating>
        <Rating>1.5</Rating>
        <Rating>3</Rating>
        <Rating>4</Rating>
        <Rating>5</Rating>
        <h5>7. DriverCard</h5>
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
        <h5>8. LikeButton</h5>
        <LikeButton /> <LikeButton />

        <h5>9. ClickablePicture</h5>
        <ClickablePicture
          image='/img/persons/maxence.png'
          imgClicked='/img/persons/maxence-glasses.png'
        />

        <h5>10. State: Dice</h5>
        <Dice />

        <h5>11. State: Carousel</h5>
        <Carousel
          imgs={[
            'https://randomuser.me/api/portraits/women/1.jpg',
            'https://randomuser.me/api/portraits/men/1.jpg',
            'https://randomuser.me/api/portraits/women/2.jpg',
            'https://randomuser.me/api/portraits/men/2.jpg'
          ]}
        />
      </div>
    );
  }
}

export default App;
