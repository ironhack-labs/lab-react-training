import React from 'react';
import './App.css';
import IdCard from './components/IdCard.jsx';
import Greetings from './components/Greetings.jsx';
import Random from './components/Random.jsx';
import Ratings from './components/Ratings.jsx';
import CreditCard from './components/CreditCard.jsx';
// import LikeButton from './components/LikeButton.jsx';
// import ClickablePicture from './components/ClickablePicture.jsx';

function App() {
  return (
    <div>
      <IdCard
  lastName='Doe'
  firstName='John'
  gender='male'
  height={178}
  birth={new Date("1992-07-14").toString()}
  picture="https://randomuser.me/api/portraits/men/44.jpg"
/>

<IdCard
  lastName='Delores'
  firstName='Obrien'
  gender='female'
  height={172}
  birth={new Date("1988-05-11").toString()}
  picture="https://randomuser.me/api/portraits/women/44.jpg"
/>

<Greetings lang="de">Ludwig</Greetings>
<Greetings lang="fr">François</Greetings>
<Greetings lang="es">Julia</Greetings>
<Greetings lang="en">Luis</Greetings>


<Random min={1} max={6}/>
<Random min={1} max={100}/>


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


<Ratings>0</Ratings>
<Ratings>1.49</Ratings>
<Ratings>1.5</Ratings>
<Ratings>3</Ratings>
<Ratings>4</Ratings>
<Ratings>5</Ratings>

</div>
  
  );
}

export default App;


