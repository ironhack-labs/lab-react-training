import React from 'react';
import './App.css';
import IdCard from './components/id-card/IdCard';
import Title from './components/title/Title';
import Greetings from './components/greetings/Greetings'
import Random from './components/random/Random'
import BoxColor from './components/box-color/BoxColor';
import CreditCard from './components/credit-card/CreditCard';
import Rating from './components/rating/Rating';
import DriverCard from './components/driver-card/DriverCard';
import LikeButton from './components/like-button/LikeButton';



function App() {
  return (
    <div className="App">

      <Title title="Id Cards"></Title>
        <IdCard firstName="John" lastName="Doe" gender="male" height={178} birthDate={new Date("1992-07-14")} image="https://randomuser.me/api/portraits/men/44.jpg"></IdCard>
        <IdCard firstName="Delores" lastName="Obrien" gender="female" height={172} birthDate={new Date("1988-05-11")} image="https://randomuser.me/api/portraits/women/44.jpg"></IdCard>

      <Title title="Greetings"></Title>
        <Greetings lang="de">Ludwing</Greetings>
        <Greetings lang="es">Jaime</Greetings>
        <Greetings lang="fr">Antoine</Greetings>
        <Greetings lang="en">Jack</Greetings>

      <Title title="Random"></Title>
        <Random min={1} max={6}></Random>
        <Random min={1} max={100}></Random>

      <Title title="Box Color"></Title>
        <BoxColor r={255} g={0} b={0} />
        <BoxColor r={0} g={255} b={0} />
        <BoxColor r={0} g={0} b={255}/>
        <BoxColor r={255} g={255} b={255} />
        <BoxColor r={0} g={0} b={0} />

      <Title title="Credit Card"></Title>
      <div className="row">

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

      </div>

      <Title title="Rating"></Title>

        0<Rating>0</Rating> 
        1,49<Rating>1.49</Rating>
        1,50<Rating>1.50</Rating>
        3<Rating>3</Rating>
        4<Rating>4</Rating>
        5<Rating>5</Rating>

      <Title title="Driver Card"></Title>

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

      <Title title="Like Button"></Title>
        <LikeButton />

    </div>
  );
}

export default App;
