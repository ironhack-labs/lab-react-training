import logo from '../src/logo.svg'
import React from 'react';
import './App.css';
import IdCard from './components/IdCard'
import Greetings from './components/Greetings'
import Random from './components/Random'
import BoxColor from './components/BoxColor'
import CreditCard from './components/CreditCard'
import Rating from './components/Rating'
import DriverCard from './components/DriverCard'
import LikeButton from './components/LikeButton'
import ClickablePicture from './components/ClickablePicture'
import Dice from './components/Dice'
import Carousel from './components/Carousel'
import NumbersTable from './components/NumbersTable'
import FaceBook from './components/Facebook'

function App() {
  return (
    <div className="App">
      <h2>Iteration 1: IdCard</h2>
      <div className="cards-container">
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
      </div>

      <h2>Iteration 2: Greetings</h2>
      <div className="cards-container">
        <Greetings lang="de">Ludwig</Greetings>
        <Greetings lang="fr">François</Greetings>
      </div>

      <h2>Iteration 3: Random</h2>
      <div className="cards-container">
        <Random min={1} max={6}/>
        <Random min={1} max={100}/>
      </div>

      <h2>Iteration 4: BoxColor</h2>
      <div className="cards-container">
        <BoxColor r={255} g={0} b={0} />
        <BoxColor r={128} g={255} b={0} />
      </div>

      <h2>Iteration 5: CreditCard</h2>
      <div className="cards-container">
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

      <h2>Iteration 6: Rating</h2>
      <div className="cards-container">
        <Rating>0</Rating>
        <Rating>1.49</Rating>
        <Rating>1.5</Rating>
        <Rating>3</Rating>
      </div>

      <h2>Iteration 7: DriverCard</h2>
<div className="cards-container">
  <DriverCard
    name="Dara Khosrowshahi"
    rating={4.9}
    img="https://www.gstatic.com/tv/thumb/persons/589228/589228_v9_ba.jpg"
    car={{
      model: "Audi A3",
      licensePlate: "BE33ER",
    }}
  />
</div>

  <h2>Iteration 8: LikeButton</h2>
  <div className="cards-container">
    <LikeButton />
  </div>
  <h2>Iteration 9: ClickablePicture</h2>
  <div className="cards-container">
    <ClickablePicture
      img='/img/persons/maxence.png'
      imgClicked='/img/persons/maxence-glasses.png'
    />
  </div>
  <h2>Iteration 10: Dice</h2>
  <div className="cards-container">
    <Dice />
  </div>
  <h2>Iteration 11: Carousel</h2>
  <div className="cards-container">
    <Carousel
      imgs={[
        "https://randomuser.me/api/portraits/women/1.jpg",
        "https://randomuser.me/api/portraits/men/1.jpg",
        "https://randomuser.me/api/portraits/women/2.jpg",
        "https://randomuser.me/api/portraits/men/2.jpg"
      ]}
    />
  </div>
  <h2>Iteration 12: NumbersTable</h2>
  <div className="cards-container">
    <NumbersTable limit={12} />
  </div>
  <h2>Iteration 13: FaceBook</h2>
  <div className="cards-container">
    <FaceBook />
  </div>
  </div>
  );
}
export default App;
