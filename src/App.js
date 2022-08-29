import './App.css';
import IdCard from './components/id-card/IdCard';
import Greetings from "./components/greetings/Greetings";
import Random from "./components/random/Random";

function App() {
  return (
    <div className="App">
      {/* ITERATION 1 - IDCARDS */}
      <div className='id-cards'>
        <h3 className='my-3 mx-2'><b>IdCard</b></h3>
        <IdCard
          lastName='Doe'
          firstName='John'
          gender='male'
          height={178}
          birth={new Date("1992-07-14")}
          picture="https://randomuser.me/api/portraits/men/41.jpg"
        />
        <IdCard
          lastName='Dolores '
          firstName='Obrien'
          gender='female'
          height={172}
          birth={new Date("1988-05-11")}
          picture="https://randomuser.me/api/portraits/women/44.jpg"
        />
      </div>

      {/* ITERATION 2 - GREETINGS */}
      <div className='greetings'>
        <h3 className='my-3 mx-2'><b>Greetings</b></h3>
        <Greetings lang="de">Ludwig</Greetings>
        <Greetings lang="fr">François</Greetings>
      </div>

      {/* ITERATION 3 - RANDOM */}
      <div className='random'>
      <h3 className='my-3 mx-2'><b>Random</b></h3>
        <Random min={1} max={6} />
        <Random min={1} max={100} />
      </div>
    </div>
  );
}

export default App;
