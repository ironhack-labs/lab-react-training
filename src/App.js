import React from 'react';
import logo from './logo.svg';
import './App.css';
import { findByLabelText } from '@testing-library/react';
//ITERATION 1
function IdCard(props) {
  return (
    <div className="idCard">
      <ul>
        <li>First Name: {props.firstName}</li>
        <li>Last Name: {props.lastName}</li>
        <li>Gender: {props.gender}</li>
        <li>Height: {props.height}</li>
        <li>Birth: {props.birth}</li>
        <li>
          <img src={props.picture} />
        </li>
      </ul>
    </div>
  );
}

//ITERATION 2
const Greetings = (props) => {
  if (props.lang === 'de') {
    return <div>Hallo {props.children}</div>;
  } else if (props.lang === 'fr') {
    return <div>Bonjour {props.children}</div>;
  } else {
    return <div>Hello {props.children}</div>;
  }
};

//ITERATION 3
function Random(min, max) {
  var max = 6;
  var min = 0;
  var randomNumber = Math.floor(Math.random() * (max - min + 1) + min);
  return <div>{randomNumber}</div>;
}

//ITERATION 4

function BoxColor(props) {
  return (
    <div>
    <div
        style={{
          backgroundColor: `rgb(${props.r},${props.g},${props.b})`,
          height: props.height,
          width: props.width, color: props.color
        }}>
          <p>RGB ({props.r}, {props.g}, {props.b})</p>
        </div>
      <div
        style={{
          backgroundColor: `rgb(${props.r},${props.g},${props.b})`,
          height: props.height,
          width: props.width,
          
        }}
      ></div>
      
    </div>
  );
}

function BoxColor2(props) {
  const redColor = '#ff0000';
  return (
    <div style={{ backgroundColor: redColor, height: props.height, color: "white" }}>
      <p>RGB ({redColor})</p>
    </div>
  );
}

//ITERATION 5
function CreditCard(props) {
  return (
    <div className="cardShape" style={{backgroundColor: `${props.bgColor}`, color: `${props.color}`}}>
      <div className="visa-div">
        <img src={props.type} alt="visa logo" className="logo-visa" />
      </div>
      <h3> **** **** ****{props.number.split("").slice(12)}</h3>
      <div className="card-bottom">
        <p>
          Expires {props.expirationMonth}/{props.expirationYear} {props.bank}
        </p>
        <p>{props.owner}</p>
      </div>
    </div>
  );
}

function App(props) {
  return (
    <div className="App">
      <IdCard
        name="Bidule"
        firstName="Joe"
        gender="male"
        height={178}
        // birth={new Date('1992-07-14')}
        picture="https://randomuser.me/api/portraits/men/44.jpg"
      />
      <IdCard
        name="Machine"
        firstName="Ludivine"
        gender="female"
        height={165}
        // birth={new Date('10/05/1998')}
        picture="https://randomuser.me/api/portraits/women/44.jpg"
      />
      <hr />
      <Greetings lang="de">Ludwig</Greetings>
      <Greetings lang="fr">Marcel</Greetings>
      <Greetings lang="en">Peter</Greetings>
      <Random />
      <BoxColor r={255} g={0} b={0} height={100} width={500} color="white" />
      <BoxColor r={128} g={255} b={0} height={100} width={500} />
      <BoxColor2 redColor height={100} />
      <br />

      <CreditCard
        type="./img/visa.png"
        number="0123456789018845"
        expirationMonth="03"
        expirationYear={21}
        bank="BNP"
        owner="Maxence Bouret"
        bgColor= "#11aa99"
        color="white"
      />
    </div>
  );
}

export default App;
