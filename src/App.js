import React from 'react';
import './App.css';
import logo from './logo.svg';
import IdCard from './components/idCard/IdCard';
import Greetings from './components/greeting/Greetings';
import Random from './components/random/Random';
import BoxColor from './components/boxColor/BoxColor';
import CreditCard from './components/creditCard/CreditCard';
import LikeButton from './components/likeButton/LikeButton';
import ClickablePicture from './components/clickablePicture/ClickablePicture'
import FaceBook from './components/facebook/FaceBook';
function App() {
  return (
    <div>
      <h3>Id Card</h3>
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
      <h3>Greetings Mamahue!</h3>
      <Greetings lang="de">Ludwig</Greetings>
      <Greetings lang="fr">François</Greetings>
      <h3>Random number</h3>
      <Random min={1} max={6} />
      <Random min={1} max={100} />
      <h3>Box Color</h3>
      <BoxColor r={255} g={0} b={0} />
      <BoxColor r={128} g={255} b={0} />
      <h3>Credit Card</h3>
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
      <h3>Like Button</h3>
      <LikeButton />
      <h3>Picture</h3>
      <ClickablePicture
        img='/img/persons/maxence.png'
        imgClicked='/img/persons/maxence-glasses.png'
      />
      <h3>Facebook's Profiles</h3>
      <FaceBook />
      

    </div>
  );
}

export default App;



