import React from 'react';
import logo from './logo.svg';
import './App.css';
import { findByLabelText } from '@testing-library/react';
import IdCard from './components/iteration1.jsx';
import Greetings from './components/iteration2.jsx';
import Random from './components/iteration3.jsx';
import BoxColor from './components/iteration4.jsx';
import CreditCard from './components/iteration5.jsx';
import Rating from './components/iteration6.jsx';
import DriverCard from './components/iteration7.jsx';
import LikeButton from './components/iteration8.jsx';
import ClickablePicture from './components/iteration9.jsx';


function App(props) {
  return (
    <div className="App">
      <h1>Iteration 1</h1>
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
      <h1>Iteration 2</h1>
      <Greetings lang="de">Ludwig</Greetings>
      <Greetings lang="fr">Marcel</Greetings>
      <Greetings lang="en">Peter</Greetings>
      <h1>Iteration 3</h1>
      <Random min={1} max={6} />
      <Random min={1} max={100} />
      <h1>Iteration 4</h1>
      <BoxColor r={255} g={0} b={0} height={100} width={500} color="white" />
      <BoxColor r={128} g={255} b={0} height={100} width={500} />

      <h1>Iteration 5</h1>
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
      <h1>Iteration 6</h1>
      <Rating>0</Rating>
      <Rating>0.60</Rating>
      <Rating>1.5</Rating>
      <Rating>3</Rating>
      <Rating>4</Rating>
      <Rating>5</Rating>
      <h1>Iteration 7</h1>
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
      <h1>Iteration 8</h1>
      <div>
        <LikeButton /> <LikeButton />
      </div>
      {/* <h1>Iteration 9</h1>
      <ClickablePicture
        img="/img/persons/maxence.png"
        imgClicked="/img/persons/maxence-glasses.png"
      /> */}
    </div>
  );
}

export default App;
