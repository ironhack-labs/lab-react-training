/* eslint-disable no-unreachable */
import React from 'react';
// import logo from './logo.svg';
import './App.css';
import IdCard from './components/IdCard';
import Greetings from './components/Greetings';
import Random from './components/Random';
import BoxColor from './components/BoxColor';
import CreditCard from './components/CreditCard';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

function App() {
    return ( 
        <div className="App">
        <IdCard 
        lastName = 'Doe'
        firstName = 'John'
        gender = 'male'
        height = { 178 }
        birth = { new Date("1992-07-14") }
        picture = "https://randomuser.me/api/portraits/men/44.jpg" />

        <IdCard 
        lastName = 'Delores '
        firstName = 'Obrien'
        gender = 'female'
        height = { 172 }
        birth = { new Date("1988-05-11") }
        picture = "https://randomuser.me/api/portraits/women/44.jpg" />
        <h1>Greetings</h1>
        <Greetings lang="de">Ludwig</Greetings>
        <Greetings lang="fr">François</Greetings>
        <Greetings lang="it">Simone</Greetings>
        <h1>Random</h1>
        <Random/>
        <BoxColor/>
        <h1>CreditCard</h1>
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
        
    );
}


export default App;