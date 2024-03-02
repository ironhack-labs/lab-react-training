import './App.css';
import berlin from './data/berlin.json';
import IdCard from './components/IdCard.jsx';
import Greetings from './components/Greetings.jsx';

function App() {
  return (
    <div className="App">
      <IdCard id={berlin[4]} />
      <Greetings lang={berlin[4].country}>{berlin[4].firstName}</Greetings>
    </div>
  );
}

export default App;