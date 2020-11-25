import React from 'react';
import logo from './logo.svg';
import './App.css';
import IdCard from './components/IdCard.js'
import Greetings from './components/Greetings.js'
import Random from './components/Random.js'
import DriverCard from './components/DriverCard.js'
import ClickablePicture from './components/ClickablePicture.js'
import LikeButton from './components/LikeButton.js'

import Rating from './components/Rating.js'
// import BoxColor from './components/BoxColor.js'

function App() {
  return (
    <div className="App" style={{margin: "5px"}}>

      <div>
        <h1 style={{textAlign: "left"}}>IdCard</h1>
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

      <h1 style={{textAlign: "left"}}>Greetings</h1>
      <div>
        <Greetings lang="de">Ludwig</Greetings>
        <Greetings lang="fr">Francois</Greetings>
      </div>
      <h1 style={{textAlign: "left"}}>Random</h1>
      <div style={{textAlign:"left"}}>
        <Random min={1} max={6}/>
        <Random min={1} max={100}/>
      </div>

      {/* <div>
        <BoxColor r={255} g={0} b={0} hex='ff0000' color='white'/>
        <BoxColor r={128} g={255} b={0} hex='80ff00' color='black'/>
      </div> */}

      {/* <div>
      <CreditCard
        type={true}
        number="0123456789018845"
        expirationMonth={3}
        expirationYear={2021}
        bank="BNP"
        owner="Maxence Bouret"
        bgColor="#11aa99"
        color="white" />
      <CreditCard
        type={false}
        number="0123456789010995"
        expirationMonth={3}
        expirationYear={2021}
        bank="N26"
        owner="Maxence Bouret"
        bgColor="#eeeeee"
        color="#222222" />
      <CreditCard
        type={true}
        number="0123456789016984"
        expirationMonth={12}
        expirationYear={2019}
        bank="Name of the Bank"
        owner="Firstname Lastname"
        bgColor="#ddbb55"
        color="white" />
      </div> */}

      <h1 style={{textAlign: "left"}}>Rating</h1>
      <div>
      <Rating rating={0}/>
      <Rating rating={1.49}/>
      <Rating rating={1.5}/>
      <Rating rating={3}/>
      <Rating rating={4}/>
      <Rating rating={5}/>
      </div>

      <h1 style={{textAlign: "left"}}>DriverCard</h1>
      <div>
      <DriverCard
        name="Travis Kalanick"
        // rating={4.2}
        img="https://si.wsj.net/public/resources/images/BN-TY647_37gql_OR_20170621052140.jpg?width=620&height=428"
        car={{
          model: "Toyota Corolla Altis",
          licensePlate: "CO42DE"
        }} />
      <DriverCard
        name="Dara Khosrowshahi"
        // rating={4.9}
        img="https://ubernewsroomapi.10upcdn.com/wp-content/uploads/2017/09/Dara_ELT_Newsroom_1000px.jpg"
        car={{
          model: "Audi A3",
          licensePlate: "BE33ER"
        }} />
      </div>

      <h1 style={{textAlign: "left"}}>LikeButton</h1>
      <div style={{display:"flex"}}>
      <LikeButton/>
      <LikeButton/>
      </div>

      <h1 style={{textAlign: "left"}}>ClickablePicture</h1>
      <ClickablePicture/>
    </div>
  );
}

export default App;
