import React from 'react';
import logo from './logo.svg';
import './App.css';
import IdCard from './components/1IdCard.js'
import Greetings from './components/2Greetings.js'
import Random from './components/3Random.js'
import Color from './components/4BoxColor.js'
import CreditCard from './components/5CreditCard.js'
import Rating from './components/6Rating.js'
import DriverCard from './components/7DriverCard.js'



function App() {
  return (
    <div className="App">

      <h1>Iteration 1 | Component: IdCard</h1>
      <IdCard 
        lastName = 'Konar'
        firstName = 'Ayhan'
        gender = 'male'
        height = '172'
        birth= '1994-07-02'
        picture='https://randomuser.me/api/portraits/men/44.jpg' 
      />

      <h1>Iteration 2 | Component: Greetings</h1>
      <Greetings language='fr'/>
      <Greetings language='es'/>

      <h1>Iteration 3 | Component: Random</h1>
      <Random min={3} max={6} />
      <Random min={1} max={10} />
      
      <h1>Iteration 4 | Component: BoxColor</h1>
      <Color red={255} green={0} blue={0} />
      <Color red={123} green={5} blue={245} />

      <h1>Iteration 5 | Component: CreditCard</h1>
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

      <h1>Iteration 6 | Component: Rating</h1>
      <Rating>0</Rating>
      <Rating>1.49</Rating>
      <Rating>1.5</Rating>
      <Rating>3</Rating>
      <Rating>4</Rating>
      <Rating>5</Rating>

      <h1>Iteration 7 | Component: DriverCard</h1>
      <DriverCard
        name="Travis Kalanick"
        rating={4.2}
        img="https://si.wsj.net/public/resources/images/BN-TY647_37gql_OR_20170621052140.jpg?width=620&height=428"
        car={{
          model: "Toyota Corolla Altis",
          licensePlate: "CO42DE"
        }} 
      />
      <DriverCard
        name="Dara Khosrowshahi"
        rating={4.9}
        img="https://ubernewsroomapi.10upcdn.com/wp-content/uploads/2017/09/Dara_ELT_Newsroom_1000px.jpg"
        car={{
          model: "Audi A3",
          licensePlate: "BE33ER"
        }} 
      />

      <h1>Iteration 8</h1>


      <h1>Iteration 9</h1>


      <h1>Iteration 10</h1>


      <h1>Iteration 11</h1>


      <h1>Iteration 12</h1>


      <h1>Iteration 13</h1>


      <h1>Iteration 14</h1>


      <h1>Iteration 15</h1>


      <h1>Iteration 16</h1>


    </div>
  );
}

export default App;
