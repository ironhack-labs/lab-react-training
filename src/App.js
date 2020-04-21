import React, { Component } from 'react';
import './App.css'
import IdCard from './Components/IdCard/IdCard.js'
import Greetings from './Components/Greetings/Greetings.js'
import Random from './Components/Random/Random.js'
import BoxColor from './Components/BoxColor/BoxColor.js'
import CreditCard from './Components/CreditCard/CreditCard.js'
import Rating from './Components/Rating/Rating.js'
import DriverCard from './Components/DriverCard/DriverCard.js'
import LikeButton from './Components/LikeButton/LikeButton.js'
import ClickablePicture from './Components/ClickablePicture/ClickablePicture.js'
import Dice from './Components/Dice/Dice.js' 
import Carousel from './Components/Carousel/Carousel.js'
import NumbersTable from './Components/NumbersTable/NumbersTable.js'
import Facebook from './Components/Facebook/Facebook';
import Signup from './Components/Signup/Signup';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>IdCard</h1>
        <IdCard firstname="Thibault" lastname="Delfaud" gender="Male" height="190" birth="15-04-1988" picture="https://media-exp1.licdn.com/dms/image/C4D03AQEuLNpl9eTpPA/profile-displayphoto-shrink_200_200/0?e=1591833600&v=beta&t=3GJnpkGj7prpEGGbz-_aVx_7mtgzq8gsgAcLbFhQOvs"/>
        <IdCard firstname="Flora" lastname="Delfaud" gender="Female" height="175" birth="30-07-1992"picture="https://media-exp1.licdn.com/dms/image/C5603AQFs-rPCVcptIQ/profile-displayphoto-shrink_200_200/0?e=1591833600&v=beta&t=a1rgaVRfzBqTAwXP2xFLVA1BgVaVDAbugpHPWBnqeLI"/>
        <h1>Greetings</h1>
        <Greetings lang="it" children="Giacomo" />
        <Greetings lang="de" children="Hanz"/>
        <Greetings lang="fr" children="Jacques"/>
        <h1>Random</h1>
        <Random min={50} max={100} />
        <Random min={1} max={10} />
        <h1>BoxColor</h1>
        <BoxColor r="255" g="0" b="0" />
        <BoxColor r="128" g="255" b="0" />
        <h1>CreditCard</h1>
        <CreditCard type="visa" number="0123456789018845" expirationMonth="02" expirationYear="2022" bank="N26" owner="Thibault Delfaud" bgColor="#11aa99" color="white"/>
        <CreditCard type="master" number="0123456789010995" expirationMonth="03" expirationYear="2023" bank="BNP" owner="Thibault Delfaud" bgColor="#eeeeee" color="#222222"/>
        <CreditCard type="visa" number="0123456789016984" expirationMonth="04" expirationYear="2024" bank="Name of the bank" owner="Thibault Delfaud" bgColor="#ddbb55" color="white"/>
       <h1>Rating</h1>
       <Rating children = {0}  />
       <Rating children = {0.5}/>
       <Rating children = {1.6}/>
       <Rating children = {2.7}/>
       <Rating children = {3.8}/>
       <Rating children = {4.7}/>
       <h1>Driver Card</h1>
       <DriverCard name ="Thibault Delfaud" rating = {4.8} car ={{model: "Aston Martin", licensePlate:"696969"}} img ="https://media-exp1.licdn.com/dms/image/C4D03AQEuLNpl9eTpPA/profile-displayphoto-shrink_200_200/0?e=1591833600&v=beta&t=3GJnpkGj7prpEGGbz-_aVx_7mtgzq8gsgAcLbFhQOvs" />
       <DriverCard name ="Flora Delfaud" rating = {1} car ={{model: "Lada turbo", licensePlate:"420420"}} img ="https://media-exp1.licdn.com/dms/image/C5603AQFs-rPCVcptIQ/profile-displayphoto-shrink_200_200/0?e=1591833600&v=beta&t=a1rgaVRfzBqTAwXP2xFLVA1BgVaVDAbugpHPWBnqeLI" />
       <h1>Like Button</h1>
       <LikeButton />
       <LikeButton />
       <h1>Clickable Picture</h1>
       <ClickablePicture imgClicked="/img/glasses.png" img="https://media-exp1.licdn.com/dms/image/C4D03AQEuLNpl9eTpPA/profile-displayphoto-shrink_200_200/0?e=1591833600&v=beta&t=3GJnpkGj7prpEGGbz-_aVx_7mtgzq8gsgAcLbFhQOvs"/>
       <h1>Dice</h1>
       <Dice />
       <h1>Carousel</h1>
       <Carousel imgs={[
         'https://randomuser.me/api/portraits/women/1.jpg',
         'https://randomuser.me/api/portraits/men/1.jpg',
         'https://randomuser.me/api/portraits/women/2.jpg',
         'https://randomuser.me/api/portraits/men/2.jpg'
        ]} />
       <h1>Numbers Table</h1>
       <NumbersTable limit={12}/>
       <h1>Facebook</h1>
       <Facebook />
       <h1>Signup</h1>
       <Signup />


      </div>
    );
  }
}

export default App;
