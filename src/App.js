import React from 'react';
import logo from './logo.svg';
import './App.css';
import IdCard from "./components/IdCard.jsx";
import Greetings from "./components/Greetings.jsx";
import Random from "./components/Random.jsx";
import BoxColor from "./components/BoxColor.jsx";
import CreditCard from "./components/CreditCard.jsx";

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
      <div>
      <h1>ID</h1>
    {/* <h1>IdCard</h1> */}
       <IdCard
         picture="https://randomuser.me/api/portraits/men/48.jpg"
         lastName='Doe'
         firstName='John'
         gender='male'
         height={178}
         birth="1992-07-14"
         />
       <IdCard
         picture="https://randomuser.me/api/portraits/women/46.jpg"
         lastName='Delores '
         firstName='Obrien'
         gender='female'
         height={172}
         birth="1988-05-11"
         />
      </div>
      <div>
      <h1>GREETINGS</h1>
      <Greetings lang="de">Ludwig</Greetings>
      <Greetings lang="fr">François</Greetings>
      </div>
      <div>
      <h1>Random</h1>
      <Random min={1} max={6}/>
      <Random min={1} max={100}/>
      </div>
      <div>
      <h1>Box Color</h1>
      <BoxColor r={255} g={0} b={0} />
      <BoxColor r={128} g={255} b={0} />
      </div>
      <h1>Credit Card</h1>
      <div>
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
    </div>

  );
}

export default App;
