// App.js

import './App.css';
import BoxColor from './components/Main/BoxColor';
import CreditCard from './components/Main/CreditCard';
import Greetings from './components/Main/Greetings';
import IdCard from './components/Main/IdCard';
import Random from './components/Main/Random';
import Rating from './components/Main/Rating';


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
const children = ["Alan","Alexis","Emanuel"]

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
},
{
  type:"Master Card",
  number:"0123456789010995",
  expirationMonth:3,
  expirationYear:2021,
  bank:"N26",
  owner:"Maxence Bouret",
  bgColor:"#eeeeee",
  color:"#222222",
},
{
  type:"Visa",
  number:"0123456789016984",
  expirationMonth:12,
  expirationYear:2019,
  bank:"Name of the Bank",
  owner:"Firstname Lastname",
  bgColor:"#ddbb55",
  color:"white",
}]

const rating =  Math.round(Math.random()*5+10)/10

function App() {
  return (
    <div className="App">

      {
        idCards.map((idCard)=>{
          return <IdCard idInfo={idCard} />
        })
      }

      {
        languages.map((language)=>{
          return children.map((child)=>{
            return <Greetings lang={language} children={child} />
          })
        })
      }

      <Random min={min} max={max} />

      <BoxColor r={r} g={g} b={b} />
      <BoxColor r={r2} g={g2} b={b2} />

      <div className="Cards">

          {
            creditCards.map((creditCard)=>{
              return <CreditCard cardInfo={creditCard}/>
            })
          }

      </div>
          
      <Rating children={rating} />

    </div>
  );
}

export default App;