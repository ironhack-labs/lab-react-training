import React from 'react';
import logo from './logo.svg';
import './App.css';
import "./cards.js";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

class Cards extends idCard {

  state ={     
  user: {
    lastName: "Hill",
    firstName: "John",
    gender: "Male",
    height: "178",
    birth: "1992-07-14",
    picture: "https://randomuser.me/api/portraits/men/44.jpg" 
  },
  title: "Lab"
  }
  render () {
    const {lastName, firstName, gender, height, birth, picture} = this.user
    return (
      <div className="Card">
        <span>Last Name: {user.lastName}</span>
        <span>First Name: {user.firstName}</span>
        <span>Gender: {user.gender}</span>
        <span>Height: {user.height}</span>
        <span>Birth: {user.birth}</span>
        <span>Picture: {user.picture}</span>
      </div>
    )
  }

}
export default idCard


export default App;
