import React from 'react';
import IdCard from './components/IdCard'
import Greeting from './components/Greeting'
import Random from './components/Random'
import BoxColor from './components/BoxColor'
import CreditCard from './components/CreditCard'
import Rating from './components/Rating'
import DriverCard from './components/DriverCard'
import LikeButton from './components/LikeButton'
import ClickablePicture from './components/ClickablePicture'
import Dice from './components/Dice'
import Carousel from './components/Carousel'
import logo from './logo.svg';
import './App.css';

function App() {
  return (
  <React.Fragment>
    <div>
      <h4>IDs</h4>
      <IdCard
        lastName='Doe'
        firstName='John'
        gender='male'
        height={178}
        birth={new Date("1992-07-14").toDateString()}
        picture="https://randomuser.me/api/portraits/men/44.jpg"
      />
    </div>

    <div>
      <IdCard
        lastName='Delores '
        firstName='Obrien'
        gender='female'
        height={172}
        birth={new Date("1988-05-11").toDateString()}
        picture="https://randomuser.me/api/portraits/women/44.jpg"
        />
    </div>
    <div>
      <h4>Greetings</h4>
      <Greeting lang="de">Ludwig</Greeting>
      <Greeting lang="fr">François</Greeting>
      <Greeting lang="es">Bella</Greeting>
      <Greeting lang="en">Adam</Greeting>
    </div>

    <div>
      <h4>Random number</h4>
      <Random min={1} max={6}/>
      <Random min={5} max={100}/>
    </div>

    <div>
      <h4>Box Color</h4>
      <BoxColor r={850} g={15} b={0} />
      <BoxColor r={128} g={255} b={0} />
    </div>

    <div>
    <h4>Credit Cards</h4>
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
    </div>

    <div>
      <h4>Ratings</h4>
      <Rating>0</Rating>
      <Rating>1.49</Rating>
      <Rating>1.5</Rating>
      <Rating>3</Rating>
      <Rating>4</Rating>
      <Rating>5</Rating>
    </div>

    <div>
    <h4>Driver Card</h4>
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
      rating={2.9}
      img="https://ubernewsroomapi.10upcdn.com/wp-content/uploads/2017/09/Dara_ELT_Newsroom_1000px.jpg"
      car={{
        model: "Audi A3",
        licensePlate: "BE33ER"
      }} />
    </div>

    <div>
    <h4>Like Button</h4>
    <LikeButton /> 
    <LikeButton />
    </div>
    
    <div>
    <h4>Clickable Picture</h4>
    <ClickablePicture
      img='/img/persons/maxence.png'
      imgClicked='/img/persons/maxence-glasses.png'
    />
    </div>

   <div>
    <h4>Dice</h4>
      <Dice />
    </div> 

    <div>
    <h4>Carousel</h4>
    <Carousel
        imgs={[
          'https://randomuser.me/api/portraits/women/1.jpg',
          'https://randomuser.me/api/portraits/men/1.jpg',
          'https://randomuser.me/api/portraits/women/2.jpg',
          'https://randomuser.me/api/portraits/men/2.jpg'
        ]}
        />
    </div>

  </React.Fragment>
  );
}

export default App;
