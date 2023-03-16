import React from 'react';
import './App.css';
import IdCard from './components/misc/IdCard';
import Greetings from './components/misc/Greetings';
import Random from './components/misc/Random';
import BoxColor from './components/misc/BoxColor';
import CreditCard from './components/misc/CreditCard';
import Rating from './components/misc/Rating/Rating';
import DriverCard from './components/misc/DriverCard/DriverCard';
import LikeButton from './components/misc/LikeButton/LikeButton';
import ClickablePicture from './components/misc/ClickablePicture/ClickablePicture';
import image1 from './assets/images/maxence.png';
import image2 from './assets/images/maxence-glasses.png';
import Dice from './components/misc/Dice/Dice';


function App() {
  return (
    <div className="App">
      <div className='app-container'>
      <IdCard 
        lastName="Doe" 
        firstName="John" 
        gender='Male'
        height={178}
        birth={(new Date("1992-07-14")).toString().slice(0, 15)}
        picture="https://randomuser.me/api/portraits/men/44.jpg" 
      />
      <IdCard
        lastName='Delores '
        firstName='Obrien'
        gender='Female'
        height={172}
        birth={(new Date("1988-05-11")).toString().slice(0, 15)}
        picture="https://randomuser.me/api/portraits/women/44.jpg"
      />
      </div>
      <div className='app-greetings'>
        <Greetings lang='fr'>Marine</Greetings>
        <Greetings lang='de'>Chloe</Greetings>
        <Greetings lang='en'>Joshua</Greetings>
        <Greetings lang='es'>Maria</Greetings>
      </div>
      <div className='app-random'>
        <Random minN={1} maxN={6}/>
        <Random minN={1} maxN={100}/>
      </div>
      <div className='app-boxcolor'>
        <BoxColor r={139} g={110} b={219}/>
        <BoxColor r={170} g={200} b={101}/>
      </div>
      <div className='app-creditcard'>
        <CreditCard
          type="Visa"
          number="0123456789018845"
          expM={3}
          expY={2021}
          bank="BNP"
          owner="Maxence Bouret"
          bgColor="#11aa99"
          color="white" 
        /> 
        <CreditCard
          type="Master Card"
          number="0123456789010995"
          expM={3}
          expY={2021}
          bank="N26"
          owner="Maxence Bouret"
          bgColor="#eeeeee"
          color="#222222"
        />
        <CreditCard
          type="Visa"
          number="0123456789016984"
          expM={12}
          expY={2019}
          bank="ING"
          owner="Joao Silva"
          bgColor="#d4af37"
          color="white" 
        /> 
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

      <div className="app-drivercard">
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
        
      </div>

      <div>
        <h1>Like Button</h1>
        <LikeButton className="likeBtn" />
      </div>

      <div>
        <h1>Clickable Picture</h1>
        <ClickablePicture
          img={image1}
          imgClicked={image2}
        />
      </div>

      <div>
        <h1>Dice</h1>
        <Dice/>
      </div>

    </div>
    
  );
}

export default App;
