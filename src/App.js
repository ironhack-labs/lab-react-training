
import './App.css';
import IdCard from './components/IdCard';
import Greetings from './components/Greetings';
import Random from './components/Random';
import BoxColor from './components/BoxColor';
import Rating from './components/Rating';

function App() {
  return (
    <div>
    <div className="App">

      <div className='idContainer'>
        <h1>IdCard</h1>
        <IdCard
          lastName="Doe"
          firstName="John"
          gender="male"
          height={178}
          birth={new Date("1992-07-14")}
          picture="https://randomuser.me/api/portraits/men/44.jpg"
        />
        <IdCard
          lastName='Delores '
          firstName='Obrien'
          gender='female'
          height={172}
          birth={new Date("1988-05-11")}
          picture="https://randomuser.me/api/portraits/women/44.jpg"
        />
      </div>
    <div>
    <h1>Greetings</h1>
    <Greetings lang="de">Ludwig</Greetings>
    <Greetings lang="fr">François</Greetings>
    </div>
    <div>
        <h1>Random</h1>
        <Random min={1} max={6} />
        <Random min={1} max={100} />
      </div>
      <div>
        <h1>BoxColor</h1>
        <BoxColor r={255} g={0} b={0} />
        <BoxColor r={128} g={255} b={0} />
      </div>

        <div>
        <h1>Rating</h1>
        <Rating>0</Rating>
        <Rating>1.49</Rating>
        <Rating>1.5</Rating>
        <Rating>3</Rating>
        <Rating>4</Rating>
        <Rating>5</Rating>
      </div>


  </div>

  </div>
  );
}

export default App;
