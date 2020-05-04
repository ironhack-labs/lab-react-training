import React, { Component } from 'react';

import IdCard from "./components/Idcard.js"
import Greetings from "./components/Greetings.js"
import Random from "./components/Random.js"
import BoxColor from "./components/BoxColor.js"
import CreditCard from "./components/CreditCard.js"
import CreditCard2 from "./components/CreditCard2.js"
import Rating from "./components/Rating.js"
import DriversCard from "./components/DriverCard"
import LikeButton from "./components/LikeButton.js"
import ClickablePicture from "./components/ClickablePicture.js"

  

class App extends Component {
  render() {
    return (
    <div className="App">


    <h1>1. IdCard</h1> 
    <IdCard 
          lastName='Doe'
          firstName='John'
          gender='male'
          height={178}
          birth={new Date("1992-07-14")}
          picture="https://randomuser.me/api/portraits/men/44.jpg"
    />
    <br/>

    <IdCard 
          lastName='Dolores'
          firstName='Obrien'
          gender='female'
          height={172}
          birth={new Date("1993-05-10")}
          picture="https://randomuser.me/api/portraits/women/44.jpg"
    />
     
    <h1>2. Greetings</h1>
    <Greetings lang="de">Ludwig</Greetings>   <br/>
    <Greetings lang="fr">François</Greetings>
      
    <h1>3. Random</h1>
    <Random min="1" max="6" />      <br/>
    <Random min="1" max="100" />

    <h1>4. Box Color</h1>
    <BoxColor r="255" g="0" b="0" />     <br/>
    <BoxColor r="128" g="255" b="0" />

    <h1>5. Credit Card</h1>
    <CreditCard 
      type="Visa"
      number= "**** **** **** 8845"
      expirationMonth= "03"
      expirationYear= "21"
      bank = "BNP"
      owner = "Maxence Bouret"
      bgColor = "#11aa99"
      color = "white"
    />     <br/>

    <CreditCard2 
      type="Mastercard"
      number= "**** **** **** 0995"
      expirationMonth= "03"
      expirationYear= "21"
      bank = "N26"
      owner = "Maxence Bouret"
      bgColor = "azure"
      color = "black"
    />        <br/>

    <CreditCard 
      type="Visa"
      number= "**** **** **** 6984"
      expirationMonth= "12"
      expirationYear= "19"
      bank = "Name of the Bank"
      owner = "FirstName LastName"
      bgColor = "burlywood"
      color = "white"
    />                   

    <h1>6. Rating</h1>
    {<Rating>0    </Rating>}
    {<Rating>1.49 </Rating>}
    {<Rating>2    </Rating>}
    {<Rating>3    </Rating>}
    {<Rating>3.8  </Rating>}
    {<Rating>5    </Rating>}

    <h1>7. DriverCard</h1>
    <DriversCard 
      name= "Travis Kalanick"
      rate= "4"
      car= "Toyota Corolla Altis - CO42DE"
  
    />    <br/>

    <DriversCard 
      name= "Maxence Laurence"
      rate= "5"
      car= "Audi A3 - BE33ER"
    />



    <h1>8. Like Buttons</h1>
    <LikeButton />  
    <LikeButton />

    <h1>9. Clickable Picture</h1>  
      <ClickablePicture />

    <h1>10. Dice</h1>  


















      </div>);}
}

export default App;
