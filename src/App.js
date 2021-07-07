import React from 'react';
import './App.css';
import IdCard from './components/IdCard';
import Greetings from './components/Greetings';
import Random from './components/Random';
import BoxColor from './components/BoxColor';
import CreditCard from './components/CreditCard.jsx';
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
      <h1 className="font-semibold text-2xl my-4">Iteration 1: ID Card</h1>
      <p className="idCard_container">
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
      </p>
      <h1 className="font-semibold text-2xl my-4">Iteration 2: Greetings</h1>
      <p>
        <Greetings lang="de">Ludwig</Greetings>
        <Greetings lang="fr">François</Greetings>
      </p>
      <h1 className="font-semibold text-2xl my-4">Iteration 3: Random</h1>
      <p>
        <Random min={1} max={6} />
        <Random min={1} max={100} />
      </p>
      <p>
        <BoxColor r={255} g={0} b={0} />
        <BoxColor r={128} g={255} b={0} />
      </p>
      <h1 className="font-semibold text-2xl my-4">Iteration 4: Credit Card</h1>
      <p>
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
      </p>
      <h1 className="font-semibold text-2xl">Iteration 5: Ratings</h1>
      <p>
        <Rating>0</Rating>
        <Rating>1.49</Rating>
        <Rating>1.5</Rating>
        <Rating>3</Rating>
        <Rating>4</Rating>
        <Rating>5</Rating>
      </p>
      <h1 className="font-semibold text-2xl my-4">Iteration 6: Driver Card</h1>
      <p>
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
      </p>
      <h1 className="font-semibold text-2xl my-4">Iteration 8: Like Button</h1>
      <p>
        <LikeButton />
      </p>

      <h1 className="font-semibold text-2xl my-4">
        Iteration 9: Clickable Picture
      </h1>
      <p>
        <ClickablePicture
          img="/img/persons/maxence.png"
          imgClicked="/img/persons/maxence-glasses.png"
        />
      </p>

      <h1 className="font-semibold text-2xl my-4">Iteratio 10: Dice</h1>
      <p>
        <Dice />
      </p>
      <h1 className="font-semibold text-2xl my-4">Iteratio 11: Carousel</h1>
      <Carousel
        imgs={[
          'https://randomuser.me/api/portraits/women/1.jpg',
          'https://randomuser.me/api/portraits/men/1.jpg',
          'https://randomuser.me/api/portraits/women/2.jpg',
          'https://randomuser.me/api/portraits/men/2.jpg',
        ]}
      />
      <h1 className="font-semibold text-2xl my-4">
        Iteratio 12: Numbers Table
      </h1>
      <NumbersTable limit={12} />

      <h1 className="font-semibold text-2xl my-4">
        Iteratio 13: FaceBook (Simple)
      </h1>
    </div>
  );
}

export default App;
