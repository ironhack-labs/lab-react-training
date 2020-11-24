import React from 'react';
import './App.css';
import IdCard from './components/id';
import Greeting from './components/greeting';
import Random from './components/random';
import BoxColor from './components/boxcolor';
import CreditCard from './components/CreditCard';
import Rating from './components/rating';
import DriverCard from './components/drivercard';
import LikeButton from './components/likebutton';
import ClickablePicture from './components/clickablepicture';
import Dice from './components/dice';
import Carousel from './components/Carousel'
import NumbersTable from './components/numberstable';

function App() {
  return (
    <div className="App">
      <h3>Iteration #1</h3>
      <IdCard
        lastName="Doe"
        firstName="John"
        gender="male"
        height={178}
        date={new Date('1992-07-14')}
        picture="https://randomuser.me/api/portraits/men/44.jpg"
      />
      <IdCard
        lastName="Delores"
        firstName="Obrien"
        gender="female"
        height={172}
        date={new Date('1988-05-11')}
        picture="https://randomuser.me/api/portraits/women/44.jpg"
      />
      <h3>Iteration #2</h3>
      <Greeting lang="de">Ludwig</Greeting>
      <Greeting lang="fr">François</Greeting>
      <h3>Iteration #3</h3>
      <Random min={1} max={6} />
      <Random min={1} max={100} />
      <h3>Iteration #4</h3>
      <BoxColor r={255} g={0} b={0} />
      <BoxColor r={128} g={255} b={0} />
      <h3>Iteration #5</h3>
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
      <h3>Iteration #6</h3>
      <Rating>0</Rating>
      <Rating>1.49</Rating>
      <Rating>1.5</Rating>
      <Rating>3</Rating>
      <Rating>4</Rating>
      <Rating>5</Rating>
      <h3>Iteration #7</h3>
      <DriverCard
        name="Travis Kalanick"
        rating={4.2}
        img="https://si.wsj.net/public/resources/images/BN-TY647_37gql_OR_20170621052140.jpg?width=620&height=428"
        car={{
          model: 'Toyota Corolla Altis',
          licensePlate: 'CO42DE',
        }}
      />
      <DriverCard
        name="Dara Khosrowshahi"
        rating={4.9}
        img="https://ubernewsroomapi.10upcdn.com/wp-content/uploads/2017/09/Dara_ELT_Newsroom_1000px.jpg"
        car={{
          model: 'Audi A3',
          licensePlate: 'BE33ER',
        }}
      />
      <h3>Iteration #8</h3>
      <LikeButton />
      <LikeButton />
      <h3>Iteration #9</h3>
      <ClickablePicture
        img="/img/persons/maxence.png"
        imgClicked="/img/persons/maxence-glasses.png"
      />
      <h3>Iteration #10</h3>
      <Dice />
      <h3>Iteration #11</h3>
      <Carousel
        imgs={[
          'https://randomuser.me/api/portraits/women/1.jpg',
          'https://randomuser.me/api/portraits/men/1.jpg',
          'https://randomuser.me/api/portraits/women/2.jpg',
          'https://randomuser.me/api/portraits/men/2.jpg',
        ]}
      />
      <h3>Iteration #12</h3>
      <NumbersTable limit={15} />
    </div>
  );
}

export default App;
