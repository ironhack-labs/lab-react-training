import React from 'react';
import IdCard from './components/IdCard';
import Greetings from './components/Greetings';
import Random from './components/Random';
import BoxColor from './components/BoxColor';
import CreditCard from './components/CreditCard';
import Rating from './components/Rating';
import DriverCard from './components/DriverCard';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <h1>IdCards</h1>
      <section style={{ display: 'flex', justifyContent: 'space-around' }}>
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
      </section>
      <h1>Greetings</h1>
      <section style={{ display: 'flex', justifyContent: 'space-around' }}>
        <Greetings lang="de">Ludwig</Greetings>
        <Greetings lang="fr">François</Greetings>
      </section>
      <h1>Boxes Random</h1>
      <section style={{ display: 'flex', justifyContent: 'space-around' }}>
        <Random min={1} max={6} />
        <Random min={1} max={100} />
      </section>
      <h1>Boxes Color</h1>
      <section style={{ display: 'flex', justifyContent: 'space-around' }}>
        <BoxColor style={{ color: 'white' }} r={255} g={0} b={0} />
        <BoxColor r={128} g={255} b={0} />
      </section>
      <h1>Credit Cards</h1>
      <section className= "border-card" style={{ display: 'flex', justifyContent: 'space-around' }}>
        <CreditCard
          type="Master Card"
          number="0123456789018845"
          expirationMonth={3}
          expirationYear={2021}
          bank="Nubank"
          owner="Maxence Bouret"
          bgColor="#820AD1"
          color="white"
        />

        <CreditCard
          type="Visa"
          number="0123456789010995"
          expirationMonth={3}
          expirationYear={2021}
          bank="N26"
          owner="Maxence Bouret"
          bgColor="#eeeeee"
          color="#222222"
        />

        <CreditCard
          type="Master Card"
          number="0123456789016984"
          expirationMonth={12}
          expirationYear={2019}
          bank="Inter"
          owner="Firstname Lastname"
          bgColor="#FF6403"
          color="white"
        />
      </section>
      <h1>Ratings</h1>
      <section className="border" style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', flexDirection: 'column' }}>
        <Rating>0</Rating>
        <Rating>1.49</Rating>
        <Rating>1.5</Rating>
        <Rating>3</Rating>
        <Rating>4</Rating>
        <Rating>5</Rating>
      </section>
      <h1>Drivers Cards</h1>
      <section style={{ display: 'flex', justifyContent: 'space-around' }} >
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
      </section>
    </div>
  );
};

export default App;
