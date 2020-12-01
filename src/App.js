import React from 'react';
// import logo from './logo.svg';
import './App.css';
import BoxColor from './components/BoxColor';
import CreditCard from './components/CreditCard';
import DriverCard from './components/DriverCard';
import Greeting from './components/Greeting';
import IdCard from './components/IdCard';
import LikeButton from './components/LikeButton';
import Random from './components/Random';
import Rating from './components/Rating';

function App() {
  return (
    <div className="App"> 
      {/* <header className="App-header">
      new header
      </header> */}
      <h1>Iteration 8- LikeButton</h1>
      <LikeButton /> 
      {/* <LikeButton /> */}

      <h1>Iteration 7- DriverCard</h1>
      <div class="driverCardAppjs">
        <DriverCard
          name="Travis Kalanick"
          rating={4.2}
          img="https://si.wsj.net/public/resources/images/BN-TY647_37gql_OR_20170621052140.jpg?width=620&height=428"
          car={{
            model: "Toyota Corolla Altis",
            licensePlate: "CO42DE"
          }}  
        />
      </div>

      <div class="driverCardAppjs"> 
        <DriverCard
          name="Dara Khosrowshahi"
          rating={4.9}
          img="https://ubernewsroomapi.10upcdn.com/wp-content/uploads/2017/09/Dara_ELT_Newsroom_1000px.jpg"
          car={{
            model: "Audi A3",
            licensePlate: "BE33ER"
          }} 
        />
      </div>


      <h1>Iteration 6- Rating</h1>
      <Rating>0</Rating>
      <Rating>1.49</Rating>
      {/* <Rating>1.5</Rating> */}
      <Rating>3</Rating>
      <Rating>4</Rating>
      <Rating>5</Rating>
      <Rating>1.5</Rating>

      <h1>Iteration 5-CreditCard </h1>
      <div class="creditCardAppjs">
      <CreditCard
        type="./img/visa.png"
        number=".... .... .... 8845"
        expirationMonth={3}
        expirationYear={2021}
        bank="BNP"
        owner="Maxence Bouret"
        bgColor="#11aa99"
        color="white"
        />
      <CreditCard
        type="./img/master-card.svg"
        number="... .... .... 0995"
        expirationMonth={3}
        expirationYear={2021}
        bank="N26"
        owner="Maxence Bouret"
        bgColor="#eeeeee"
        color="#222222" 
      />

      <CreditCard
        type="./img/visa.png"
        number="... .... .... 6984"
        expirationMonth={12}
        expirationYear={2019}
        bank="Name of the Bank"
        owner="Firstname Lastname"
        bgColor="#ddbb55"
        color="white" 
      />
      </div>

      <h1>Iteration 4- BoxColor</h1>
      
      <BoxColor 
        r={255} 
        g={0} 
        b={0} 
        />
      <BoxColor 
        r={128} 
        g={255} 
        b={0} 
      />

      <h1>Iteration 3- Randomized Numbers</h1>
      <Random
         min={1} 
         max={6}
      />
      <Random
         min={1} 
         max={100}
      />

      <h1>Iteration 2- Greetings</h1>
      <Greeting
        name='kara'
        lang='de'
        children="Ludwig"
      />


      <Greeting
        name='kara'
        lang='fr'
        children="François"
      />
      <h1>Iteration 1 - Id Cards</h1>
      <IdCard
          lastName='Doe'
          firstName='John'
          gender='male'
          height= '178'
          birth= '1992-07-14'
          picture="https://randomuser.me/api/portraits/men/44.jpg"
      />


      <IdCard
          lastName='Obrien'
          firstName='Delores'
          gender='female'
          height= '172'
          birth= '1988-05-11'
          picture="https://randomuser.me/api/portraits/women/44.jpg"
      />
    </div>
  );
}

export default App;
