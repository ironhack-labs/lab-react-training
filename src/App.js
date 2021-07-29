import React from 'react';
import IdCard from './components/IdCard';
import Greetings from './components/Greetings';
import Random from './components/Random';
import BoxColor from './components/BoxColor';
import CreditCard from './components/CreditCard';
import Rating from './components/Rating';
import NumbersTable from './components/NumbersTable'
import LikeButton from './components/LikeButton';
import ClickablePicture from './components/ClickablePicture'
import Dice from './components/Dice';
import './App.css';



function App() {
  return (
    <div className="App">
      <div>
      <h1>IdCard</h1>
      
      
     <IdCard
  lastName='Doe'
  firstName='John'
  gender='male'
  height={178}
  birth={`${new Date("1992-07-14")}`}
  picture="https://randomuser.me/api/portraits/men/44.jpg"
/>

<IdCard
  lastName='Delores '
  firstName='Obrien'
  gender='female'
  height={172}
  birth={`${new Date("1988-05-11")}`}
  picture="https://randomuser.me/api/portraits/women/44.jpg"
/>
</div>
<div>
<h1>Greetings</h1>
<Greetings lang="de">Ludwig</Greetings>
<Greetings lang="en">Charles</Greetings>
<Greetings lang="fr">François</Greetings>

</div>
<div>
<h1>Random</h1>
<Random min={1} max={6}/>
<Random min={1} max={100}/>

</div>

<div>
<h1>BoxColor</h1>
<BoxColor r={255} g={0} b={0} />
<BoxColor r={128} g={255} b={0} />

</div>
<div>
  <h1>Credit Card</h1>
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
  <h1>Rating</h1>
  <Rating>0</Rating>
<Rating>1.49</Rating>
<Rating>1.5</Rating>
<Rating>3</Rating>
<Rating>4</Rating>
<Rating>5</Rating>
</div>


<div>
  <h1>Numbers Table</h1>
<NumbersTable limit={12} />

</div>

<div>
  <h1>Like Button</h1>
        <LikeButton />
        <LikeButton />

</div>
    
      <div>
    <h1 className="pic">Clickable Picture</h1>
       <ClickablePicture
  img='/img/persons/maxence.png'
  imgClicked='/img/persons/maxence-glasses.png'
/>


</div>
     <div className="dice">
     <h1>Dice</h1>
       <Dice/>
     </div>

    </div>

    
  );
}

export default App;
