import React, { Component } from 'react';

import IdCards from './components/idCards';
import Greetings from './components/Greetings';

import Random from './components/Random';
import BoxColor from './components/BoxColor';

import CreditCard from './components/CreditCard';
import LikeButton from './components/LikeButton';
import ClickablePicture from './components/Clickimg';
import Dice from './components/Dice';
import Carousel from './components/Carousel';
import NumbersTable from './components/NumbersTable';
import FaceBook from './components/FaceBook';
import FaceBookAdvanced from './components/FaceBookAdvanced';

import Rating from './components/Rating';
import DriverCard from './components/DriverCard';




const idcard = [
  {
    id:'try',
    lastName:'Doe',
    firstName:'John ',
    gender:'male',
    height:178,
    birth: new Date(1992,6,14),
    picture:'https://randomuser.me/api/portraits/men/44.jpg'
  },
  {
    id:'cfh',
    lastName:'Delores ',
    firstName:'Obrien',
    gender:'female',
    height:172,
    birth: new Date(1993,4,11),
    picture:'https://randomuser.me/api/portraits/women/44.jpg'
  }
];


class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>IdCard</h1>
        {/* TODO: Use the IdCard component */}
        {idcard.map(people => (
          <IdCards 
            key={people.id}
            lastName={people.lastName}
            firstName={people.firstName}
            gender={people.gender}
            height={people.height}
            birth={people.birth}
            picture={people.picture}>

            </IdCards>
        ))}

        <h1>Greetings</h1>
        {/* TODO: Use the Greetings component */}

        <Greetings lang="de">Ludwig</Greetings><br></br>
        <Greetings lang="fr">François</Greetings><br></br>

        <h1>Random</h1>
        <Random min={1} max={6}/>
        <Random min={1} max={100}/>

        <h1>BoxColor</h1>
        <BoxColor r={255} g={0} b={0} />
        <BoxColor r={128} g={255} b={0} />

        <h1>Credit Card</h1>
        <CreditCard 
          type="Visa"
          number="0123456789018845"
          expirationMonth={3}
          expirationYear={2021}
          bank="BNP"
          owner="Maxence Bouret"
          bgColor="#11aa99"
          color="white" />


        <h1>LikeButton</h1>

        <LikeButton /> <LikeButton />

        <h1>ClickablePicture</h1>

        <ClickablePicture
          img="/img/persons/maxence.png"
          imgClicked="/img/persons/maxence-glasses.png" />

        <h1>Dice</h1>
        
        <Dice />

        <h1>Carousel</h1>
        <Carousel
          imgs={["https://randomuser.me/api/portraits/women/1.jpg", 
          "https://randomuser.me/api/portraits/men/1.jpg",
          "https://randomuser.me/api/portraits/women/2.jpg", 
          "https://randomuser.me/api/portraits/men/2.jpg"]} />

        
        <h1>NumbersTable</h1>
        <NumbersTable limit={12} />
        <NumbersTable limit={9} />

        <h1> Facebook Simple</h1>
        <FaceBook />

        <h1> Facebook Advanced</h1>
        <FaceBookAdvanced />

      </div>
    );
  }
}

export default App;
