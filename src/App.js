import React from 'react';
import './App.css';
import Greetings from './components/Greetings';
import IdCard from './components/IdCard';
import Random from './components/Random';
import BoxColor from './components/BoxColor';
import CreditCard from './components/CreditCard'

//Iteration 1
const idCards = [
  {
    lastName:'Doe',
    firstName:'John',
    gender:'male',
    height:178,
    birth:"1992-07-14",
    picture:"https://randomuser.me/api/portraits/men/44.jpg"
  },
  {  
    lastName:'Delores',
    firstName:'Obrien',
    gender:'female',
    height:172,
    birth:"1988-05-11",
    picture:"https://randomuser.me/api/portraits/women/44.jpg"
  }
]

const idCardsCollection = idCards.map(card => 
  <IdCard 
    lastName = {card.lastName}
    firstName = {card.firstName}
    gender = {card.gender}
    height = {card.height}
    birth = {card.birth}
    picture = {card.picture}
    key = {card.lastName}
  />
)

const bgVisa = 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Visa_2014_logo_detail.svg/200px-Visa_2014_logo_detail.svg.png'
const bgMC = 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Mastercard_2019_logo.svg/320px-Mastercard_2019_logo.svg.png'

function App() {
  return (
    <div className="App">

    {/* Iteration 1 */}
      <div className="Greetings">
        <Greetings lang="pt">
          Lourenço
        </Greetings>
        <Greetings lang="fr">
          Antoine
        </Greetings>
        <Greetings lang="">
          John
        </Greetings>
      </div>

    {/* Iteration 2 */}
      {idCardsCollection}

    {/* Iteration 3 */}
      <Random min={1} max={6}/>
      <Random min={1} max={100}/>

    {/* Iteration 4 */}
      <BoxColor r={255} g={0} b={0}>#ff0000</BoxColor>
      <BoxColor r={128} g={255} b={0}>#80ff00</BoxColor>

    {/* Iteration 5 */}
 
    <CreditCard
      type= {bgVisa}
      number="0123456789018845"
      expirationMonth={3}
      expirationYear={2021}
      bank="BNP"
      owner="Maxence Bouret"
      bgColor="#11aa99"
      color="white" 
    />

    <CreditCard
      type={bgMC}
      number="0123456789010995"
      expirationMonth={3}
      expirationYear={2021}
      bank="N26"
      owner="Maxence Bouret"
      bgColor="#eeeeee"
      color="#222222" 
    />

    <CreditCard
      type={bgVisa}
      number="0123456789016984"
      expirationMonth={12}
      expirationYear={2019}
      bank="Name of the Bank"
      owner="Firstname Lastname"
      bgColor="#ddbb55"
      color="white" 
    />

    </div>
  );
}

export default App;
