import React from 'react';
import './App.css';
import IdCard from './IdCard/IdCard'
import Greetings from './Greetings/Greetings'
import Random from './Random/Random'
import BoxColor from './BoxColor/BoxColor'
import CreditCard from './CreditCard/CreditCard'
import Rating from './Rating/Rating'
import DriverCard from './DriverCard/DriverCard'

function App() {
  return (
    <div className="App">
    <h1>IdCard</h1>
       <IdCard image_url='https://randomuser.me/api/portraits/men/44.jpg' firstname='John' lastname='Doe' gender='Male' height='178' birth="1992-07-14" />
       <IdCard image_url='https://randomuser.me/api/portraits/women/44.jpg'  firstname='Obrien' lastname='Delores' gender='Female' height='178' birth="1988-05-11" />
    
    <h1>Greetings</h1>
      <Greetings lang="de">Ludwig</Greetings>
      <Greetings lang="fr">François</Greetings>

    <h1>Random</h1>
      <Random min={1} max={6}/>
      <Random min={1} max={100}/>

    <h1>Box Color</h1>
      <BoxColor r={255} g={0} b={0} />
      <BoxColor r={128} g={255} b={0} />

    <h1>Credit Card</h1>
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

    <h1>Rating</h1>
    <Rating>0</Rating>
    <Rating>1.49</Rating>
    <Rating>1.5</Rating>
    <Rating>3</Rating>
    <Rating>4</Rating>
    <Rating>5</Rating>

    <h1>Driver Card</h1>
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
    </div>
  );
}

export default App;
