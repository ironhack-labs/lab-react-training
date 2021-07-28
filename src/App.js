import React from 'react';
import './App.css';
import IdCard from './Components/IdCards/IdCards';
import Greetings from './Components/Greetings/Greetings';
import Random from './Components/Random/Random';
import BoxColor from './Components/Boxcolor/Boxcolor';
import CreditCard from './Components/CreditCard/CreditCard'
import Rating from './Components/Rating';
import DriverCard from './Components/DriverCard/index'
import LikeButton from './Components/LikeButton';
import ClickablePicture from './Components/ClickablePicture'

function App() {
  return (
    <div className="App">
      <h2>IdCard</h2>
      <IdCard
        lastName='Doe'
        firstName='John'
        gender='male'
        height={178}
        birth={new Date("1992-07-14")}
        picture="https://randomuser.me/api/portraits/men/44.jpg"
      />
      <IdCard
        lastName='Delores '
        firstName='Obrien'
        gender='female'
        height={172}
        birth={new Date("1993-05-11")}
        picture="https://randomuser.me/api/portraits/women/8.jpg"
      />
      <h2>Greetings</h2>
      <Greetings lang="de">Ludwig</Greetings>
      <Greetings lang="fr">François</Greetings>
      <h2>Random</h2>
      <Random min={1} max={6} />
      <Random min={1} max={100} />
      <h2>BoxColor</h2>
      <BoxColor r={255} g={0} b={0} />
      <BoxColor r={128} g={255} b={0} />
      <h2>CreditCard</h2>
      <div className="creditCards-box">
        <CreditCard
          type="Visa"
          number="0123 4567 8901 8845"
          expirationMonth={3}
          expirationYear={2021}
          bank="BNP"
          owner="Maxence Bouret"
          bgColor="#11aa99"
          color="white" />
        <CreditCard
          type="Master Card"
          number="0123 4567 8901 0995"
          expirationMonth={3}
          expirationYear={2021}
          bank="N26"
          owner="Maxence Bouret"
          bgColor="#eeeeee"
          color="#222222" />
        <CreditCard
          type="Visa"
          number="0123 4567 8901 6984"
          expirationMonth={12}
          expirationYear={2019}
          bank="Name of the Bank"
          owner="Firstname Lastname"
          bgColor="#ddbb55"
          color="white" />
      </div>
      <h2>Rating</h2>
      <Rating value='0'></Rating>
      <Rating value='1.49'></Rating>
      <Rating value='1.5'></Rating>
      <Rating value='3'></Rating>
      <Rating value='4'></Rating>
      <Rating value='5'></Rating>
      < DriverCard
        name="Travis Kalanick"
        rating={4.2}
        img="https://si.wsj.net/public/resources/images/BN-TY647_37gql_OR_20170621052140.jpg?width=620&height=428"
        car={{
          model: "Toyota Corolla Altis",
          licensePlate: "CO42DE"
        }} />
      < DriverCard
        name="Dara Khosrowshahi"
        rating={4.9}
        img="https://ubernewsroomapi.10upcdn.com/wp-content/uploads/2017/09/Dara_ELT_Newsroom_1000px.jpg"
        car={{
          model: "Audi A3",
          licensePlate: "BE33ER"
        }} />
        <LikeButton/>
        <h2>ClickablePicture</h2>
        <ClickablePicture/>
    </div>
  );
}
export default App;