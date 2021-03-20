import React from 'react';
import logo from './logo.svg';
import IdCard from '../src/Components/IdCard';
import Greetings from '../src/Components/Greetings';
import Random from '../src/Components/Random';
import BoxColor from '../src/Components/BoxColor';
import LikeButton from './Components/LikeButton';
import ClickablePicture from './Components/ClickablePicture';
import Dice from './Components/Dice';
import CreditCard from './Components/CreditCard';
import Rating from './Components/Rating';

import './App.css';

function App() {
  return (
    <div className="idCard">
      <div>
        // /*IT1*/
        <IdCard
          lastName="Doe"
          firstName="John"
          gender="male"
          height={178}
          birth={new Date('1992-07-14')}
          picture="https://randomuser.me/api/portraits/men/44.jpg"
        />
      </div>
      <div>
        <IdCard
          lastName="Delores "
          firstName="Obrien"
          gender="female"
          height={172}
          birth={new Date('1988-05-11')}
          picture="https://randomuser.me/api/portraits/women/44.jpg"
        />
      </div>
      /*IT2*/
      <div className="greetings">
        <Greetings lang="de">Ludwig</Greetings>
        <Greetings lang="en">François</Greetings>
      </div>
      /*IT3*/
      <div>
        <Random min={1} max={6} />
        <Random min={1} max={100} />
      </div>
      /*IT4*/
      <div>
        <BoxColor r={255} g={0} b={0} />
        <BoxColor r={128} g={255} b={0} />
      </div>
      /*IT5*/
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
        bank="Speed"
        owner="Neanu Reeves"
        bgColor="#ddbb55"
        color="white"
      />
      /*IT 6*/
      <Rating>0</Rating>
      <Rating>1.49</Rating>
      <Rating>1.5</Rating>
      <Rating>3</Rating>
      <Rating>4</Rating>
      <Rating>5</Rating>
      /*IT8*/
      <div>
        <LikeButton /> <LikeButton />
      </div>
      /*IT9*/
      <ClickablePicture
        img="/img/persons/maxence.png"
        imgClicked="/img/persons/maxence-glasses.png"
      />
      /*IT10*/
      <div></div>
    </div>
  );
}

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

export default App;
