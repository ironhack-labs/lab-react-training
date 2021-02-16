import React from 'react';
import './components/IdCard/IdCard.css';
// import IdCard from './components/IdCard/IdCard'
// import Greetings from './components/Greetings/Greetings'
// import Random from './components/Random/Random'
// import BoxColor from './components/BoxColor/BoxColor'
// import CreditCard from './components/CreditCard/CreditCard'
// import Rating from './components/Rating/Rating'
// import DriverCard from './components/DriverCard/DriverCard'

//Clases

import IdCardClass from './classesComponents/IdCard/IdCard'
import GreetingsClass from './classesComponents/Greetings/Greetings'
import RandomClass from './classesComponents/Random/Random'
import DriverCardClass from './classesComponents/DriverCard/DriverCard'
import BoxColorClass from './classesComponents/BoxColor/BoxColor'
import CreditCardClass from './classesComponents/CreditCard/CreditCard'
import RatingClass from './classesComponents/Rating/Rating'

//Iteration 8 to 16
import LikeButton from "./components/LikeButton/LikeButton"
import ClickablePicture from "./components/ClickablePicture/ClickablePicture"
import Dice from "./components/Dice/Dice"
import Carousel from "./components/Carousel/Carousel"
import NumbersList from "./components/NumbersList/NumbersList"
import Facebook from "./components/Facebook/Facebook"
import SignupPage from './components/SignupPage/SignupPage'
import RGBColorPicker from './components/RGBColorPicker/RGBColorPicker'


function App() {
  return (
    <div className="App">
      <h2>Iteration 1</h2>
      <IdCardClass
        lastName='Doe'
        firstName='John'
        gender='male'
        height={178}
        birth={'1992-07-14'}
        picture="https://randomuser.me/api/portraits/men/44.jpg"
      />
      <IdCardClass
        lastName='Delores '
        firstName='Obrien'
        gender='female'
        height={172}
        birth={'1988-05-11'}
        picture="https://randomuser.me/api/portraits/women/44.jpg"
      />
      <h2>Iteration 2</h2>
      <GreetingsClass lang="de">Ludwig</GreetingsClass>
      <GreetingsClass lang="fr">François</GreetingsClass>
      <h2>Iteration 3</h2>
      <RandomClass min={1} max={6}/>
      <RandomClass min={1} max={100}/>
      <h2>Iteration 4</h2>
      <BoxColorClass r={255} g={0} b={0} color='white' />
      <BoxColorClass r={128} g={255} b={0} color='black'/>
      <h2>Iteration 5</h2>
      <CreditCardClass
        type="Visa"
        number="0123456789018845"
        expirationMonth={3}
        expirationYear={2021}
        bank="BNP"
        owner="Maxence Bouret"
        bgColor="#11aa99"
        color="white" />
      <CreditCardClass
        type="Master Card"
        number="0123456789010995"
        expirationMonth={3}
        expirationYear={2021}
        bank="N26"
        owner="Maxence Bouret"
        bgColor="#eeeeee"
        color="#222222" />
      <CreditCardClass
        type="Visa"
        number="0123456789016984"
        expirationMonth={12}
        expirationYear={2019}
        bank="Name of the Bank"
        owner="Firstname Lastname"
        bgColor="#ddbb55"
        color="white" 
        />
      <h2>Iteration 6</h2>
      <RatingClass>0</RatingClass>
      <RatingClass>1.49</RatingClass>
      <RatingClass>1.5</RatingClass>
      <RatingClass>3</RatingClass>
      <RatingClass>4</RatingClass>
      <RatingClass>5</RatingClass>
      <h2>Iteration 7</h2>
      <DriverCardClass
        name="Travis Kalanick"
        rating={4.2}
        img="https://si.wsj.net/public/resources/images/BN-TY647_37gql_OR_20170621052140.jpg?width=620&height=428"
        car={{
          model: "Toyota Corolla Altis",
          licensePlate: "CO42DE"
        }} />
      <DriverCardClass
        name="Dara Khosrowshahi"
        rating={4.9}
        img="https://ubernewsroomapi.10upcdn.com/wp-content/uploads/2017/09/Dara_ELT_Newsroom_1000px.jpg"
        car={{
          model: "Audi A3",
          licensePlate: "BE33ER"
        }} />
      <h2>Iteration 8</h2>
      <LikeButton textcolor="white"/>
      <h2>Iteration 9</h2>
      <ClickablePicture
        img='/img/persons/maxence.png'
        imgClicked='/img/persons/maxence-glasses.png'
      />
      <h2>Iteration 10</h2>
      <Dice />
      <h2>Iteration 11</h2>
      <Carousel
        imgs={[
          'https://randomuser.me/api/portraits/women/1.jpg',
          'https://randomuser.me/api/portraits/men/1.jpg',
          'https://randomuser.me/api/portraits/women/2.jpg',
          'https://randomuser.me/api/portraits/men/2.jpg'
        ]}
      />
      <h2>Iteration 12</h2>
      <NumbersList limit={12} />
      <h2>Iteration 13-14</h2>
      <Facebook />
      <h2>Iteration 15</h2>
      <SignupPage />
      <h2>Iteration 16</h2>
      <RGBColorPicker />
    </div>
    
  );
}

export default App;
