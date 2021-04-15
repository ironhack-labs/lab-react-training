import React from 'react';
import './App.css';

// COMPONETS IMPORT
import IdCards from '../src/components/IdCards';
import Greetings from '../src/components/Greetings';
import Random from '../src/components/Random';
import BoxColor from '../src/components/BoxColor';
import CreditCard from '../src/components/CreditCard';
import Rating from '../src/components/Rating';
import DriverCard from '../src/components/DriverCard';

// APP
function App() {
  return (
    <div className="App">
      {/* ITERATION 1 */}
      <h1>IdCard</h1>
      <div className="ids">
        <IdCards
          lastName="Doe"
          firstName="John"
          gender="male"
          heigth="1,78m"
          birth="1992-07-14"
          image="https://randomuser.me/api/portraits/men/44.jpg"
        />
        <IdCards
          lastName="Obrien"
          firstName="Delores"
          gender="female"
          heigth="1,72m"
          birth="1993-05-11"
          image="https://randomuser.me/api/portraits/women/44.jpg"
        />
      </div>

      {/* ITERATION 2 */}
      <h1>Greetings</h1>
      <div className="language">
        <Greetings lang="de">Ludwig</Greetings>
        <Greetings lang="fr">François</Greetings>
      </div>

      {/* ITERATION 3 */}
      <h1>Random</h1>
      <div className="random-number">
        <Random min={1} max={6} /> <br />
        <Random min={1} max={100} />
      </div>

      {/* ITERATION 4 */}
      <h1>BoxColor</h1>
      <div className="box-color">
        <BoxColor r={255} g={0} b={0} />
        <BoxColor r={128} g={255} b={0} />
      </div>

      {/* ITERATION 5 */}
      <h1>CreditCard</h1>
      <div className="credit-card">
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
          bank="Name of the Bank"
          owner="Firstname Lastname"
          bgColor="#ddbb55"
          color="white"
        />
      </div>

      {/* ITERATION 6 */}
      <h1>Rating</h1>
      <div className="rating">
        <Rating>0</Rating>
        <Rating>1.49</Rating>
        <Rating>1.5</Rating>
        <Rating>3</Rating>
        <Rating>4</Rating>
        <Rating>5</Rating>
      </div>

      {/* ITERATION 7 */}
      <h1>DriverCard</h1>
      <div className="driver-card">
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
      </div>
    </div>
  );
}

export default App;
