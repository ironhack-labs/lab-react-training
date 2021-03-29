import React from 'react';
import logo from './logo.svg';
import './App.css';
import IdCard from './components/IdCard';
import Greeting from './components/Greeting';
import Random from './components/Random';
import BoxColor from './components/BoxColor';
import CreditCard from './components/CreditCard';
import Rating from './components/Rating';
import DriverCard from './components/DriverCard';
import LikeButton from './components/LikeButton';
import ClickablePicture from './components/ClickablePicture';
import Dice from './components/Dice';
import Carousel from './components/Carousel';
import NumbersTable from './components/NumbersTable';

function App() {
  return (
    <div className="App">
      <h1>It.1 - Id Cards</h1>
      <IdCard
        firstName='Javier'
        lastName='Repilado'
        gender='male'
        height={173}
        birth={new Date('1990-03-16')}
        picture={{src: 'https://media-exp1.licdn.com/dms/image/C4D03AQE0hSqrZcgBRw/profile-displayphoto-shrink_200_200/0/1583432189215?e=1621468800&v=beta&t=yhxhudaYfGQqW_U1AoxPHPplwGTYHhko2s5uQMU1Bmg', alt: 'Profile Picture'}}
      />

      <hr/>

      <h1>It.2 - Greetings</h1>
      <Greeting lang='de' />
      <Greeting lang='fr' />

      <hr/>

      <h1>It.3 - Random</h1>
      <Random min={1} max={6} />
      <Random min={1} max={100} />

      <hr/>

      <h1>It.4 - Box Color</h1>
      <BoxColor r={200} g={238} b={217} />
      <BoxColor r={137} g={120} b={84} />

      <hr/>

      <h1>It.5 - Credit Cards</h1>
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

      <hr/>

      <h1>It.6 - Rating</h1>
      <Rating>0</Rating>
      <Rating>1.49</Rating>
      <Rating>1.5</Rating>
      <Rating>3</Rating>
      <Rating>4</Rating>
      <Rating>5</Rating>

      <hr/>

      <h1>It.7 - DriverCard</h1>
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
        
      <hr/>

      <h1>It.8 - Like Button</h1>
      <LikeButton />
      <LikeButton />

      <hr/>

      <h1>It.9 - Clickable Picture</h1>
      <ClickablePicture />

      <hr/>

      <h1>It.10 - Dice</h1>
      <Dice />

      <hr/>

      <h1>It.11 - Carousel</h1>
      <Carousel  imgs = {[
        'https://randomuser.me/api/portraits/women/1.jpg',
        'https://randomuser.me/api/portraits/men/1.jpg',
        'https://randomuser.me/api/portraits/women/2.jpg',
        'https://randomuser.me/api/portraits/men/2.jpg'
        ]}
      />

      <hr/>

      <h1>It.12 - NumbersTable</h1>
      <NumbersTable limit={12}/>

    </div>
  );
}

export default App;
