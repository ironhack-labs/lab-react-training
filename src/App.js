import React from 'react';
import './App.css';
import IdCard from "./IdCard";
import Greetings from "./Greetings";
import Random from "./Random";
import BoxColor from "./BoxColor";
import CreditCard from "./CreditCard";
import LikeButton from "./LikeButtom";
import ClickablePicture from "./ClickablePicture"
import Carousel from "./Carousel"
import FaceBook from "./FaceBook"

  
 

function App() {
  return (
    <div className="App">
    <div className="cards">
      <h1>Iteracion 1</h1>

         <IdCard
          lastName= "Doe"
          firstName="John"
          gender="male"
          height={178}
          date="1992-07-14"
          picture="https://randomuser.me/api/portraits/men/44.jpg" />

         <IdCard
          lastName="Delores"
          firstName="Obrien"
          gender="female"
          height={172}
          date="1988-05-11"
          picture="https://randomuser.me/api/portraits/women/44.jpg"/>
   </div>

    <h1>Iteracion 2</h1>
       <div className="greetings">
          <Greetings lang="de">Ludwig</Greetings>
          <Greetings lang="fr">François</Greetings>
      </div>

    <h1>Iteracion 3</h1>
      <div className="random">
          <Random min={1} max={6}/>
          <Random min={1} max={100}/>
      </div>

      
    <h1>Iteracion 4</h1>
      <div className="boxColor">
        <BoxColor r={255} g={0} b={0}/>
        <BoxColor r={128} g={255} b={0} />
      </div>

      <h1>Iteracion 5</h1>
      <div className="creditcard-container"> 
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


      <h1>Iteracion 8</h1>
      <div className= "likebutton">
      <LikeButton /> <LikeButton />
      </div>

      <h1>Iteracion 9</h1>
      <div className= "clickable">
      <ClickablePicture initialImage="/img/persons/maxence.png" clickedImage="/img/persons/maxence-glasses.png" />
      </div>

      <h1>Iteracion 11</h1>
      <div className="carrosul">
      <Carousel
          imgs={[
            'https://randomuser.me/api/portraits/women/1.jpg',
            'https://randomuser.me/api/portraits/men/1.jpg',
            'https://randomuser.me/api/portraits/women/2.jpg',
            'https://randomuser.me/api/portraits/men/2.jpg'
          ]}/>
      </div>
    
    <h1> Iteracion 13 y 14</h1>
    <div className= "facebook">
    <FaceBook/>
    </div>
      
      </div>





      
      )
}


  export default App