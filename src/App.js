import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import Greetings from './components/Greetings';
import IdCard from './components/IdCard/IdCard';
import Random from './components/Random/Random';
import BoxColor from './components/BoxColor/BoxColor';
import Rating from './components/Rating/Rating';
import DriverCard from './components/DriverCard/DriverCard';
import ClickablePicture from './components/ClickablePicture/ClickablePicture';
import Dice from './components/Dice/Dice';
import NumbersTable from './components/NumbersTable/NumbersTable';
import Facebook from './components/Facebook/Facebook';
import SignupPage from './components/SignupPage/SignupPage';

function App() {
  return (
    <div className="App">
      <Greetings lang="es"> Santiago </Greetings>
      <Greetings lang="pt"> Lourenço </Greetings>
      <Greetings lang="en"> Miguel </Greetings>
      <IdCard
        lastName="Doe"
        firstName="John"
        gender="male"
        height={178}
        birth={new Date('1992-07-14')}
        picture="https://randomuser.me/api/portraits/men/44.jpg"
      />
      <IdCard
        lastName="Delores "
        firstName="Obrien"
        gender="female"
        height={172}
        birth={new Date('1988-05-11')}
        picture="https://randomuser.me/api/portraits/women/44.jpg"
      />
      <Random min={1} max={6} />
      <Random min={1} max={100} />
      <BoxColor r={255} g={0} b={0} />
      <BoxColor r={128} g={255} b={0} />
      <Rating>0</Rating>
      <Rating>1.49</Rating>
      <Rating>1.5</Rating>
      <Rating>3</Rating>
      <Rating>4</Rating>
      <Rating>5</Rating>
      <DriverCard
        name="Travis Kalanick"
        rating={4.2}
        img="https://si.wsj.net/public/resources/images/BN-TY647_37gql_OR_20170621052140.jpg?width=620&height=428"
        car={{
          model: 'Toyota Corolla Altis',
          licensePlate: 'CO42DE',
        }}
      />
      <DriverCard
        name="Dara Khosrowshahi"
        rating={4.9}
        img="https://ubernewsroomapi.10upcdn.com/wp-content/uploads/2017/09/Dara_ELT_Newsroom_1000px.jpg"
        car={{
          model: 'Audi A3',
          licensePlate: 'BE33ER',
        }}
      />
      <ClickablePicture
        img='/img/persons/maxence.png'
        imgClicked='/img/persons/maxence-glasses.png'
      />
      <Dice />
      <NumbersTable limit={12} />
      <Facebook />
      <SignupPage />
    </div>
  );
}

export default App;
