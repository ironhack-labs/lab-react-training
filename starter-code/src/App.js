import React, { Component } from 'react';
import IdCard from './components/IdCard/IdCard';
import Greetings from './components/Greetings/Greetings';
import Random from './components/Random/Random';
import BoxColor from './components/BoxColor/BoxColor';
import CreditCard from './components/CreditCard/CreditCard';
import Rating from './components/Rating/Rating';
import DriverCard from './components/DriverCard/DriverCard';
import LikeButton from './components/LikeButton/LikeButton';
import ClickablePicture from './components/ClickablePicture/ClickablePicture';
import Dice from './components/Dice/Dice';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>IdCard</h1>
        {<IdCard
          picture="https://randomuser.me/api/portraits/men/44.jpg" 
          firstName="Luffy"
          lastName="Monkey D."
          gender="Male"
          height="1.74m"
          birth="May 5th 1993"
         />}
         {<IdCard
          picture="https://randomuser.me/api/portraits/women/8.jpg" 
          firstName="Obrien"
          lastName="Delores"
          gender="Female"
          height="1.64m"
          birth="July 10th 1992"
         />}

        <h1>Greetings</h1>
        {<Greetings
          lang='en'
          name='Scherzer'
        />}
        {<Greetings 
          lang='es'
          name='Soto'
        />}

        <h1>Random</h1>
        <Random 
          min={1}
          max={6}
        />
        <Random 
          min={1}
          max={100}
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
          type='Visa'
          number='1234567890123456'
          expirationMonth={12}
          expirationYear={2023}
          bank='Itaú'
          owner='Fernando Yto'
          bgColor='orange'
          color='white'
        />
        <CreditCard 
          type='Mastercard'
          number='1234567890123456'
          expirationMonth={2}
          expirationYear={2030}
          bank='Nu'
          owner='Fernando Yto'
          bgColor='purple'
          color='white'
        />
        <CreditCard 
          type='Mastercard'
          number='1234567890123456'
          expirationMonth={5}
          expirationYear={2025}
          bank='Neon'
          owner='Fernando Yto'
          bgColor='lightGreen'
          color='black'
        />

        <h1>Rating</h1>
        <Rating
          rating={0}
        />
        <Rating
          rating={1.2}
        />
        <Rating
          rating={1.5}
        />
        <Rating
          rating={2.6}
        />
        <Rating
          rating={4}
        />
        <Rating
          rating={4.6}
        />

        <h1>DriverCard</h1>
        <DriverCard
          img="https://si.wsj.net/public/resources/images/BN-TY647_37gql_OR_20170621052140.jpg?width=620&height=428"
          name="Travis Kalanick"
          rating={3.2}
          car={{
            model: "Toyota Altis",
            licensePlate: "S4YWUT"
          }}
        />
        <DriverCard
          img="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTW2Ru-JhqZugjtSud9BILc5C4OzfMceRucnOuIgPajfOeTd_mI"
          name="Monkey D. Luffy"
          rating={5}
          car={{
            model: "Going Merry Go",
            licensePlate: "1000SUNNY"
          }}
        />

        <h1>LikeButton</h1>
        <LikeButton />
        <LikeButton />

        <h1>ClickablePicture</h1>
        <ClickablePicture
          img='/img/persons/maxence.png'
          imgClicked='/img/persons/maxence-glasses.png'
        />

        <h1>Dice</h1>
        <Dice />

      </div>
    );
  }
}

export default App;
