import React, { Component } from 'react';
import IdCard from './components/IdCard';
import Greetings from './components/Greetings';
import BoxColor from './components/BoxColor';
import Random from './components/Random';
import Carousel from './components/Carousel';
import ClickablePicture from './components/ClickablePicture';
import CreditCard from './components/CreditCard';
import Dice from './components/Dice';
import DriverCard from './components/DriverCard';
import LikeButton from './components/LikeButton';
import Rating from './components/Rating';
import FaceBook from './components/FaceBook';

import './style.scss';
import profiles from './data/berlin.json';
import { Button } from 'react-bootstrap';

const idCard = [
  {
    lastName: 'Doe',
    firstName: 'John',
    gender: 'male',
    height: 178,
    birth: new Date('1992-07-14'),
    pic: 'https://randomuser.me/api/portraits/men/44.jpg'
  },
  {
    lastName: 'Delores ',
    firstName: 'Obrien',
    gender: 'female',
    height: 172,
    birth: new Date('1988-05-11'),
    pic: 'https://randomuser.me/api/portraits/women/44.jpg'
  }
];

const greetings = [
  {
    lang: 'de',
    text: 'Ludwig'
  },
  {
    lang: 'fr',
    text: 'François'
  }
];

const random = [
  {
    min: 1,
    max: 6
  },
  {
    min: 1,
    max: 100
  }
];

const boxColor = [
  {
    r: 255,
    g: 0,
    b: 0
  },
  {
    r: 128,
    g: 255,
    b: 0
  }
];

const creditCard = [
  {
    type: 'Visa',
    number: '0123456789018845',
    expirationMonth: 3,
    expirationYear: 2021,
    bank: 'BNP',
    owner: 'Maxence Bouret',
    bgColor: '#11aa99',
    color: 'white'
  },
  {
    type: 'Master Card',
    number: '0123456789010995',
    expirationMonth: 3,
    expirationYear: 2021,
    bank: 'N26',
    owner: 'Maxence Bouret',
    bgColor: '#eeeeee',
    color: '#222222' 
  },
  {
    type: "Visa",
    number: "0123456789016984",
    expirationMonth: 12,
    expirationYear: 2019,
    bank: "Name of the Bank",
    owner: "Firstname Lastname",
    bgColor: "#ddbb55",
    color: "white"
  }
];

const ratings = [0, 1.49, 1.5, 3, 4, 5];

const driverCard = [
  {
    name: 'Travis Kalanick',
    rating: 4.2,
    img: 'https://si.wsj.net/public/resources/images/BN-TY647_37gql_OR_20170621052140.jpg?width=620&height=428',
    car: {
      model: 'Toyota Corolla Altis',
      licensePlate: 'CO42DE'
    }
  },
  {
    name: "Dara Khosrowshahi",
    rating: 4.9,
    img: "https://ubernewsroomapi.10upcdn.com/wp-content/uploads/2017/09/Dara_ELT_Newsroom_1000px.jpg",
    car: {
      model: "Audi A3",
      licensePlate: "BE33ER"
    }
  }
];

const clickablePic = {
  img: "/img/persons/maxence.png",
  imgClicked: "/img/persons/maxence-glasses.png"
} 

const carousel = 
{
  imgs: ["https://randomuser.me/api/portraits/women/1.jpg","https://randomuser.me/api/portraits/men/1.jpg","https://randomuser.me/api/portraits/women/2.jpg", "https://randomuser.me/api/portraits/men/2.jpg"]
}



class App extends Component {
  render() {
    return (
      <div className='App'>
        <h1>IdCard</h1>
        {
          idCard.map(card => (
            <IdCard key={card.firstName} {...card}/>
          ))
        }
        <h1>Greetings</h1>
        {
          greetings.map(greeting => (
            <Greetings key={greeting.lang} {...greeting}/>
          ))
        }
        <h1>Random</h1>
        {
          random.map(rand => (
            <Random key={Math.random() * 3} {...rand}/>
          ))
        }
        <h1>Box Color</h1>
        {
          boxColor.map(color => (
            <BoxColor key={Math.random() * 3} {...color}/>
          ))
        }
        <h1>Credit Card</h1>
        {
          creditCard.map(card => (
            <CreditCard key={Math.random() * 3} {...card}/>
          ))
        }
        <h1>Rating</h1>
        {
          ratings.map(rating => (
            <Rating key={Math.random() * 3}>{rating}</Rating>
          ))
        }
        <h1>DriverCard</h1>
        {
          driverCard.map(driver => (
            <DriverCard key={Math.random() * 3} {...driver}/>
          ))    
        }
        <h1>LikeButton</h1>
        {
          <LikeButton/>
        }
        <h1>ClickablePicture</h1>
        {
          <ClickablePicture key={Math.random() * 3} {...clickablePic}/>
        }
        <h1>Dice</h1>
        {
          <Dice/>
        }
        <h1>Carousel</h1>
        {
          <Carousel key={Math.random() * 3} {...carousel}/>
        }
        <h1>FaceBook</h1>
        {
          profiles.map(profile => (
            <Button key={Math.random() * 3} variant="secondary" size="lg">
              {profile.country}
            </Button>  
          ))
        }
        {
          profiles.map(profile => (
            <FaceBook key={profile.firstName} {...profile}/>
          ))
        }
      </div>
    );
  }
}


export default App;


