
import './App.css';
import IdCard from './components/IdCard';
import Greetings from './components/Greetings';
import { Random } from './components/Random';
import { BoxColor } from './components/BoxColor';
import { CreditCard } from './components/CreditCard';

function App() {
  return (
    <div className="App">
    <IdCard
    lastName="Doe"
    firstName="John"
    gender="male"
    height={178}
    birth={new Date('1992-07-14')}
    picture="https://randomuser.me/api/portraits/men/44.jpg"
  />

  <IdCard
    lastName="Delores "
    firstName="Obrien"
    gender="female"
    height={172}
    birth={new Date('1988-05-11')}
    picture="https://randomuser.me/api/portraits/women/44.jpg"
  />

  <div>
    <Greetings lang="es">Manuel</Greetings>
    <Greetings lang="en">Julia</Greetings>
  </div>

  <div>
    <Random min={2} max={300} />
    <Random min={2} max={500} />
  </div>

  <div>
    <BoxColor r={200} g={50} b={40} />
    <BoxColor r={300} g={100} b={30} />
  </div>

  <div className='CreditApp'>
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
