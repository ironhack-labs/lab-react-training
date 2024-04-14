/* eslint-disable no-unused-vars */
import React from "react";
import "./App.css";
import IdCard from "./components/idCard/IdCard";
import Greetings from "./components/Greetings/Greetings";
import Random from "./components/Random/Random";
import BoxColor from "./components/BoxColor/BoxColor";
import CreditCard from "./components/CreditCard/CreditCard";
import Rating from "./components/Rating/Rating";
import DriverCard from "./components/DriverCard/DriverCard";
import LikeButton from "./components/LikeButton/LikeButton";
import ClickablePicture from "./components/ClickablePicture/ClickablePicture";
import Dice from "./components/Dice/Dice";
import Carousel from "./components/Carousel/Carousel";
import NumbersTable from "./components/NumbersTable/NumbersTable";
import FaceBook from "./components/FaceBook/FaceBook";
import { useState } from "react";


function App() {
  const [boxes, setBoxes] = useState(0) 
  
  


  return (
    <div className="App">
      <h1> LAB | React Training</h1>

     
     <FaceBook/>



      
      <NumbersTable limit={20}/>
      

      <Carousel
  images={[
    "https://randomuser.me/api/portraits/women/1.jpg",
    "https://randomuser.me/api/portraits/men/1.jpg",
    "https://randomuser.me/api/portraits/women/2.jpg",
    "https://randomuser.me/api/portraits/men/2.jpg"
  ]}
/>
      <div><Dice></Dice></div>

      <div><ClickablePicture
  img="src\assets\images\glasses1.png"
  imgClicked="https://si.wsj.net/public/resources/images/BN-TY647_37gql_OR_20170621052140.jpg?width=620&height=428" 
/>
</div>

      <hr />

      <LikeButton />


      <DriverCard
  name="Travis Kalanick"
  rating={4.2}
  img="https://si.wsj.net/public/resources/images/BN-TY647_37gql_OR_20170621052140.jpg?width=620&height=428"
  car={{
    model: "Toyota Corolla Altis",
    licensePlate: "CO42DE"
  }}
/>

<DriverCard
  name="Dara Khosrowshahi"
  rating={4.9}
  img="https://ubernewsroomapi.10upcdn.com/wp-content/uploads/2017/09/Dara_ELT_Newsroom_1000px.jpg"
  car={{
    model: "Audi A3",
    licensePlate: "BE33ER"
  }}
/>



<hr />
<Rating>0</Rating>
<Rating>1.49</Rating>
<Rating>1.5</Rating>
<Rating>3</Rating>
<Rating>4</Rating>
<Rating>5</Rating>










      <hr/>
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

      <hr />
      <BoxColor r = {220} g= {320} b= {100}/>
      <hr />
      <Random min={5} max={10}></Random>
      <hr/>
      <Greetings lang="es">español</Greetings>
      <Greetings lang="de">Ludwig</Greetings>
      <Greetings lang="fr">François</Greetings>




      

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

    </div>
  );

}

export default App;
