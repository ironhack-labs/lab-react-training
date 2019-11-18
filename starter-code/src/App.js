import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import IdCard from './components/idcards';
import Greetings from './components/greetings';
import Random from './components/random';
import BoxColor from './components/boxcolor';
import CreditCard from './components/creditcard';
import mastercard from './images/master-card.svg';
import visacard from './images/visa.png';
import Rating from './components/rating';
import DriverCard from './components/drivercard';
import LikeButton from './components/likebutton';
import ClickablePicture from './components/clickablepicture';
import Dice from './components/dice';
import Carousel from './components/carousel';
import NumbersTable from './components/numbertable';
import FaceBook from './components/facebook';
import SignupPage from './components/signuppage';
import ColorPicker from './components/colorpicker';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>IdCard</h1>
        {/* TODO: Use the IdCard component */}
        <IdCard lastName='Doe' firstName='John' gender='male' height={178} birth={new Date("1992-07-14")} picture="https://randomuser.me/api/portraits/men/44.jpg" />
        <IdCard lastName='Delores' firstName='Obrien' gender='female' height={172} birth={new Date("1988-05-11")} picture="https://randomuser.me/api/portraits/women/44.jpg" />

        <h1>Greetings</h1>
        {/* TODO: Use the Greetings component */}
        <Greetings lang="de">Ludwig</Greetings>
        <Greetings lang="fr">François</Greetings>

        <h1>Random</h1>
        <Random min={1} max={6}/>
        <Random min={1} max={100}/>

        <h1>BoxColor</h1>
        <BoxColor r={255} g={0} b={0} hexcolor='#ff0000' btnStyle='btn1Style' />
        <BoxColor r={128} g={255} b={0} hexcolor='#80ff00' btnStyle='btn2Style'  />

        <h1>Credit Card</h1>
        <div className="flexbox">
        <CreditCard 
          type="Visa"
          number="0123456789018845"
          expirationMonth={3}
          expirationYear={2021}
          bank="BNP"
          owner="Maxence Bouret"
          bgColor="#11aa99"
          color="white"
          cardimage = {visacard} />
        <CreditCard 
          type="Master Card"
          number="0123456789010995"
          expirationMonth={3}
          expirationYear={2021}
          bank="N26"
          owner="Maxence Bouret"
          bgColor="#eeeeee"
          color="#222222"
          cardimage = {mastercard}  />
        <CreditCard 
          type="Visa"
          number="0123456789016984"
          expirationMonth={12}
          expirationYear={2019}
          bank="Name of the Bank"
          owner="Firstname Lastname"
          bgColor="#ddbb55"
          color="white"
          cardimage = {visacard}  />
        </div>
        <h1>Rating</h1>
        <Rating>0</Rating>
        <Rating>1.49</Rating>
        <Rating>1.5</Rating>
        <Rating>3</Rating>
        <Rating>4</Rating>
        <Rating>5</Rating>
        <br />
        <h1>DriverCard</h1>
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
          <h1>LikeButton</h1>
          <LikeButton /> <LikeButton />
          <br />
          <br />
          <h1>ClickablePicture</h1>
          <ClickablePicture
            img="/img/persons/maxence.png"
            imgClicked="/img/persons/maxence-glasses.png" />
            <br />
          <h1>Dice</h1>
          <Dice />
          <br />
          <h1>Carousel</h1>
          <Carousel
            imgs={["https://randomuser.me/api/portraits/women/1.jpg", "https://randomuser.me/api/portraits/men/1.jpg","https://randomuser.me/api/portraits/women/2.jpg", "https://randomuser.me/api/portraits/men/2.jpg"]} />
            <br />
          <h1>NumbersTable</h1>
          <NumbersTable limit={12} />
          <br />
          <h1>FaceBook</h1>
          <FaceBook />
          <br />
          <h1>SignupPage</h1>
          <SignupPage />
          <br />
          <h1>RGBColorPicker</h1>
          <ColorPicker />
      </div>
    );
  }
}

export default App;
