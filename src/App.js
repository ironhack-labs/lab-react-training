// App.js

import './App.css';
import BoxColor from './components/Main/BoxColor';
import CreditCard from './components/Main/CreditCard';
import Greetings from './components/Main/Greetings';
import IdCard from './components/Main/IdCard';
import LikeButton from './components/Main/LikeButton';
import Random from './components/Main/Random';
import Rating from './components/Main/Rating';
import ClickablePicture from './components/Main/ClickablePicture';
import Dice from './components/Main/Dice';
import Carousel from './components/Main/Carousel';





const idCards = [{
  lastName:'Doe',
  firstName:'John',
  gender:'male',
  height: 178,
  birth: new Date("1992-07-14"),
  picture:"https://randomuser.me/api/portraits/men/44.jpg",
},
{
  lastName:'Delores ',
  firstName:'Obrien',
  gender:'female',
  height:172,
  birth:new Date("1988-05-11"),
  picture:"https://randomuser.me/api/portraits/women/44.jpg"
}]

const languages = ["de","en","es","fr"]
const children = ["Alan","Alexis","Alan"]

const min = 0;
const max = 7;

const r = Math.floor(Math.random() * (255 - 0) + 0)
const g = Math.floor(Math.random() * (255 - 0) + 0)
const b = Math.floor(Math.random() * (255 - 0) + 0)

const r2 = Math.floor(Math.random() * (255 - 0) + 0)
const g2 = Math.floor(Math.random() * (255 - 0) + 0)
const b2 = Math.floor(Math.random() * (255 - 0) + 0)

const creditCards = [{
  type:"Visa",
  number:"0123456789018845",
  expirationMonth:3,
  expirationYear:2021,
  bank:"BNP",
  owner:"Maxence Bouret",
  bgColor:"#11aa99",
  color:"white" 
},{
  type:"Master Card",
  number:"0123456789010995",
  expirationMonth:"3",
  expirationYear:2021,
  bank:"N26",
  owner:"Maxence Bouret",
  bgColor:"#eeeeee",
  color:"#222222",
},{
  type:"Visa",
  number:"0123456789016984",
  expirationMonth:12,
  expirationYear:2019,
  bank:"Name of the Bank",
  owner:"Firstname Lastname",
  bgColor:"#ddbb55",
  color:"white" 
}]

const rating = Math.round(Math.random()*5*10)/10

const carouselImages = [
  'https://randomuser.me/api/portraits/women/1.jpg',
  'https://randomuser.me/api/portraits/men/1.jpg',
  'https://randomuser.me/api/portraits/women/2.jpg',
  'https://randomuser.me/api/portraits/men/2.jpg'
]




function App() {
  return (
    <div className="App">

    <h1>1. IdCard</h1>
    {
      idCards.map((idCard)=>{
        return <IdCard idInfo={idCard} />
      })
    }

    <h1>2. Greetings</h1>

    {
      languages.map((language)=>{
        return children.map((child)=>{
          return <Greetings lang={language} children={child} />
        })
      })
    }

    <h1>3. Random</h1>

    <Random min={min} max={max} />

    <h1>4. Box Color</h1>
    <BoxColor r={r} g={g} b={b} />
    <BoxColor r={r2} g={g2} b={b2} />

    <h1>5. Credit Card</h1>
    <div className='cards'>
    {
      creditCards.map((creditCard)=>{
        return <CreditCard creditCardInfo={creditCard} />
      })
    }
    </div>

    <h1>6. Rating</h1>
    <Rating children={rating}/>


    <h1>8. Like Button</h1>
    <LikeButton/>

    <h1>9.ClickablePicture</h1>
    <ClickablePicture/>

    <h1>10. Dice</h1>
    <Dice/>

    <h1>11. Carousel</h1>
    <Carousel images = {carouselImages}/>





    </div>
  );
}

export default App;














