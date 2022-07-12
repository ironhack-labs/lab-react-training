import './App.css';
import IdCard from './components/IdCard';
import Greetings from './components/greetings';
import Random from './components/random';
import BoxColor from './components/boxColor';
import CreditCard from './components/creditCard';
import Rating from './components/rating';
import DriverCard from './components/DriverCard';
import LikeButton from './components/LikeButton/LikeButton';
import ClickablePicture from './components/ClickablePicture/ClickablePicture';
import Dice from './components/Dice/Dice';
import Carousel from './components/Corousel/Carousel';
import NumbersTable from './components/NumbersTable/NumbersTable';

import maxence from './assets/images/maxence.png'
import maxenceClicked from './assets/images/maxence-glasses.png'


function App() {
  return (
    <>
      <h3>Iteration 1</h3>

      <IdCard
        lastName='Doe'
        firstName='John'
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
      <h3>Iteration 2</h3>

      <Greetings lang="fr">Ludwig</Greetings>
      <Greetings lang="en">Ludwig</Greetings>

      <h3>Iteration 3</h3>

      <Random min={4} max={12} />

      <h3>Iteration 4</h3>

      <BoxColor r={0} g={255} b={0} />

      <h3>Iteration 5</h3>

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
      <h3>Iteration 6</h3>

      <Rating>1.50</Rating>

      <h3>Iteration 7</h3>

      <DriverCard
        name="Travis Kalanick"
        rating={4.2}
        img="https://si.wsj.net/public/resources/images/BN-TY647_37gql_OR_20170621052140.jpg?width=620&height=428"
        car={{
          model: "Toyota Corolla Altis",
          licensePlate: "CO42DE"
        }}
      />
      <h3>Iteration 8</h3>

      <LikeButton />

      <h3>Iteration 9</h3>

      <ClickablePicture
        img={maxence}
        imgClicked={maxenceClicked} />

      <h3>Iteration 10</h3>
      <Dice />

      <h3>Iteration 11</h3>
      <Carousel
        images={[
          'https://randomuser.me/api/portraits/women/1.jpg',
          'https://randomuser.me/api/portraits/men/1.jpg',
          'https://randomuser.me/api/portraits/women/2.jpg',
          'https://randomuser.me/api/portraits/men/2.jpg'
        ]}
      />

      <h3>Iteration 12</h3>
      <NumbersTable limit={12} />
    </>

  );
}

export default App;
