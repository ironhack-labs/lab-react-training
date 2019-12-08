import React, { Component } from 'react';
import IdCard from './components/IdCard';
import Greetings from './components/Greetings';
import Random from './components/Random';
import BoxColor from './components/BoxColor';
import CreditCard  from './components/CreditCard';
import Rating from './components/Rating';
import DriverCard from './components/DriverCard';
import LikeButton from './components/LikeButton';
import ClickablePicture from './components/ClickablePicture';
import CarouselComponent from './components/CarouselComponent';
import Dice from './components/Dice';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>IdCard</h1>
        <IdCard
          lastName='Topo'
          firstName = 'Juan'
          gender= 'male'
          height={150}
          birth='1961-08-02'
          picture="http://i.imgur.com/h50Rq.jpg"/><br></br>
        <IdCard
          lastName='Gorgory'
          firstName = 'Rafa'
          gender= 'male'
          height={110}
          birth='1982-05-09'
          picture="https://ugc.kn3.net/i/760x/http://24.media.tumblr.com/tumblr_m15qofG8641r9kfpno1_500.jpg"/><br></br>

        <h1>Greetings</h1>
        <Greetings lang="de">Ludwig Van Bethoven</Greetings><br></br>
        <Greetings lang="fr">Amélie</Greetings><br></br>

        <h1>Random</h1>
        <Random min={1} max={6} /><br></br>
        <Random min={1} max={100} />
        
        <h1>BoxColor</h1>
        <BoxColor r={255} g={0} b={0} /><br></br>
        <BoxColor r={128} g={255} b={0} /><br></br>
        
        <h1>CreditCard</h1>
        <div className="cardsContainer"> 
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

        <h1>Rating</h1>
          <Rating>0</Rating>
          <Rating>1.49</Rating>
          <Rating>1.5</Rating>
          <Rating>3</Rating>
          <Rating>4</Rating>
          <Rating>5</Rating>

        <h1>DriverCard</h1>
        <DriverCard 
          name="Travis Kalanick"
          rating={4.2}
          img="https://si.wsj.net/public/resources/images/BN-TY647_37gql_OR_20170621052140.jpg?width=620&height=428"
          model= "Toyota Corolla Altis"
          licensePlate= "CO42DE" /><br></br>
        <DriverCard 
          name="Dara Khosrowshahi"
          rating={4.9}
          img="https://ubernewsroomapi.10upcdn.com/wp-content/uploads/2017/09/Dara_ELT_Newsroom_1000px.jpg"
          model= "Audi A3"
          licensePlate= "BE33ER"/>

        <h1>LikeButton</h1>
        <LikeButton /> <LikeButton />
        
        <h1>ClickablePicture</h1>
        <ClickablePicture img="/img/persons/maxence.png" imgClicked="/img/persons/maxence-glasses.png" />
        <h1>Carousel</h1>
        <CarouselComponent imgs={["https://randomuser.me/api/portraits/women/1.jpg", "https://randomuser.me/api/portraits/men/1.jpg","https://randomuser.me/api/portraits/women/2.jpg", "https://randomuser.me/api/portraits/men/2.jpg"]} />

        <h1>Dice</h1>
        <Dice />
            
      </div>
    );
  }
}

export default App;
