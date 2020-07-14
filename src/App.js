import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import IdCard from './components/IdCard';
import Greetings from './components/Greetings'
import Random from './components/Random'
import BoxColor from './components/BoxColor'
import CreditCard from './components/CreditCard'
import Rating from './components/Rating'
import DriverCard from './components/DriverCard'
import Counter from './components/Counter'
import ClickablePicture from './components/ClickablePicture'
import Dice from './components/Dice'
import Carousel from './components/Carousel'
import NumbersTable from './components/NumbersTable'
import FaceBook from './components/FaceBook'
import SignupPage from './components/SignupPage'
import RGBColorPicker from './components/RGBColorPicker';

const idCards =[
  {
    firstName: 'John',
    lastName: 'Doe',
    gender: 'male',
    height: 1.78,
    birth:"1992-07-14",
    picture: 'https://randomuser.me/api/portraits/men/44.jpg'
  },
  {
    firstName: 'Delores',
    lastName: 'Obrien',
    gender: 'female',
    height: 1.72,
    birth:'1993-05-11',
    picture: 'https://randomuser.me/api/portraits/women/44.jpg'
  }
]

const idCardsElement = (idArray) => idArray.map(element => <IdCard img={element.picture} firstName={element.firstName} lastName={element.lastName} gender={element.gender} birth={element.birth} height={element.height}/>)



const greets =[
  {
    name: 'Ludwig',
    lang: 'de'
  },
  {
    name: 'François',
    lang: 'fr'
  }
]

const greetsElement = (greetsArray) => greetsArray.map(element => <Greetings lang={element.lang}>{element.name}</Greetings>)

const randoms = [
  {
    min: 1,
    max: 6
  },
  {
    min: 1,
    max: 100
  },
  {
    min: 500,
    max: 1000
  }
]

const randomsElement = (randomsArray) => randomsArray.map(element => <Random min={element.min} max={element.max}/>)

const colors = [
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
 
]

const colorsElement = (colorsArray) => colorsArray.map(element => <BoxColor r={element.r} g={element.g} b={element.b}/>)

const ccards = [
  {
    type:'Visa',
    number: '0123456789018845',
    expirationMonth: 3,
    expirationYear: 2021,
    bank:'BNP',
    owner:'Maxence Bouret',
    bgColor:'#11aa99',
    color:'white'
  },
  {
    type:'Master Card',
    number: '0123456789010995',
    expirationMonth: 3,
    expirationYear: 2021,
    bank:'N26',
    owner:'Maxence Bouret',
    bgColor:'#eeeeee',
    color:'#222222',
  },
  {
    type:'Visa',
    number: '0123456789016984',
    expirationMonth: 12,
    expirationYear: 2019,
    bank:'La Caixa',
    owner:'Claudi Sanchez',
    bgColor:'#ddbb55',
    color:'white'
  }
 
]

const ccardsElement = (ccardsArray) => ccardsArray.map(element => <CreditCard type={element.type} color={element.color} bgColor={element.bgColor} number={element.number} expirationMonth={element.expirationMonth} expirationYear={element.expirationYear} owner={element.owner} bank={element.bank}  />)

const ratings = [
  {rating:0},
  {rating:1.49},
  {rating:1.5},
  {rating:3},
  {rating:4},
  {rating:5}
]

const ratingsElement = (ratingsArray) => ratingsArray.map(element => <Rating rating={element.rating}/>)

const driverCards = [
  {
    name:'Travis Kalanick',
    rating:4.2,
    img:'https://si.wsj.net/public/resources/images/BN-TY647_37gql_OR_20170621052140.jpg?width=620&height=428',
    car:{
      model: 'Toyota Corolla Altis',
      licensePlate: "CO42DE"
    }
  },
  {
    name:'Dara Khosrowshahi',
    rating:4.9,
    img:'https://ubernewsroomapi.10upcdn.com/wp-content/uploads/2017/09/Dara_ELT_Newsroom_1000px.jpg',
    car:{
      model: "Audi A3",
      licensePlate: "BE33ER"
    }
  }
]

const driverCardsElement = (driverCardsArray) => driverCardsArray.map(element => <DriverCard name={element.name} rating={element.rating} img={element.img} car={element.car} color={'white'} bgColor={'blue'}/>)

const  values = ['purple','blue','green','yellow','orange','red']
const dices=[ './img/dice-empty.png',
                './img/dice1.png',
                './img/dice2.png',
                './img/dice3.png',
                './img/dice4.png',
                './img/dice5.png',
                './img/dice6.png']
const imgs=[
    'https://randomuser.me/api/portraits/women/1.jpg',
    'https://randomuser.me/api/portraits/men/1.jpg',
    'https://randomuser.me/api/portraits/women/2.jpg',
    'https://randomuser.me/api/portraits/men/2.jpg'
  ]

const limit =12


function App() {
  return (
    <div className='App'>
      <h1 className='title'>IdCard</h1>
      {idCardsElement(idCards)}
      <h1 className='title'>Greetings</h1>
      {greetsElement(greets)}
      <h1 className='title'>Random</h1>
      {randomsElement(randoms)}
      <h1 className='title'>BoxColor</h1>
      {colorsElement(colors)}
      <h1 className='title'>CreditCard</h1>
      <div className='ccards'>
      {ccardsElement(ccards)}
      </div>
      <h1 className='title'>Ratings</h1>
      {ratingsElement(ratings)}
      <h1 className='title'>DriverCard</h1>
      {driverCardsElement(driverCards)}
      <h1 className='title'>Counter</h1>
      <Counter values ={values}/>
      <Counter values ={values}/>
      <h1 className='title'>ClickablePicture</h1>
      <ClickablePicture />
      <h1 className='title'>Dice</h1>
      <Dice dices={dices}/>
      <h1 className='title'>Carousel</h1>
      <Carousel imgs={imgs}/>
      <h1 className='title'>NumbersTable</h1>
      <NumbersTable limit={limit}/>
      <h1 className='title'>Facebook</h1>
      <FaceBook/>
      <h1 className='title'>SignupPage</h1>
      <SignupPage/>
      <h1 className='title'>RGBColorPicker</h1>
      <RGBColorPicker />
    </div>
  );
}

export default App;
