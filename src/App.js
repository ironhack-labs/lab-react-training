import './App.css';
import IdCard from './components/IdCard';
import Greetings from './components/Greetings'
import Random from './components/Random'
import BoxColor from './components/BoxColor'

function App() {
  return (
    <div className="App">

      {/*Iteration1:*/}
      <IdCard
        lastName='Doe'
        firstName='John'
        gender='male'
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
      {/*Iteration2:*/}
      <Greetings lang="de">Ludwig</Greetings>
      <Greetings lang="fr">François</Greetings>

      {/*Iteration3:*/}
      <Random min={1} max={6}/>
      <Random min={1} max={100}/>

      {/*Iteration4:*/}
      <BoxColor r={255} g={0} b={0} hex="#ff0000"/>
      <BoxColor r={128} g={255} b={0} hex="80ff00"/>

      {/*Iteration5:*/}
    </div>
  );
}

export default App;
