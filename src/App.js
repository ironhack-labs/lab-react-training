import React from 'react';
import './App.css';
import IdCard from './components/IdCard';
import Greetings from './components/Greetings';
import Random from './components/Random';
import BoxColor from './components/boxcolor/BoxColor';
import CreditCard from './components/cards/CreditCard';
import Rating from './components/Rating';
import DriverCard from './components/DriverCard'
import LikeButton from './components/LikeButton';
import ClickablePicture from './components/ClickablePicture';
import Dice from './components/Dice';


import Carouse from './components/carousel/Carousel';
import Facebook from './components/facebook/FaceBook';

function App() {
  return (
    <><div>
      <h1>IdCard</h1>
      <IdCard
        lastName='Doe'
        firstName='John'
        gender='male'
        height={178}
        birth={new Date("1992-07-14")}
        picture="https://randomuser.me/api/portraits/men/44.jpg" />

      <IdCard
        lastName='Delores '
        firstName='Obrien'
        gender='female'
        height={172}
        birth={new Date("1988-05-11")}
        picture="https://randomuser.me/api/portraits/women/44.jpg" />
      <h1>Greetings</h1>
      <Greetings lang="de">Ludwig</Greetings>

      <Greetings lang="fr">François</Greetings>

      <h1>Random</h1>

      <Random min={1} max={6} />
      <Random min={1} max={100} />

      <h1>BoxColor</h1>

      <BoxColor r={255} g={0} b={0} />
      <BoxColor r={128} g={255} b={0} />

      <h1>CreditCard</h1>




    </div>
      <div className="card-center">

        <CreditCard
          type="Visa"
          number="0123 4567 8901 8845"
          expirationMonth={3}
          expirationYear={2021}
          bank="BNP"
          owner="Maxence Bouret"
          bgColor="#11aa99"
          color="blue" />
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
          color="red" />
      </div>
      <div>
        <h1>Rating</h1>
        <Rating value={0} />
        <Rating value={1.49} />
        <Rating value={1.5} />
        <Rating value={3} />
        <Rating value={4} />
        <Rating value={5} />
      </div>
      <div>
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
      <div>
        < LikeButton />
        < LikeButton />
      </div>
      <div>
        < ClickablePicture
          img='/img/persons/maxence.png'
          imgClicked='/img/persons/maxence-glasses.png'
        />
      </div>
      <div>
        <Dice />
      </div>
      <div>
        
        <Facebook />
      </div>
      <div> 
        <Carouse />
      </div>



    </>
  );
}

export default App;
