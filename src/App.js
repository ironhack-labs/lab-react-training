import React from 'react';
import logo from './logo.svg';
import './App.css';
import IdCard from './IdCards/IdCard';
import Greetings from './Greetings/Greetings';
import Random from './Random/Random';
import BoxColor from './BoxColor/BoxColor';
import CreditCard from './CreditCard/CreditCard'
import Rating from './Rating/Rating';
import DriverCard from './DriverCard/DriverCard.js'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <IdCard 
          lastName='Reeves'
          firstName='Keanu'
          gender='male'
          height={187}
          birth="02-09-1964"
          picture="https://pyxis.nymag.com/v1/imgs/178/da9/4028eebbb3af66cdae2a1598803e95a4e2-28-keanu-reeves.rsquare.w1200.jpg"/>
        <Greetings lang='es'> Alex </Greetings>
        <Greetings lang='en'> Xavi </Greetings>
        <Random min={1} max={6}/>
        <Random min={1} max={100}/>
        <BoxColor r={0} g={204} b={102}/>
        <BoxColor r={0} g={102} b={204}/>
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
          bank="ING"
          owner="Luis Garcia"
          bgColor="#ddbb55"
          color="white" />
        <Rating>2.7</Rating>
        <Rating>1.49</Rating>
        <Rating>1.5</Rating>
        <Rating>3</Rating>
        <Rating>4.3</Rating>
        <Rating>5</Rating>
        <DriverCard
          name="Travis Kalanick"
          rating={4.2}
          img="https://si.wsj.net/public/resources/images/BN-TY647_37gql_OR_20170621052140.jpg?width=620&height=428"
          car={{
            model: "Toyota Corolla Altis",
            licensePlate: "CO42DE"
          }} />
        <DriverCard
          name="Dara Khosrowshahi"
          rating={4.9}
          img="https://ubernewsroomapi.10upcdn.com/wp-content/uploads/2017/09/Dara_ELT_Newsroom_1000px.jpg"
          car={{
            model: "Audi A3",
            licensePlate: "BE33ER"
          }} />
      </header>
    </div>
  );
}

export default App;
