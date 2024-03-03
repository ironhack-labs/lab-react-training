import './App.css';
import berlin from './data/berlin.json';
import IdCard from './components/IdCard.jsx';
import Greetings from './components/Greetings.jsx';
import Random from './components/Random.jsx';
import BoxColor from './components/BoxColour.jsx';

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
    </div>
  );
}

export default App;
