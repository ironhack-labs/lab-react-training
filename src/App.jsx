import './App.css';
import IdCard from './components/IdCard';
import idData from './data/idData.json';
import Greetings from './components/Greetings';
import Random from './components/Random';
import BoxColor from './components/BoxColor';
import CreditCard from './components/CreditCard';
import creditCardData from './data/creditCardData.json';
import Rating from './components/Rating';
import DriverCard from './components/DriverCard';
import driverCardData from './data/driverCardData.json';

function App() {
  return (
    <div className="App">
      <h1>IdCard</h1>
      {idData.map((idCard) => {
        return <IdCard idCard={idCard} />;
      })}

      <h1>Greetings</h1>
      <Greetings lang="de">Ludwig</Greetings>
      <Greetings lang="fr">François</Greetings>

      <h1>Random</h1>
      <Random min={1} max={6} />
      <Random min={1} max={100} />

      <h1>BoxColor</h1>
      <BoxColor r={255} g={0} b={0} />
      <BoxColor r={128} g={255} b={0} />

      <h1>CreditCard</h1>
      {creditCardData.map((creditCard) => {
        return <CreditCard creditCard={creditCard} />;
      })}

      <h1>Rating</h1>
      <Rating>0</Rating>
      <Rating>1.49</Rating>
      <Rating>1.5</Rating>
      <Rating>3</Rating>
      <Rating>4</Rating>
      <Rating>5</Rating>

      <h1>DriverCard</h1>
      {driverCardData.map((driverCard) => {
        return <DriverCard driverCard={driverCard} />;
      })}

    </div>
  );
}

export default App;
