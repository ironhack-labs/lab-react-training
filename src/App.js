import React from 'react';
// import logo from './logo.svg';
import IdCard from './components/idCard/IdCard.jsx';
import Greetings from './components/greetings/Greetings.jsx';
import Random from './components/random/Random.jsx';
import BoxColor from './components/boxColor/BoxColor.jsx';
import CreditCard from './components/creditCard/CreditCard.jsx';
import Rating from './components/rating/Rating.jsx';
import DriverCard from './components/driverCard/DriverCard.jsx';
import LikeButton from './components/likeButton/LikeButton.jsx';
import ClickablePicture from './components/clickablePicture/ClickablePicture.jsx';
import Dice from './components/dice/Dice.jsx';
import Carousel from './components/carousel/Carousel.jsx';
import NumbersTable from './components/numbersTable/NumbersTable.jsx';
import Facebook from './components/facebook/Facebook';
import SignupPage from './components/signupPage/SignupPage';

import './App.css';

function App() {
  return (
    <div className="App">
      <h1 className="iteration">ITERARION 1:</h1>
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

      <h1 className="iteration">ITERARION 2:</h1>
      <Greetings lang="de">Ludwig</Greetings>
      <Greetings lang="fr">François</Greetings>

      <h1 className="iteration">ITERARION 3:</h1>
      <Random min={1} max={6} />
      <Random min={1} max={100} />

      <h1 className="iteration">ITERARION 4:</h1>
      <BoxColor r={255} g={0} b={0} />
      <BoxColor r={128} g={255} b={0} />

      <h1 className="iteration">ITERARION 5:</h1>
      <div className="App-creditCard">
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
      </div>
      <h1 className="iteration">ITERARION 6:</h1>
      <div className="App-rating">
        <Rating>0</Rating>
        <Rating>1.49</Rating>
        <Rating>1.5</Rating>
        <Rating>3</Rating>
        <Rating>4</Rating>
        <Rating>5</Rating>
      </div>
      <h1 className="iteration">ITERARION 7:</h1>
      <div className="App-driverCard">
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
      </div>
      <h1 className="iteration">ITERARION 8:</h1>
      <div className="App-likeButton">
        <LikeButton /> <LikeButton />
      </div>
      <h1 className="iteration">ITERARION 9:</h1>
      <div className="App-clickablePicture">
        <ClickablePicture
          img="/img/persons/maxence.png"
          imgClicked="/img/persons/maxence-glasses.png"
        />
      </div>
      <h1 className="iteration">ITERARION 10:</h1>
      <div className="App-dice">
        <Dice />
      </div>
      <h1 className="iteration">ITERARION 11:</h1>
      <div>
        <Carousel
          imgs={[
            'https://randomuser.me/api/portraits/women/1.jpg',
            'https://randomuser.me/api/portraits/men/1.jpg',
            'https://randomuser.me/api/portraits/women/2.jpg',
            'https://randomuser.me/api/portraits/men/2.jpg',
          ]}
        />
      </div>
      <h1 className="iteration">ITERARION 12:</h1>
      <div className="App-numbersTable">
        <NumbersTable limit={12} />
      </div>
      <h1 className="iteration">ITERARION 13 & 14:</h1>
      <div className="App-facebook">
        <Facebook />
      </div>
      <h1 className="iteration">ITERARION 15:</h1>
      <div className="App-signupPage">
        <SignupPage />
      </div>
    </div>
  );
}

export default App;
