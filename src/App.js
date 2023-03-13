import './App.css';

import berlinDB from "./data/berlin.json"

import IdCard from './components/IdCard';

function App() {
  return (
    <div className="App">
      <IdCard gender="male" height={1.78} birth={new Date("1988-05-11")} {...berlinDB[0]}/>
    </div>
  );
}

export default App;
