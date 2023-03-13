import './App.css';

import berlinDB from "./data/berlin.json"

import IdCard from './components/IdCard';
import Greetings from './components/Greetings';

function App() {
  return (
    <div className="App">
      <h1>IdCard</h1>
      <IdCard gender="male" height={1.78} birth={new Date("1988-05-11")} {...berlinDB[0]}/>
      <h1>Greetings</h1>
      <Greetings lang="de">Ludwig</Greetings>
    </div>
  );
}

export default App;
