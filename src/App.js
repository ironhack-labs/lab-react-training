import './App.css';
import React from 'react';
import IdCard from './components/IdCard.js';
import Greetings from './components/Greetings.js';
import Random from './components/Random.js';
import BoxColor from './components/BoxColor.js';
import CreditCard from './components/CreditCards';
import Rating from './components/Rating';
import DriverCard from './components/DriverCard';
import LikeButton from './components/LikeButton';
import ClickablePicture from './components/ClickablePicture';
import Dice from './components/Dice';
import Carousel from './components/Carousel';

function App() {
  return (
    <div className="App">
      <h1>hello</h1>
      <IdCard 
        firstName='John'
        lastName='Doe'
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
        birth={new Date("1988-05-11")}
        picture="https://randomuser.me/api/portraits/women/44.jpg"
      />
      <div className="Greetings">
        <Greetings lang="fr">Hélène</Greetings>
        <Greetings lang="es">Adriana</Greetings>
        <Greetings lang="de">Mason</Greetings>
        <Greetings lang="">Knut</Greetings>
      </div>
      <div className='Random'>
        <Random min={1} max={6}/>
        <Random min={1} max={100}/>
      </div>
      <div className='BoxColor'>
        <BoxColor r={255} g={0} b={0} className='RowColor'/>
        <BoxColor r={128} g={255} b={0} className='RowColor'/>
      </div>
      <div className='CreditCard'>
      <CreditCard
        type="Visa" // function
        number="0123456789018845" // function
        expirationMonth={3} // function
        expirationYear={2021} // function
        bank="BNP" // function
        owner="Maxence Bouret" // function
        bgColor="#11aa99" // dans style
        color="white" // dans style
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
      <CreditCard
        type="Visa"
        number="0123456789016984"
        expirationMonth={12}
        expirationYear={2019}
        bank="Name of the Bank"
        owner="Firstname Lastname"
        bgColor="#ddbb55"
        color="white" 
      />
      </div>
      <div className='Rating'>
      <Rating>0</Rating>
      <Rating>1.49</Rating>
      <Rating>1.5</Rating>
      <Rating>3</Rating>
      <Rating>4</Rating>
      <Rating>5</Rating>
      </div>
      <div>
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
      <div>
        <LikeButton />
      </div>
      <div>
        <ClickablePicture
          img='https://images.emojiterra.com/google/android-10/512px/1f44d.png '
          imgClicked='https://images.emojiterra.com/google/noto-emoji/v2.034/512px/1f44e.png '
        />
      </div>
      <div>
        <Dice 
          dice = 
          {['../assets/images/dice-empty.png',
          '../assets/images/dice1.png',
          '../assets/images/dice2.png',
          '../assets/images/dice3.png',
          '../assets/images/dice4.png',
          '../assets/images/dice5.png',
          '../assets/images/dice6.png'
          ]}
        />
      </div>
      <div>
      <Carousel
        photos={[
        'https://randomuser.me/api/portraits/women/1.jpg',
        'https://randomuser.me/api/portraits/men/1.jpg',
        'https://randomuser.me/api/portraits/women/2.jpg',
        'https://randomuser.me/api/portraits/men/2.jpg'
        ]}
        />
        </div>
      </div>
    </div>
  );
}

export default App;
