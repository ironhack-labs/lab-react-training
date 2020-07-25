import React from 'react';
import './App.css';
import IdCard from './components/IdCard';
import Greetings from './components/Greetings';
import Random from './components/Random';
import Personas from './components/Personas';
import BoxColor from './components/BoxColor';
import Login from './components/Login';
import LoginFC from './components/LoginFC';

import { Form, FormGroup, Button } from 'react-bootstrap';
import EjercicioForm from './components/EjercicioForm';
import CreditCard from './components/CreditCard';
import Rating from './components/Rating';
import DriverCard from './components/DriverCard';
import LikeButton from './components/LikeButton';
import ClickablePicture from './components/ClickablePicture';
import Dice from './components/Dice';

// Arr de persons

// const personas = [
//   {
//     img: 'https://randomuser.me/api/portraits/men/44.jpg',
//     firstName: 'OBrien',
//     lastName: 'Doe',
//     genger: 'male',
//     height: '1.78m',
//     birth: 'Tue Jul 14 1992',
//   },

//   {
//     img: 'https://randomuser.me/api/portraits/women/8.jpg',
//     firstName: 'Paul',
//     lastName: 'Doe',
//     genger: 'male',
//     height: '1.73m',
//     birth: 'Tue May 11 1993',
//   },
// ];

// const cardMap = personas.map((card) => (
//   <IdCard
//     img={personas.picture}
//     firstName={personas.firstName}
//     lastName={personas.lastName}
//     gender={personas.gender}
//     height={personas.height}
//     birth={personas.birth}
//   />
// ));

function App() {
  return (
    <div className="App">
      <IdCard
        lastName="Doe"
        firstName="John"
        gender="male"
        height={178}
        birth="Tue May 11 1993"
        picture="https://randomuser.me/api/portraits/men/44.jpg"
      />

      <IdCard
        lastName="Delores "
        firstName="Obrien"
        gender="female"
        height={172}
        birth="Tue May 11 1993"
        picture="https://randomuser.me/api/portraits/women/44.jpg"
      />

      <Greetings lang="pt">Robert </Greetings>
      <Greetings lang="es">Pedro </Greetings>
      <Random min={1} max={6} />
      <Random min={1} max={100} />
      <Personas />
      {/* <BoxColor />
      <BoxColor /> */}
      <BoxColor r={255} g={0} b={0} />
      <BoxColor r={128} g={255} b={0} />
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

      <Login />
      <Rating>3</Rating>

      {/* <DriverCard
        name="Travis Kalanick"
        rating={4.2}
        img="https://si.wsj.net/public/resources/images/BN-TY647_37gql_OR_20170621052140.jpg?width=620&height=428"
        car={{
          model: 'Toyota Corolla Altis',
          licensePlate: 'CO42DE',
        }}
      /> */}
      <LikeButton />
      <ClickablePicture
        img="/img/persons/maxence.png"
        imgClicked="/img/persons/maxence-glasses.png"
      />

      <Dice />
    </div>
  );
}

// export default App;

// function App() {
//   return (
//     <div className="App">
//       <EjercicioForm />
//     </div>
//   );
// }

export default App;
