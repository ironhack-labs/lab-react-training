import React from 'react';
// import logo from './logo.svg';
import IdCard from './idCard/idCard';
import Greetings from './greetings/Greetings';
import Random from './random/Random';
import BoxColor from './boxColor/BoxColor';
import CreditCard from './creditCard/CreditCard';
import Rating from './rating/Rating';
import DriverCard from './driverCard/DriverCard';

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>IdCard</h1>
        <p>
          <IdCard
            lastName="Doe"
            firstName="John"
            gender="Male"
            height={178 / 100}
            birth={new Date('1992-07-14').toDateString()}
            picture={
              <img
                src="https://randomuser.me/api/portraits/men/44.jpg"
                alt="photo"
              />
            }
          />
        </p>
        <p>
          <IdCard
            lastName="Delores "
            firstName="Obrien"
            gender="Female"
            height={172 / 100}
            birth={new Date('1988-05-11').toDateString()}
            picture={
              <img
                src="https://randomuser.me/api/portraits/women/44.jpg"
                alt="photo"
              />
            }
          />
        </p>
        <h1>Greetings</h1>
        <p>
          <Greetings lang="de">Ludwig</Greetings>
          <Greetings lang="fr">François</Greetings>
        </p>
        <h1>Random</h1>
        <p>
          <Random min={1} max={6} />
        </p>
        <p>
          <Random min={1} max={100} />
        </p>
        <h1>BoxColor</h1>
        <p>
          <BoxColor r={255} g={0} b={0} />
          <BoxColor r={128} g={255} b={0} />
        </p>

        <h1>Credit Card</h1>
        <p>
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
          <br />
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
          <br />
          <CreditCard
            type="Visa"
            number="0123456789016984"
            expirationMonth={12}
            expirationYear={2019}
            bank="Name of the Bank"
            owner="Firstname Lastname"
            bgColor="#ddbb55"
            color="white"
          />
        </p>

        <p>
          <Rating>0</Rating>
          <Rating>1.49</Rating>
          <Rating>1.5</Rating>
          <Rating>3</Rating>
          <Rating>4</Rating>
          <Rating>5</Rating>
        </p>

        <p>
          <DriverCard
            name="Travis Kalanick"
            rating={4.2}
            img="https://si.wsj.net/public/resources/images/BN-TY647_37gql_OR_20170621052140.jpg?width=620&height=428"
            car={{
              model: 'Toyota Corolla Altis',
              licensePlate: 'CO42DE',
            }}
          />
          <br />
          <DriverCard
            name="Dara Khosrowshahi"
            rating={4.9}
            img="https://ubernewsroomapi.10upcdn.com/wp-content/uploads/2017/09/Dara_ELT_Newsroom_1000px.jpg"
            car={{
              model: 'Audi A3',
              licensePlate: 'BE33ER',
            }}
          />
        </p>
      </header>
    </div>
  );
}

export default App;
