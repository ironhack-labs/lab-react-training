import './App.css';

import IdCard from "./components/IdCard/IdCard";
import Greetings from "./components/Greetings/Greeting"
import Random from './components/Random/Random';
import BoxColor from './components/BoxColor/BoxColor'
import CreditCard from './components/CreditCard/CreditCard'

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
    </div>
  );
}

export default App;


