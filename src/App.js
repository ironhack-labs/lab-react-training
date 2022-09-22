import './App.css';

import IdCard from "./components/IdCard/IdCard";
import Greetings from "./components/Greetings/Greeting"
import Random from './components/Random/Random';
import BoxColor from './components/BoxColor/BoxColor'
import CreditCard from './components/CreditCard/CreditCard'
import Rating from './components/Rating/Rating'
import DriverCard from './components/DriverCard/DriverCard'
import LikeButton from './components/LikeButton/LikeButton'

function App() {

  const idCard = [
    {
      lastName : "Doe",
      firstName: "John",
      gender: "male",
      height: "178",
      birth: new Date('1992-07-14').toDateString(),
      picture:"https://randomuser.me/api/portraits/men/44.jpg"
    },
    {
      lastName : "Delores",
      firstName: "Obrien",
      gender: "female",
      height: "172",
      birth: new Date('1988-05-11').toDateString(),
      picture:"https://randomuser.me/api/portraits/women/44.jpg"
    }
  ]

  const creditCards = [
    {
      type: "Visa",
      number: "0123456789018845",
      expirationMonth: "3",
      expirationYear: "2021",
      bank: "BNP",
      owner: "Maxence Bouret",
      bgColor:"#11aa99",
      color: "white" 
    },
    {
      type: "Master Card",
      number:"0123-4567-8901-0995",
      expirationMonth: "3",
      expirationYear: "2021",
      bank: "N26",
      owner: "Maxence Bouret",
      bgColor:"#eeeeee",
      color: "#222222"
    },
    {
      type: "Visa",
      number: "0123456789016984",
      expirationMonth: "12",
      expirationYear: "2019",
      bank: "Name of the Bank",
      owner: "Firstname Lastname",
      bgColor: "#ddbb55",
      color: "white" 
    }
  ]

  const driverCard = [
    {
      name:"Travis Kalanick",
      rating:"4.2",
      img:"https://si.wsj.net/public/resources/images/BN-TY647_37gql_OR_20170621052140.jpg?width=620&height=428",
      car:[
        {model:"Toyota Corolla Altis"},
        {licensePlate:"CO42DE"}
      ]
    },
    {
      name:"Dara Khosrowshahi",
      rating:"4.9",
      img:"https://ubernewsroomapi.10upcdn.com/wp-content/uploads/2017/09/Dara_ELT_Newsroom_1000px.jpg",
      car:[
        {model:"Audi A3"},
        {licensePlate:"BE33ER"}
      ]
    }
  ]

  return (
    <div className="App">
      <div>
        <h1>Id Cards</h1>
        {idCard.map(({picture, firstName, lastName , gender , height, birth })=> {
          return <IdCard picture={picture} lastName={lastName} firstName={firstName}
                  gender={gender} height={height} birth={birth} key={picture} />
        })}
      </div>
      <div>
        <h1>Greeting</h1>
         <Greetings lang="de">Ludwig</Greetings>
         <Greetings lang="es">Pelayo</Greetings>
         <Greetings lang="fr">François</Greetings>
         <Greetings lang="en">Lizzy</Greetings>
      </div>
      <div>
        <h1>Random</h1>
         <Random min={1} max={6}/>
         <Random min={1} max={100}/>
      </div>
      <div>
        <h1>BoxColor</h1>
         <BoxColor r={255} g={0} b={0} />
         <BoxColor r={128} g={255} b={0} />
      </div>
        <h1>Credit Cards</h1>
      <div className='credit'>
        {creditCards.map(({type, number , expirationMonth, expirationYear, bank, owner })=> {
          return <CreditCard type={type} number={number} expirationMonth={expirationMonth} 
                  expirationYear={expirationYear} bank={bank} owner={owner} key={number} />
        })}
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
      <div>
        <h1>Driver Card</h1>
          {driverCard.map(({name, rating, img, car })=> {
          return <DriverCard name={name} rating={rating} img={img} car={car} key={img} />
        })}
      </div>
      <div>
        <h1>Like Button</h1>
        <LikeButton />
      </div>
    </div>
  );
}

export default App;


