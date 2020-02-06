import React, { Component } from 'react';
import IdCard from './IdCard'
import Greetings from './Greetings';
import Random from './Random'
import BoxColor from './BoxColor';
import CreditCard from './CreditCard';
import Rating from './Rating'
import DriverCardData from './DriverCardData';
import LikeButton from './LikeButton';
import ClickeablePicture from './ClickeablePicture';
import Dice from './Dice';
import Carousel from './Carousel';
import NumbersTable from './NumbersTable';
import Facebook from './Facebook/Facebook';
import profiles from './data/berlin.json'


class App extends Component {
  render() {
    const parseDate = (date) => {
      return `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`
    } 

    return (
      <div className="App">
        <h1>IdCard</h1>
          <IdCard 
          lastName="Doe"
          firstName="John"
          gender='male'
          height={178}
          birth={parseDate(new Date("1992-07-14"))}
          picture="https://randomuser.me/api/portraits/men/44.jpg"
          />

        <IdCard 
          lastName='Delores '
          firstName='Obrien'
          gender='female'
          height={172}
          birth={parseDate(new Date("1988-05-11"))}
          picture="https://randomuser.me/api/portraits/women/44.jpg"
        />

        <h1>Greetings</h1>
          <Greetings
            lang="ff"
            children="Sergio"
          />

          <Greetings
            lang="en"
            children="Sergio"
          />

        <h1>Random</h1>
          <Random 
            max={6}
            min={1}
          />

          <Random 
            max={100}
            min={1}
          />

        <h1>BoxColor</h1>
          <BoxColor
            r={255}
            g={0}
            b={0}
          />

          <BoxColor
            r={128}
            g={255}
            b={0}
          />

        <h1>Credit Card</h1>
          <CreditCard
            type="Visa"
            number="------------------845"
            expirationMonth={3}
            expirationYear={2021}
            bank="BNP"
            owner="Maxence Bouret"
            bgColor="#11aa99"
            color="white"
          />

          <CreditCard
            type="Visa"
            number="------------------621"
            expirationMonth={3}
            expirationYear={2021}
            bank="BNP"
            owner="Sergio Itur"
            bgColor="#eeeeee"
            color="#222222"
          />

        <h1>Ratings</h1>
          <Rating rate={0} />
          <Rating rate={1.2} />
          <Rating rate={2.2} />
          <Rating rate={3.2} />
          <Rating rate={4.4} />
          <Rating rate={4.7} />
          
        <h1>Driving Card</h1>
          <DriverCardData />

        <h1>Like Button</h1>
          <LikeButton />
        
        <h1>Clickeable Picture</h1>
          <ClickeablePicture
            img="/img/persons/maxence.png"
            imgClicked="/img/persons/maxence-glasses.png"
          />

        <h1>Dice</h1>
          <Dice />

        <h1>Carousel</h1>
          <Carousel 
            imgs={[
              "https://randomuser.me/api/portraits/women/1.jpg",
              "https://randomuser.me/api/portraits/men/1.jpg",
              "https://randomuser.me/api/portraits/women/2.jpg",
              "https://randomuser.me/api/portraits/men/2.jpg",
            ]} 
          />  

        <h1>Carousel</h1>
          <NumbersTable limit={13} />   

        <h1>Facebook</h1>
          <Facebook profiles={profiles} />

      </div>
    );
  }
}

export default App;
