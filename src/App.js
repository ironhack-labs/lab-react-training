import React from 'react';
import logo from './logo.svg';
import './App.css';

function IdCard(props) {
  return (
    <div className="card">
      <img src={props.picture} alt="user" />
      <section className="infos">
        <p><strong>First name:</strong> {props.firstName}</p>
        <p><strong>Last name:</strong> {props.lastName}</p>
        <p><strong>Gender:</strong> {props.gender}</p>
        <p><strong>Height:</strong> {props.height}</p>
        <p><strong>Birth:</strong> {props.birth}</p>
      </section>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <IdCard
        lastName="Doe"
        firstName="John"
        gender="male"
        height="178"
        birth='1992-07-14'
        picture="https://randomuser.me/api/portraits/men/44.jpg"
      />

      <IdCard
        lastName="Delores "
        firstName="Obrien"
        gender="female"
        height="172"
        birth='1988-05-11'
        picture="https://randomuser.me/api/portraits/women/44.jpg"
      />
    </div>
  );
}

export default App;
