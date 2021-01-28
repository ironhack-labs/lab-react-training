import React from 'react';
import {IdCard} from './component/idcard/IdCard'
import {Greetings} from './component/greeting/greeting'
import {RandNumber} from './component/randomnumber/randNumber'
import {BoxColour} from './component/boxcolour/BoxColour'
import {CreditCard} from './component/creditcard/CreditCard'
import {Rating} from './component/rating/Rating'
import {DriverCard} from './component/drivercard/DriverCard'
import {LikeButton} from './component/likebutton/LikeButton'
import {ClickablePicture} from './component/clickablepicture/ClickablePicture'
import {Dice} from './component/dice/Dice'
import {Carousel} from './component/carousel/Carousel'
import {NumbersTable} from './component/numberstable/NumbersTable'
import {RGBColourPicker} from './component/rgbcolourpicker/RGBColourPicker'
import { FaceBook } from './component/facebook/FaceBook';

import './App.css';


function App() {
  return (
    <div className="App">
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
      <hr/>
      <Greetings lang="de">Ludwig</Greetings>
      <Greetings lang="fr">François</Greetings>
      <hr/>
      <RandNumber min={1} max={6}/>
      <RandNumber min={1} max={100}/>
      <hr/>
      <BoxColour r={255} g={0} b={0} />
      <BoxColour r={128} g={255} b={0} />
      <hr/>
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
      <hr/>
      <Rating>0</Rating>
      <Rating>1.49</Rating>
      <Rating>1.5</Rating>
      <Rating>3</Rating>
      <Rating>4</Rating>
      <Rating>5</Rating>
      <hr/>
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
      <hr/>
      <div className="field is-grouped">
        <LikeButton /><LikeButton />
      </div>
      <hr />
      <ClickablePicture
        img='/img/persons/maxence.png'
        imgClicked='/img/persons/maxence-glasses.png'
      />
      <hr />
      <Dice />
      <hr />
      <Carousel
        imgs={[
          'https://randomuser.me/api/portraits/women/1.jpg',
          'https://randomuser.me/api/portraits/men/1.jpg',
          'https://randomuser.me/api/portraits/women/2.jpg',
          'https://randomuser.me/api/portraits/men/2.jpg'
        ]}
      />
      <hr />
      <NumbersTable limit={12} />
      <hr />
      <FaceBook />
      <hr />
      <RGBColourPicker />
  </div>
  );
}

export default App;
