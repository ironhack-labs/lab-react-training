import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import IdCard from './components/IdCard';
import Greetings from './components/Greetings';
import Random from './components/Random';
import BoxColor from './components/BoxColor';

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
      </div>
    );
  }
}

export default App;
