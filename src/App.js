import './App.css';
import IdCard, { GenerateIdCard } from './components/IdCard';
import Greeting from './components/Greeting.jsx';
import Random from './components/Random';
import BoxColor from './components/BoxColor';

function App() {
  return (
    <div className="App">
      <h1 className="Title">
        <b>Iteration 1 | Component: IdCard</b>
      </h1>
      <IdCard
        firstName="John"
        lastName="Doe"
        gender="male"
        height={178}
        birth={new Date('1992-07-14').toDateString()}
        picture="https://randomuser.me/api/portraits/men/44.jpg"
      />
      <IdCard
        firstName="Delores"
        lastName="Obrien"
        gender="female"
        height={172}
        birth={new Date('1988-05-11').toDateString()}
        picture="https://randomuser.me/api/portraits/women/44.jpg"
      />
      <h1 className="Title">
        <b>Iteration 2 | Component: Greetings</b>
      </h1>
      <Greeting language="col">Mi pana</Greeting>
      <Greeting language="fr">Antoine!</Greeting>

      <h1 className="Title3">
        <b>Iteration 3 | Component: Random</b>
      </h1>
      <div className="RandomBox">
        <p className="Random">
          Random number between 1 and 6 --> <Random min={1} and max={6} />
        </p>

        <p className="Random">
          Random number between 1 and 100 --> <Random min={1} and max={100} />
        </p>
      </div>
      <h1 className="Title3">
        <b>Iteration 4 | Component: BoxColor</b>
      </h1>
      <BoxColor r={255} g={0} b={0} />
      <BoxColor r={128} g={255} b={0} />
    </div>
  );
}

export default App;
