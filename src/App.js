import React from 'react';
import './App.css';
import IdCard from './components/IdCard'
import Greetings from './components/Greetings'
import Title from './components/Title'
import Random from './components/Random'
import BoxColor from './components/BoxColor'
import CreditCard from './components/CreditCard'
import Rating from './components/Rating'
import DriverCard from './components/DriverCard'
import LikeButton from './components/LikeButton'
import ClickablePicture from './components/ClickablePicture'

function App() {
  return (
    <div className="App">

<div>
  <Title edit='IdCard'/>
</div>

<IdCard
  lastName='Doe'
  firstName='John'
  gender='male'
  height='178'
  birth="1992-07-14"
  picture="https://randomuser.me/api/portraits/men/44.jpg"
/>

<IdCard
  lastName='Delores '
  firstName='Obrien'
  gender='female'
  height='172'
  birth="1988-05-11"
  picture="https://randomuser.me/api/portraits/women/44.jpg"
/>
      

  <Title edit='Greetings'/>


  
  <div>

  <Greetings lang='de' children='Ludwig'/>
  <Greetings lang="fr" children = 'François'/>

  </div>

  <Title edit='Random'/>

  <div>

  <Random min={1} max={6}/>
  <Random min={1} max={100}/>
  </div>

  <Title edit='BoxColor'/>


    <div>
  <BoxColor r={255} g={0} b={0} />
  <BoxColor r={128} g={255} b={0} />
  </div>

  <Title edit='CreditCard'/>

  <div>
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

  <Title edit='Rating'/>
  
  <div>
  <Rating>0</Rating>
  <Rating>1.49</Rating>
  <Rating>1.5</Rating>
  <Rating>3</Rating>
  <Rating>4</Rating>
  <Rating>1267</Rating>
  </div>

  <Title edit='Rating'/>

  <div>
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
  </div>

  <Title edit='LikeButton'/>


  <LikeButton /> <LikeButton />
  
  
  <Title edit='ClickablePcture'/>


  <ClickablePicture
  img='/img/persons/maxence.png'
  imgClicked='/img/persons/maxence-glasses.png'
/>



</div>
  );
}

export default App;
