import './App.css';
import berlin from './data/berlin.json';
import IdCard from './components/IdCard.jsx';
import Greetings from './components/Greetings.jsx';
import Random from './components/Random.jsx';
import BoxColor from './components/BoxColour.jsx';
import CreditCard from './components/CreditCard.jsx';

function App() {
  return (
    <div className="App">
      <h1>IdCard</h1>
      <IdCard id={berlin[4]} />
      <h1>Greetings</h1>
      <Greetings lang={berlin[4].country}>{berlin[4].firstName}</Greetings>
      <h1>Random</h1>
      <Random min={1} max={6} />
      <h1>BoxColour</h1>
      <BoxColor r={10} g={20} b={50} />
      <h1>CreditCard</h1>
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
    </div>
  );
}

export default App;
