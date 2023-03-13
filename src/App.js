import './App.css';
import BoxColor from './components/BoxColor';
import Greetings from './components/Greetings';
import IdCard from './components/IdCard';
import Random from './components/Random';

function App() {
  return (
    <div className="App">

      <h1 className='text-center mt-3'>Iteration 1</h1>
     <IdCard
      lastName='Doe'
      firstName='John'
      gender='male'
      height={178}
      birth="1992-07-14"
      picture="https://randomuser.me/api/portraits/men/44.jpg"
     />
     <IdCard
      lastName='Delores '
      firstName='Obrien'
      gender='female'
      height={172}
      birth="1988-05-11"
      picture="https://randomuser.me/api/portraits/women/44.jpg"
    />

    <h1 className='text-center'>Iteration 2</h1>
    <Greetings lang="de">Ludwig</Greetings>
    <Greetings lang="fr">François</Greetings>

    <h1 className='text-center'>Iteration 3</h1>
    <Random min={1} max={6}/>
    <Random min={1} max={100}/>

    <h1 className='text-center'>Iteration 4</h1>
    <BoxColor r={250} g={0} b={0} />
    <BoxColor r={128} g={255} b={0} />

    </div>
  );
}

export default App;
