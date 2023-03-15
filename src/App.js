import './App.css';

import berlinDB from "./data/berlin.json"

import IdCard from './components/IdCard';
import Greetings from './components/Greetings';
import Random from './components/Random';
import BoxColor from './components/BoxColor';
import CreditCard from './components/CreditCard';

function App() {
  return (
    <div className="App">
      <h1 className='text-start ms-3'>IdCard</h1>
      <IdCard gender="male" height={1.78} birth={new Date("1988-05-11")} {...berlinDB[0]} />
      <IdCard gender="male" height={1.87} birth={new Date("1978-06-10")} {...berlinDB[1]} />
      <h1 className='text-start ms-3'>Greetings</h1>
      <Greetings lang="de">Ludwig</Greetings>
      <Greetings lang="fr">François</Greetings>
      <h1 className='text-start ms-3'>Random</h1>
      <Random min={1} max={6} />
      <Random min={1} max={100} />
      <h1 className='text-start ms-3'>BoxColor</h1>
      <BoxColor r={255} g={0} b={0} />
      <BoxColor r={128} g={255} b={0} />
      <h1 className="text-start ms-3">Credit card</h1>
      <div className="container">
        <div className="row">
          <div className="col-4">
            <CreditCard type="Visa" number="0123456789018845" expirationMonth={3} expirationYear={2021} bank="BNP" owner="Maxence Bouret" bgColor="#11aa99" color="white" />
          </div>
          <div className="col-4">
          <CreditCard type="Master Card" number="0123456789010995" expirationMonth={3} expirationYear={2021} bank="N26" owner="Maxence Bouret" bgColor="#eeeeee" color="#222222"/>
          </div>
          <div className="col-4">
            <CreditCard type="Visa" number="0123456789016984" expirationMonth={12} expirationYear={2019} bank="Name of the Bank" owner="Firstname Lastname" bgColor="#ddbb55" color="white"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
