import React, { Component } from 'react';
import './App.css';
import Card from './components/card/Card';
import Greeting from './components/greeting/Greeting';
import Random from './components/random/Random';
import BoxColor from './components/boxcolor/BoxColor';
import CreditCard from './components/creditcard/CreditCard';
import Rating from './components/rating/Rating';
import DriverCard from './components/drivercard/DriverCard';
import ClickablePicture from './components/clickablepicture/ClickablePicture';
import Dice from './components/dice/Dice';
import Carousel from './components/carousel/Carousel';
import NumbersTable from './components/numberstable/NumbersTable';
import LikeButton from './components/likebutton/LikeButton';
import FaceBook from './components/facebook/FaceBook';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h2>IdCard</h2>
        <Card
          lastName='Doe'
          firstName='John'
          gender='male'
          height={178}
          birth={new Date("1992-07-14")}
          picture="https://randomuser.me/api/portraits/men/44.jpg"
        />
        <Card
          lastName='Delores '
          firstName='Obrien'
          gender='female'
          height={172}
          birth={new Date("1988-05-11")}
          picture="https://randomuser.me/api/portraits/women/44.jpg"
        />
        <h2>Greetings</h2>
        <Greeting lang="de">Ludwig</Greeting>
        <Greeting lang="fr">François</Greeting>
        <h2>Random</h2>
        <Random min={1} max={6}/>
        <Random min={1} max={100}/>
        <h2>BoxColor</h2>
        <BoxColor r={256} g={0} b={0} fontColor="white"/>
        <BoxColor r={128} g={255} b={0} fontColor="black"/>
        <h2>CreditCard</h2>
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
        <h2>CreditCard</h2>
        <Rating>0</Rating>
        <Rating>1.49</Rating>
        <Rating>1.5</Rating>
        <Rating>3</Rating>
        <Rating>4</Rating>
        <Rating>5</Rating>
        <h2>DriverCard</h2>
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
        <h2>ClickablePicture</h2>
        <ClickablePicture initialImage="/img/persons/maxence.png" clickedImage="/img/persons/maxence-glasses.png" />
        <h2>Dice</h2>
        <Dice />
        <h2>Carousel</h2>
        <Carousel
          imgs={[
            'https://randomuser.me/api/portraits/women/1.jpg',
            'https://randomuser.me/api/portraits/men/1.jpg',
            'https://randomuser.me/api/portraits/women/2.jpg',
            'https://randomuser.me/api/portraits/men/2.jpg'
          ]}
        />
        <h2>NumbersTable</h2>
        <NumbersTable limit={12} />
        <h2>Like Button</h2>
        <LikeButton />
        <h2>FaceBook</h2>
        <FaceBook />
      </div>
    );
  }
}

export default App;
