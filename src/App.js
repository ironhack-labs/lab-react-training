import React from 'react';
import './App.css';
import BoxColor from './components/boxcolor/BoxColor';
import Carousel from './components/carousel/Carousel';
import ClickablePicture from './components/clickablepicture/ClickablePicture';
import CreditCard from './components/creditcard/CreditCard';
import Dice from './components/dice/Dice';
import DriverCard from './components/drivercard/DriverCard';
import Facebook from './components/facebook/FaceBook';
import Greetings from './components/greetings/Greetings';
import IdCard from './components/idcard/IdCard';
import LikeButton from './components/likebutton/LikeButton';
import NumbersTable from './components/numberstable/NumbersTable';
import Random from './components/random/Random';
import Rating from './components/rating/Rating';
import SignupPage from './components/signuppage/SignupPage';

function App() {
  return (
    <div className="main-container">
      <h2>Iteration 1 - ID Cards</h2>
      <IdCard
        lastName="Doe"
        firstName="John"
        gender="male"
        height={178}
        birth={new Date('1992-07-14')}
        picture="https://randomuser.me/api/portraits/men/44.jpg"
      />
      <IdCard
        lastName="Delores "
        firstName="Obrien"
        gender="female"
        height={172}
        birth={new Date('1988-05-11')}
        picture="https://randomuser.me/api/portraits/women/44.jpg"
      />

      <h2>Iteration 2 - Greetings</h2>
      <Greetings lang="de">Ludwig</Greetings>
      <Greetings lang="fr">François</Greetings>

      <h2>Iteration 3 - Random numbers</h2>
      <Random min={1} max={6} />
      <Random min={1} max={100} />

      <h2>Iteration 4 - Box color</h2>
      <BoxColor r={255} g={0} b={0} />
      <BoxColor r={128} g={255} b={0} />

      <h2>Iteration 5 - Credit Cards</h2>
      <section id="credit-cards">
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
          bank="ING Direct"
          owner="Tomas Turbado"
          bgColor="#ddbb55"
          color="white"
        />
      </section>

      <h2>Iteration 6 - Ratings</h2>
      <section id="ratings">
        <Rating>0</Rating>
        <Rating>1.49</Rating>
        <Rating>1.5</Rating>
        <Rating>3</Rating>
        <Rating>4</Rating>
        <Rating>5</Rating>
      </section>

      <h2>Iteration 7 - DriverCard</h2>
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

      <h2>Iteration 8 - LikeButton</h2>
      <LikeButton></LikeButton>

      <h2>Iteration 9 - ClickablePicture</h2>
      <ClickablePicture
        img="/img/persons/maxence.png"
        imgClicked="/img/persons/maxence-glasses.png"
      />

      <h2>Iteration 10 - Dice</h2>
      <Dice />

      <h2>Iteration 11 - Carousel</h2>
      <Carousel
        imgs={[
          'https://randomuser.me/api/portraits/women/1.jpg',
          'https://randomuser.me/api/portraits/men/1.jpg',
          'https://randomuser.me/api/portraits/women/2.jpg',
          'https://randomuser.me/api/portraits/men/2.jpg',
        ]}
      />

      <h2>Iteration 12 - NumbersTable</h2>
      <NumbersTable limit={12}></NumbersTable>

      <h2>Iteration 13 - FaceBook</h2>
      <Facebook />

      <h2>Iteration 14 - SignupPage</h2>
      <SignupPage />
      
    </div>
  );
}

export default App;
