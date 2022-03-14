//jshint esversion:8

import './App.css';
import {IdCard} from './components/IdCard';
import {Greetings} from './components/Greetings';
import { Random } from './components/Random';
import { BoxColor } from './components/BoxColor';
import {CreditCard} from './components/CreditCard';
import { Rating } from './components/Rating';
import { DriverCard } from './components/DriverCard';
import { LikeButton } from './components/LikeButton';
import { ClickablePicture } from './components/ClickablePicture';
import maxence from './assets/images/maxence.png';
import maxenceGlasses from './assets/images/maxence-glasses.png';
import { Dice } from './components/Dice';

const cards = [
  {
    lastName: 'Doe',
    firstName: 'John',
    gender: 'male',
    height: 178,
    birth: new Date("1992-07-14"),
    picture:"https://randomuser.me/api/portraits/men/44.jpg"
  },
  {
    lastName: 'Delores',
    firstName: 'Obrien',
    gender: 'female',
    height: 172,
    birth: new Date("1988-05-11"),
    picture:"https://randomuser.me/api/portraits/women/44.jpg"
  }
];

const creditCards = [
  {
    type: "Visa",
    number: "0123456789018845",
    expirationMonth: 3,
    expirationYear: 2021,
    bank: "BNP",
    owner: "Maxence Bouret",
    bgColor: "#11aa99",
    color: "white"
  },
  {
    type: "Master Card",
    number: "0123456789010995",
    expirationMonth: 3,
    expirationYear: 2021,
    bank: "N26",
    owner: "Maxence Bouret",
    bgColor: "#eeeeee",
    color: "#222222"
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

const driverCard = [
  {
    name: "Travis Kalanick",
    rating: 4.2,
    img: "https://si.wsj.net/public/resources/images/BN-TY647_37gql_OR_20170621052140.jpg?width=620&height=428",
    car: {
      model:"Toyota Corolla Altis",
      licensePlate: "CO42DE"
    }
  },
  {
    name: "Dara Khosrowshahi",
    rating: 4.9,
    img: "https://ubernewsroomapi.10upcdn.com/wp-content/uploads/2017/09/Dara_ELT_Newsroom_1000px.jpg",
    car: {
      model:"Audi A3",
      licensePlate: "BE33ER"
    }
  }
];

function App() {
  return (
    <div className="App">

      {cards.map(elem => {
        return <IdCard firstName={elem.firstName} lastName={elem.lastName} gender={elem.gender} height={elem.height} birth={elem.birth} picture={elem.picture} />
      })}
      
      <Greetings lang="de">Ludwig</Greetings>
      <Greetings lang="fr">François</Greetings>

      
      <Random min={1} max={6}/>
      <Random min={1} max={100}/>

     

      <BoxColor r={255} g={0} b={0} />
      <BoxColor r={128} g={255} b={0} />

     
      <div className='credit-card-container containers'>

        {creditCards.map(card => {
          return <CreditCard type={card.type} number={card.number.slice(-4).padStart(card.number.length, '*')} expirationMonth={card.expirationMonth} expirationYear={card.expirationYear.toString().substr(-2)} bank={card.bank} owner={card.owner} bgColor={card.bgColor} color={card.color}/>
        })}
      </div>

      <div className='ratings containers'>
        <Rating>0</Rating>
        <Rating>1.49</Rating>
        <Rating>1.5</Rating>
        <Rating>3</Rating>
        <Rating>4</Rating>
        <Rating>5</Rating>
      </div>


      <div className='driver-cards containers'>

        {driverCard.map(card => {
          return <DriverCard name={card.name} rating={card.rating} img={card.img} car={card.car} />
        })}
      </div>
      
      <div className='like-button-container containers'>
        <LikeButton />
      </div>

      <div className='clickable-picture-container containers'>
        
        <ClickablePicture img={maxence} imgClicked={maxenceGlasses}/>
      </div>

      <div className='dice-container containers'>
        
        <Dice />
      </div>
    </div>
  );
}

export default App;
