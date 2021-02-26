import React, { Children } from 'react';
import './App.css';
import IdCard from './components/IdCard';
import Greetings from './components/Greetings'
import Random from './components/Random'
import BoxColor from './components/BoxColor';
import CreditCard from './components/CreditCard';
import Rating from './components/Rating';
import DriverCard from './components/DriverCard';
import LikeButton from './components/LikeButton';
import ClickablePicture from './components/ClickablePicture';
import Dice from './components/Dice';
import Carousel from './components/Carousel';
import Facebook from './components/Facebook'
import SignUp from './components/SignUp'
import RGBColorPicker from './components/RGBColorPicker'
import SingleColorPicker from './components/SingleColorPicker'


function App() {
  return (
    <div>
    <div>
        <IdCard
             lastName='Doe'
             name='John'
             gender='male'
             height={178}
             birth= {new Date("1992-07-14")}
             image="https://randomuser.me/api/portraits/men/44.jpg"
        />
    </div>
    
<div>
        <IdCard
            lastName='Delores '
  name='Obrien'
  gender='female'
  height={172}
  birth={new Date("1988-05-11")}
  image="https://randomuser.me/api/portraits/women/44.jpg"
/>
    </div>

<div>
<Greetings idioma="de">Ludwig</Greetings>
<Greetings idioma="fr">François</Greetings>
</div>

<div>
  <Random min={1} max={6}/>
  <Random min={1} max={100}/>
</div>

<BoxColor r={255} g={0} b={0} />
<BoxColor r={128} g={255} b={0} />

<div>
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
  number="123456789010995"
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
  owner="Juan "
  bgColor="#ddbb55"
  color="white" />
</div>
<div>
   
<Rating>0</Rating>
<Rating>1.49</Rating>
<Rating>1.5</Rating>
<Rating>3</Rating>
<Rating>4</Rating>
<Rating>5</Rating> 

</div>

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

<div>
  <LikeButton/>
</div>

<div>
<ClickablePicture
  img='/img/persons/maxence.png'
  imgClicked='/img/persons/maxence-glasses.png'
/>
</div>

<div>
  <Dice/>
</div>
<div>
  <Carousel imgs={[
    'https://randomuser.me/api/portraits/women/1.jpg',
    'https://randomuser.me/api/portraits/men/1.jpg',
    'https://randomuser.me/api/portraits/women/2.jpg',
    'https://randomuser.me/api/portraits/men/2.jpg'
  ]}
  />
</div>
<Facebook />
<SignUp />

<div>
  <RGBColorPicker/ > 
</div>
</div>

  )
}

export default App;
