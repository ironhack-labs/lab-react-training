import React, { Component } from 'react';
import './App.css';
import IdCard from './components/IdCard';
import Greetings from './components/Greetings';
import Random from './components/Random';
import BoxColor from './components/BoxColor';
import CreditCard from './components/CreditCard';
import Rating from './components/Rating';
import DriverCard from './components/DriverCard';

class App extends Component {

  state = {
    userA: {
      lastName: 'Doe',
      firstName: 'John',
      gender: 'male',
      height: 178,
      birth: new Date("1992-07-14"),
      picture: "https://randomuser.me/api/portraits/men/44.jpg"
    },
    userB: {
      lastName: 'Delores',
      firstName: 'Obrien',
      gender: 'female',
      height: 172,
      birth: new Date("1988-05-11"),
      picture: "https://randomuser.me/api/portraits/women/44.jpg"
    }
  }

  getDate(birth){
    const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    return dayNames[birth.getDay()] + ' ' + monthNames[birth.getMonth()] + ' ' + birth.getDate() + ' ' + birth.getFullYear();
  }

  numberInMeters(number) {
    return number.toString().replace(/\B(?=(\d{2})+(?!\d))/g, ".") + 'm';
  }

  render() {
    return (
      <div className="App">
        <IdCard
          image={this.state.userA.picture}
          firstName={this.state.userA.firstName}
          lastName={this.state.userA.lastName}
          gender={this.state.userA.gender}
          height={this.numberInMeters(this.state.userA.height)}
          birth={this.getDate(this.state.userA.birth)}
        />
        <IdCard
          image={this.state.userB.picture}
          firstName={this.state.userB.firstName}
          lastName={this.state.userB.lastName}
          gender={this.state.userB.gender}
          height={this.numberInMeters(this.state.userB.height)}
          birth={this.getDate(this.state.userB.birth)}
        />
        <Greetings lang="de">Ludwig</Greetings>
        <Greetings lang="fr">François</Greetings>
        <Random min={1} max={6} />
        <Random min={1} max={100} />
        <BoxColor r={255} g={0} b={0}/>
        <BoxColor r={128} g={255} b={0}/>

        <hr />

        <div style={{"display": "flex", "margin": "20px 0"}}>
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

        <hr />

        <div style={{"text-align": "left", "margin": "20px 0", "font-size": "40px"}}>
          <p><Rating>0</Rating></p>
          <p><Rating>1.49</Rating></p>
          <p><Rating>1.5</Rating></p>
          <p><Rating>3</Rating></p>
          <p><Rating>4</Rating></p>
          <p><Rating>5</Rating></p>
        </div>

        <div style={{"display": "flex", "flex-direction": "column", "align-items": "center"}}>
          <DriverCard
            name="Travis Kalanick"
            rating={4.2}
            img="https://si.wsj.net/public/resources/images/BN-TY647_37gql_OR_20170621052140.jpg?width=620&height=428"
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
        </div>
      </div>
    );
  }
}

export default App;
