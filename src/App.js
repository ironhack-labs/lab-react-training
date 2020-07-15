import React from 'react';
import './App.css';
import Greetings from './components/Greetings'
import IdCard from './components/IdCard';
import Random from './components/Random';
import BoxColor from './components/BoxColor';
import CreditCard from './components/CreditCard';
import Rating from './components/Rating';
import DriveCar from './components/DriveCar';
import LikeButton from './components/LikeButton';
import ClickablePicture from './components/ClickablePicture';
import Dice from './components/Dice';
import NumbersTable from './components/NumbersTable';
import Facebook from './components/Facebook';
import SignupPage from './components/SignupPage';

function App() {
  return (
    <div className="App">
      <h1>IdCard</h1>
      <IdCard/>
      <h1>Greetings</h1>
      <div>
        <Greetings lang="fr">Marcela</Greetings>
        <Greetings lang="es">Roger</Greetings>
      </div>
      <h1>Random</h1>
      <div>
        <Random
          min={1}
          max={6}
        />
        <Random
          min={1}
          max={100}
        />
      </div>
      <h1>BoxColor</h1>
      <div>
        <BoxColor
          r="255"
          g="0"
          b="0"
        />
        <BoxColor
          r="128"
          g="255"
          b="0"
        />
      </div>
      <h1>CreditCard</h1>
      <div className="credit">
        <CreditCard
          type="Visa"
          bgColor="#11aa99"
          color="white"
          number="0123456789018845"
          month={3}
          year={2021}
          bank="BNP"
          owner="Maxence Bouret"
        />
        <CreditCard
          type="Master Card"
          bgColor="#eeeeee"
          color="#222222"
          number="0123456789010995"
          month={3}
          year={2021}
          bank="N26"
          owner="Marcela Vilas Boas"
        />
        <CreditCard
          type="Visa"
          bgColor="#ddbb55"
          color="white"
          number="0123456789016984"
          month={12}
          year={2019}
          bank="Santander"
          owner="Paio Pastanaga"
        />
      </div>
      <h1>Rating</h1>
      <div>
        <Rating
          children={0}
        />
        <Rating
          children={1.49}
        />
        <Rating
          children={1.5}
        />
        <Rating
          children={3}
        />
        <Rating
          children={4}
        />
        <Rating
          children={5}
        />
      </div>
      <h1>DriveCar</h1>
      <div>
        <DriveCar
          img="https://si.wsj.net/public/resources/images/BN-TY647_37gql_OR_20170621052140.jpg?width=620&height=428"
          name="Travis Kalanick"
          rate={4.2}
          car={{
            model: "Toyota Corolla Altis",
            licensePlate: "CO42DE"
          }}
        />

        <DriveCar
          img="https://ubernewsroomapi.10upcdn.com/wp-content/uploads/2017/09/Dara_ELT_Newsroom_1000px.jpg"
          name="Dara Khosrowshahi"
          rate={4.9}
          car={{
            model: "Audi A3",
            licensePlate: "BE33ER"
          }}
        />
      </div>
      <h1>LikeButton</h1>
      <div className="like">
        <LikeButton />
        <LikeButton />
      </div>
      <h1>ClickablePicture</h1>
      <div className="picture">
        <ClickablePicture
          img="/img/persons/maxence.png"
          img2="/img/persons/maxence-glasses.png"
        />
      </div>
      <h1>Dice</h1>
      <div className="diceDiv">
        <Dice />
      </div>
      <h1>NumbersTable</h1>
      <NumbersTable
        limit={12}
      />
      <h1>Facebook</h1>
      <div>
        <Facebook/>
      </div>
      <h1>Signup Page</h1>
      <div>
        <SignupPage/>
      </div>
      <h1>State Up - RGBColorPicker</h1>

    </div>
  );
}

export default App;
