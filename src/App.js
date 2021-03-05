import React from 'react';
import './App.css';

import BoxColor from './components/box-color/BoxColor';
import Random from './components/random/Random';
import Greeting from './components/greeting/Greeting';
import IdCard from './components/id-card/IdCard';
import CreditCard from './components/credit-card/CreditCard';
import Rating from './components/rating/Rating';
import DriverCard from './components/driver-card/DriverCard';

function App() {
  return (
    <div className="App container">

      <div className="mx-4 my-4">
        <IdCard lastName="Doe" firstName="John" gender="Male" height={`${1.78}m`} birth={new Date("1992-07-14")} picture="https://randomuser.me/api/portraits/men/44.jpg" />
        <IdCard lastName="Delores" firstName="Obrien" gender="Female" height={`${1.72}m`} birth={new Date("1988-05-11")} picture="https://randomuser.me/api/portraits/women/44.jpg" />
      </div>

      <div className="row m-4 text-start">
        <Greeting className="col-12" lang="de">Ludvig</Greeting>
        <Greeting className="col-12" lang="fr">Pierre</Greeting>
        <Greeting className="col-12" lang="es">Kiko</Greeting>
      </div>

      <div className="row m-4 text-start">
        <Random min={1} max={6} />
        <Random min={0} max={100} />
        <Random min={25} max={50} />
      </div>

      <div className="mb-3">
        <BoxColor r={255} g={0} b={0} />
      </div>

      <div className="mb-3">
        <BoxColor r={50} g={200} b={50} />
      </div>

      <div className="mb-3">
        <BoxColor r={0} g={51} b={255} />
      </div>

      <div className="row justify-content-center">
        <CreditCard
          type="Visa"
          number="0123456789018845"
          expirationMonth={3}
          expirationYear={21}
          bank="BPN"
          owner="Kiko Quesada"
          bgColor="#11aa99"
          color="white"
        />
        <CreditCard
          type="Master Card"
          number="0123456789010995"
          expirationMonth={3}
          expirationYear={21}
          bank="N26"
          owner="Kiko Quesada"
          bgColor="#eeeeee"
          color="black"
        />
        <CreditCard
          type="Visa"
          number="0123456789016984"
          expirationMonth={12}
          expirationYear={19}
          bank="N26"
          owner="Kiko Quesada"
          bgColor="#ddbb55"
          color="white"
        />
      </div>

      <Rating>0</Rating>
      <Rating>1.49</Rating>
      <Rating>1.5</Rating>
      <Rating>3</Rating>
      <Rating>4</Rating>
      <Rating>5</Rating>
      <Rating>5</Rating>
      <Rating>5</Rating>



      <div className="row row-cols-1 row-cols-lg-2">
        <div className="col mb-2">
          <DriverCard
            name='Travis Kalanick'
            rating={4.9}
            img='https://si.wsj.net/public/resources/images/BN-TY647_37gql_OR_20170621052140.jpg?width=620&height=428'
            car={{
              model: 'Toyota Corolla Altis',
              licensePlate: 'CO42DE'
            }} />
        </div>

        <div className="col mb-2">
          <DriverCard
            name="Dara Khosrowshahi"
            rating={4.9}
            img="https://ubernewsroomapi.10upcdn.com/wp-content/uploads/2017/09/Dara_ELT_Newsroom_1000px.jpg"
            car={{
              model: "Audi A3",
              licensePlate: "BE33ER"
            }} />
        </div>
      </div>



      </div>
  );
}

export default App;
