import React from 'react';
import './App.css';
import IdCard from './components/idcard/IdCard';
import moment from 'moment';
import Greeting from './components/greetings/Greeting';
import Random from './components/random/Random';
import BoxColor from './components/boxColor/BoxColor';
import CreditCard from './components/creditCard/CreditCard';
import Rating from './components/rating/Rating';
import DriverCard from './components/driverCard/DriverCard';
import LikeButton from './components/likeButton/LikeButton';
import ClickablePicture from './components/clickablePicture/ClickablePicture';

function App() {
  return (
    <div className="App">
      <h1>Iteration 1</h1>
      <IdCard
        lastName='Doe'
        firstName='John'
        gender='male'
        height={178}
        birth={moment(new Date("1992-07-14")).format('ll')}
        picture="https://randomuser.me/api/portraits/men/44.jpg"
      />
      <IdCard
        lastName='Delores '
        firstName='Obrien'
        gender='female'
        height={172}
        birth={moment(new Date("1988-05-11")).format('ll')}
        picture="https://randomuser.me/api/portraits/women/44.jpg"
      />

      <div className="py-5 px-5">
        <h1>Iteration 2</h1>
        <Greeting lang="de">Ludwig</Greeting> 
        <Greeting lang="fr">Francois</Greeting> 
        <Greeting lang="es">Juana</Greeting> 
        <Greeting lang="en">Maria</Greeting> 
      </div>

      <div className="py-5 px-5">
        <h1>Iteration 3</h1>
        <Random min={1} max={6}/>
        <Random min={1} max={100}/>
      </div>

      <div className="py-5 px-5">
        <h1>Iteration 4</h1>
        <BoxColor r={255} g={0} b={0} />
        <BoxColor r={128} g={255} b={0} />
      </div>

      <div className="py-5 px-5">
        <h1>Iteration 5</h1>
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
          bank="BNP"
          owner="Elena Marsili"
          bgColor="#ddbb55"
          color="white" />
      </div>

      <div className="py-5 px-5">
        <h1>Iteration 6</h1>
        <Rating>0</Rating>
        <Rating>1.49</Rating>
        <Rating>1.5</Rating>
        <Rating>3</Rating>
        <Rating>4</Rating>
        <Rating>5</Rating>
      </div>

      <div className="py-5 px-5">
        <h1>Iteration 7</h1>
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

      <div className="py-5 px-5">
        <h1>Iteration 8</h1>
        <LikeButton /> 
        <LikeButton />
      </div>

      <div className="py-5 px-5">
        <h1>Iteration 9</h1>
        <ClickablePicture
          img='/img/persons/maxence.png'
          imgClicked='/img/persons/maxence-glasses.png'
        />
      </div>


    </div>
  );
}

export default App;
