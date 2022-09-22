
import React from 'react';
import './App.css';
import IdCard from './components/IdCard/IdCard';
import Greetings from './components/Greetings/Greetings';
import Random from './components/Random/Random';
import Boxcolor from './components/Boxcolor/Boxcolor';
import Creditcard from './components/Creditcard/Creditcard';
import Rating from './components/Rating/Rating'
import DriverCard from './components/DriverCard/DriverCard'
import LikeButton from './components/LikeButton/LikeButton';
import ClickPicture from './components/ClickPicture/ClickPicture';

import image1 from './assets/images/maxence.png';
import image2 from './assets/images/maxence-glasses.png';

import Dice from './components/Dice/Dice'


function App() {
  return (

    // IT_1

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

      {/* IT_2 */}
      <div>
        <Greetings language="es"> Marlon </Greetings>
        <Greetings language="ro"> Vlad </Greetings>
        <Greetings language="en"> Mike </Greetings>
      </div>

      {/* IT_3 */}

        <Random min="10" max="50" > </Random>

      {/* IT_4 */}

        <Boxcolor r={255} g={200} b={100}> </Boxcolor>
        <Boxcolor r={150} g={0} b={200}> </Boxcolor>
        <Boxcolor r={15} g={100} b={250}> </Boxcolor>


      {/* IT_5 */}

        <Creditcard
          type="Master Card"
          number="0085803938621842"
          expirationMonth={9}
          expirationYear={2026}
          bank="BBVA"
          owner="Pepe Linguini"
          bgColor="#ffc600"
          color="white"
        > </Creditcard>


    {/* IT_6 */}

        <Rating rating="1.7">

        </Rating>


    {/* IT_7 */}

      <DriverCard  
        name="Travis Kalanick"
        rating={3.2}
        img="https://si.wsj.net/public/resources/images/BN-TY647_37gql_OR_20170621052140.jpg?width=620&height=428"
        car={{
        model: "Audi A3",
        licensePlate: "BE33ER"
        }}>

      </DriverCard>


        {/* IT_8 */}

        <LikeButton></LikeButton>
        <LikeButton></LikeButton>


        {/* IT_9 */}
                
        <div className='app-pic'>
          <ClickPicture 
            img={image1}
            imgClicked={image2}
            />
         </div>

         {/* IT_10 */}

         <div>
            <Dice></Dice>
         </div>

    </div>

          

  )}

  export default App
