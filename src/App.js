import './App.css';
import IdCard from './components/IdCard';
import Greetings from './components/Greetings';
import Random from './components/Random';

function App() {
  return (
    <div className="App">
      {/* <IdCard/> */}
      {/* <Greetings lang="de">Ludwig</Greetings> */}
      {/* <Greetings lang="fr">François</Greetings> */}
      <Random min={1} max={6} />
      <Random min={1} max={100} />
    </div>
  );
}

export default App;
