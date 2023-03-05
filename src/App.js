import './App.css';
import BoxColor from './components/BoxColor';
import Greetings from './components/Greetings';
import IdCard from './components/IdCard';
import Random from './components/Random';


function App() {
  return (
    <div className="App">
      <div className='iteration1'>
        <h3>Iteration 1</h3>
        <IdCard
          lastName="Doe"
          firstName="John"
          gender="male"
          height={178}
          birth={new Date('1992-07-14').toLocaleDateString()}
          picture="https://randomuser.me/api/portraits/men/44.jpg"
        />

        <IdCard
          lastName="Delores"
          firstName="Obrien"
          gender="female"
          height={172}
          birth={new Date('1988-05-11').toLocaleDateString()}
          picture="https://randomuser.me/api/portraits/women/44.jpg"
        />
      </div>

      <div className='iteration2'>
        <h3>Iteration 2</h3>
        <Greetings lang="de">Ludwig</Greetings>
        <Greetings lang="fr">François</Greetings>
      </div>

      <div className='iteration3'>
        <h3>Iteration 3</h3>
        <Random min={1} max={6} />
        <Random min={1} max={100} />
      </div>

      <div className='iteration4'>
        <h3>Iteration 4</h3>
        <BoxColor r={255} g={0} b={0} />
        <BoxColor r={128} g={255} b={0} />
      </div>

    </div>
  );
}

export default App;
