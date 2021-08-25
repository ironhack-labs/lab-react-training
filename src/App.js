import React from 'react';
import logo from './logo.svg';
import './App.css';
import IdCard from './components/idcard/IdCard';
import Greetings from './components/greetings/Greetings';
import Random from './components/random/Random';
import BoxColor from './components/boxcolor/BoxColor';
import CreditCard from './components/creditcard/CreditCard';
import DriverCard from './components/drivercard/DriverCard';
import Rating from './components/rating/Rating';
import LikeButton from './components/likebutton/LikeButton';
import ClickablePicture from './components/clickablepicture/ClickablePicture';


function App() {
  return (
    <div className="App">
      <h4 className="mb-2 d-flex justify-content-center">Iteration 1</h4>
      <IdCard
        picture="https://randomuser.me/api/portraits/women/44.jpg"
        firstName="Juana"
        lastName="de Arco"
        gender="female"
        height={172}
        birth={new Date("1988-05-11").toString()}
      />
      <h4 className="mb-2 d-flex justify-content-center">Iteration 2</h4>
      <Greetings lang="de">Julio</Greetings>

      <h4 className="mb-2 d-flex justify-content-center">Iteration 3</h4>
      <Random min={1} max={6} />
      <Random min={1} max={100} />

      <h4 className="mb-2 d-flex justify-content-center">Iteration 4</h4>
      <BoxColor r={255} g={0} b={0} />
      <BoxColor r={128} g={255} b={0} />

      <h4 className="mb-2 d-flex justify-content-center">Iteration 5</h4>
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

      <h4 className="mb-2 d-flex justify-content-center">Iteration 6</h4>

      <Rating>0</Rating>
      <Rating>1.49</Rating>
      <Rating>1.5</Rating>
      <Rating>3</Rating>
      <Rating>4</Rating>
      <Rating>5</Rating>

      <h4 className="mb-2 d-flex justify-content-center">Iteration 7</h4>
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

      <h4 className="mb-2 d-flex justify-content-center">Iteration 8</h4>
      <LikeButton />

      <h4 className="mb-2 d-flex justify-content-center">Iteration 9</h4>
      <ClickablePicture/>

    </div>
  );
}

export default App;
