import React, { Component } from 'react';
import Idcard from './components/Idcard';

class App extends Component {
  render() {
  return (
      <div className="App">
        <h1>IdCard</h1>
        <Idcard
        lastName='Doe'
        firstName='John'
        gender='male'
        height={178}
        birth={new Date("1992-07-14")}
        picture="https://randomuser.me/api/portraits/men/44.jpg"
        />

        <h1>IdCard</h1>
        <Idcard
        lastName='Thompson'
        firstName='Johana'
        gender='female'
        height={165}
        birth={new Date("1993-10-11")}
        picture="https://randomuser.me/api/portraits/women/8.jpg"
        />


        <h1>Greetings</h1>
        <Greetings lang="de">Ludwig</Greetings>
        <Greetings lang="fr">François</Greetings>
      </div>
    );
  }
}

export default App;
