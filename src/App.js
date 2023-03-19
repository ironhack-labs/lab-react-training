import './App.css';
import Greetings from './components/Greetings/Greetings';
import IdCard from './components/IdCard/IdCard';
import Random from './components/Random/Random';
import BoxColor from './components/BoxColor/BoxColor';
import CreditCard from './components/CreditCard/CreditCard';



const cardsArray = [  
  {  
    lastName: 'Doe',
    firstName: 'John',
    gender: 'male',
    height: 178,
    birth: "1992-07-14",
    picture: "https://randomuser.me/api/portraits/men/9.jpg"  
  },
  {    
    lastName: 'Delores ',
    firstName: 'Obrien',
    gender: 'female',
    height: 172,
    birth: "1988-05-11",
    picture: "https://randomuser.me/api/portraits/women/44.jpg"    
  },  
];

const creditCardsArray = [
  {
    type: "Visa",
    number: "0123456789018845",
    expirationMonth: 3,
    expirationYear: 2021,
    bank: "BNP",
    owner: "Maxence Bouret",
    bgColor: "#11aa99",
    color: "white",
  },
  {
    type: "Master Card",
    number: "0123456789010995",
    expirationMonth: 3,
    expirationYear: 2021,
    bank: "N26",
    owner: "Maxence Bouret",
    bgColor: "#eeeeee",
    color: "#222222",
  },
  {
    type: "Visa",
    number: "0123456789016984",
    expirationMonth: 12,
    expirationYear: 2019,
    bank: "Name of the Bank",
    owner: "Firstname Lastname",
    bgColor: "#ddbb55",
    color: "white",
  },
]


function App() {
  return (
    <div className="App d-flex flex-column align-items-center container m-4">
      <IdCard card={ cardsArray[0] }/>
      <IdCard card={ cardsArray[1] }/>
      <Greetings lang="de" >Ludwig</Greetings>
      <Greetings lang="fr" >François</Greetings>
      <Random min={6} max={15}/>
      <Random min={1} max={10}/>
      <BoxColor r={255} g={0} b={0}/>
      <BoxColor r={128} g={255} b={0}/>
      <CreditCard cardData={ creditCardsArray[0]} />
      <CreditCard cardData={ creditCardsArray[1]} />
      <CreditCard cardData={ creditCardsArray[2]} />
    </div>
  );
}

export default App;
