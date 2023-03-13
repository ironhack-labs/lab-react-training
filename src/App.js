import './App.css';

import berlinDB from "./data/berlin.json"

import IdCard from './components/IdCard';
import Greetings from './components/Greetings';
import Random from './components/Random';
import BoxColor from './components/BoxColor';

function App() {
  return (
    <div className="App">
      <h1>IdCard</h1>
      <IdCard gender="male" height={1.78} birth={new Date("1988-05-11")} {...berlinDB[0]}/>
      <IdCard gender="male" height={1.87} birth={new Date("1978-06-10")} {...berlinDB[1]}/>
      <h1>Greetings</h1>
      <Greetings lang="de">Ludwig</Greetings>
      <Greetings lang="fr">François</Greetings>
      <h1>Random</h1>
      <Random min={1} max={6}/>
      <Random min={1} max={100}/>
      <h1>BoxColor</h1>
      <BoxColor r={255} g={0} b={0}/>
      <BoxColor r={128} g={255} b={0} />
    </div>
  );
}

export default App;
