import './App.css';
import IdCard from './components/IdCard';
import Greetings from './components/Greetings';
import Random from './components/Random';
import BoxColor from './components/BoxColor';

function App() {
  return (
    <div className="App">
      {/*Iteration 1*/}
      <IdCard
        lastName='Doe'
        firstName='John'
        gender='male'
        height={178}
        birth={"14/07/1992"}
        picture="https://randomuser.me/api/portraits/men/44.jpg"
      />
      <IdCard
        lastName='Delores '
        firstName='Obrien'
        gender='female'
        height={172}
        birth={"11/05/1988"}
        picture="https://randomuser.me/api/portraits/women/44.jpg"
      />

      {/*Iteration 2*/}
      <Greetings lang="de">Ludwig</Greetings>
      <Greetings lang="fr">François</Greetings>

      {/*Iteration 3*/}
      <Random min={1} max={6}/>
      <Random min={1} max={100}/>

      {/*Iteration 4*/}
      <BoxColor r={255} g={0} b={0} />
      <BoxColor r={128} g={255} b={0} />

      {/*Iteration 5*/}

    </div>
  );
}

export default App;
