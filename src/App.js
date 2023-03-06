import './App.css';
import IdCard from  './components/IdCard';
import { arrIdCard } from "./data/IdCard-data";
import Greetings from './components/Greetings';
import Random from './components/Random';

function App() {
  return (
    <div className="App">
    <h1>Id Card</h1>
    {arrIdCard.map((card) => {
      return (
        <IdCard
        key={card.id}
        picture={card.picture}
        firstName={card.firstName}
        lastName={card.lastName}
        gender={card.gender}
        height={card.height}
        birth={card.birth}
        />
        );
    })}

    <h1>Greetings</h1>
    <Greetings lang='fr'>Francois</Greetings>
    <Greetings lang='de'>Ludwig</Greetings>

    <h1>Random</h1>
    <Random min="1" max="6"></Random>
    <Random min="1" max="100"></Random>



    </div>
  );
}

export default App;
