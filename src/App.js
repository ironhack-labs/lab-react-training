
import './App.css';
import { IdCard } from './components/IdCard/IdCard';
import {Greetings} from './components/Greetings/Greetings';
import {Random} from './components/Random/Random'
import {BoxColor} from './components/BoxColor/BoxColor'
import {CreditCard} from './components/CreditCard'

function App() {
  
  return (
    <div className="App">
      <h1>Iteration 1</h1>
      <IdCard
  lastName='Doe'
  firstName='John'
  gender='male'
  height={178}
  birth={new Date("1992-07-14")}
  picture="https://randomuser.me/api/portraits/men/44.jpg"
/>

<IdCard
  lastName='Delores '
  firstName='Obrien'
  gender='female'
  height={172}
  birth={new Date("1988-05-11")}
  picture="https://randomuser.me/api/portraits/women/44.jpg"
/>

<h1>Iteration 2</h1>
<Greetings lang="de">Ludwig</Greetings>
<Greetings lang="fr">François</Greetings>

<h1>Iteration 3</h1>

<Random min={1} max={6}/>
<Random min={1} max={100}/>


<h1>Iteration 4</h1>

<BoxColor r={255} g={0} b={0} />
<BoxColor r={128} g={255} b={0} />

<h1>Iteration 5</h1>
<div className="creditCards">

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

<h1>Iteration 6</h1>

<h1>Iteration 7</h1>




    </div>
  );
}

export default App;
