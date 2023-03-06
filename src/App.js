import './App.css';
import IdCard from  './components/IdCard';
import { arrIdCard } from "./data/IdCard-data";
import Greetings from './components/Greetings';
import Random from './components/Random';
import BoxColor from './components/BoxColor';
import CreditCard from './components/CreditCard';

function App() {
  return (
    <div className="App">
    <h1>Id Card</h1>
    {arrIdCard.map((card) => {
      return (
        <IdCard
        key={card.id}
        picture={card.picture}
        firstName={card.firstName}
        lastName={card.lastName}
        gender={card.gender}
        height={card.height}
        birth={card.birth}
        />
        );
    })}

    <h1>Greetings</h1>
    <Greetings lang='fr'>Francois</Greetings>
    <Greetings lang='de'>Ludwig</Greetings>

    <h1>Random</h1>
    <Random min="1" max="6"></Random>
    <Random min="1" max="100"></Random>

    <h1>Box Color</h1>
    <BoxColor r="255" g="0" b="0"></BoxColor>
    <BoxColor r="128" g="255" b="0"></BoxColor>

    <h1>Credit Card</h1>
    <div className='credit-card'>
    <CreditCard
    type="Visa"
    number="0123456789018845"
    expirationMonth={3}
    expirationYear={2021}
    bank="BNP"
    owner="Maxence Bouret"
    bgColor="#11aa99"
    color="white" 
    />
    
    <CreditCard
    type="Master Card"
    number="0123456789010995"
    expirationMonth={3}
    expirationYear={2021}
    bank="N26"
    owner="Maxence Bouret"
    bgColor="#eeeeee"
    color="#222222"
  />

  <CreditCard
    type="Visa"
    number="0123456789016984"
    expirationMonth={12}
    expirationYear={2019}
    bank="Name of the Bank"
    owner="Firstname Lastname"
    bgColor="#ddbb55"
    color="white" 
  />
</div>
    </div>
  );
}

export default App;
