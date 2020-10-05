import React from 'react';
import logo from './logo.svg';
import './App.css';
import { findByLabelText } from '@testing-library/react';
import Greetings from './components/iteration2.jsx';
import Random from './components/iteration3.jsx';
import BoxColor from './components/iteration4.jsx';
import CreditCard from './components/iteration5.jsx';

//ITERATION 1
function IdCard(props) {
  return (
    <div className="idCard">
       <img src={props.picture} alt="profil pic"/>
      <ul>
        <li><strong>First Name:</strong> {props.firstName}</li>
        <li><strong>Last Name:</strong> {props.lastName}</li>
        <li><strong>Gender:</strong> {props.gender}</li>
        <li><strong>Height:</strong> {props.height}</li>
        <li><strong>Birth:</strong> {props.birth}</li>  
      </ul>
     
    </div>
  );
}

//ITERATION 4 bonus
function BoxColor2(props) {
  const redColor = '#ff0000';
  return (
    <div
      style={{
        backgroundColor: redColor,
        height: props.height,
        color: 'white',
      }}
    >
      <p>RGB ({redColor})</p>
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
      <Random min={1} max={6}/>
      <Random min= {1} max={100}/>
      <BoxColor r={255} g={0} b={0} height={100} width={500} color="white" />
      <BoxColor r={128} g={255} b={0} height={100} width={500} />
      <BoxColor2 redColor height={100} />
      <br />
      <div className="container-card">
        <CreditCard
          type="./img/visa.png"
          number="0123456789018845"
          expirationMonth="03"
          expirationYear={21}
          bank="BNP"
          owner="Maxence Bouret"
          bgColor="#11aa99"
          color="white"
        />
        <CreditCard
          type="./img/master-card.svg"
          number="0123456789010995"
          expirationMonth={3}
          expirationYear={2021}
          bank="N26"
          owner="Maxence Bouret"
          bgColor="#eeeeee"
          color="#222222"
        />
        <CreditCard
          type="./img/visa.png"
          number="0123456789016984"
          expirationMonth={12}
          expirationYear={2019}
          bank="Name of the Bank"
          owner="Firstname Lastname"
          bgColor="#ddbb55"
          color="white"
        />
      </div>
    </div>
  );
}

export default App;
